"""Optional local baseline audit; does not read or mutate Git credentials/config."""
from pathlib import Path
import hashlib
import json
import subprocess
ROOT=Path(__file__).resolve().parents[1]

def verify(check_heads: bool = True) -> dict:
    path=ROOT/'.local-review/baseline.json'
    if not path.is_file(): return {'baseline':'not available on this checkout'}
    baseline=json.loads(path.read_text(encoding='utf-8'))
    actual={p.relative_to(ROOT).as_posix():hashlib.sha256(p.read_bytes()).hexdigest() for p in (ROOT/'learning/项目学习').rglob('*') if p.is_file() and '.git' not in p.parts}
    if actual!=baseline['projectFiles']: raise AssertionError('Protected project files changed')
    head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip()
    learning_head=subprocess.check_output(['git','-C','learning','rev-parse','HEAD'],cwd=ROOT,text=True).strip()
    if check_heads and (head!=baseline['head'] or learning_head!=baseline['learningHead']): raise AssertionError('Repository HEAD changed')
    return {'protectedFiles':len(actual),'blogHead':head,'learningHead':learning_head,'unchanged':True}

if __name__=='__main__': print(json.dumps(verify(),ensure_ascii=False,indent=2))

"""Redact incidental local identifiers in public copies, never source notes."""
import re

def public_markdown(text: str) -> str:
    text=re.sub(r"[A-Za-z]:[\\/]codex[\\/][^\s`<>\"']+", 'YOUR_PROJECT_DIR', text, flags=re.I)
    return re.sub(r'(?<!\d)1[3-9]\d{9}(?!\d)', 'PHONE_EXAMPLE', text)

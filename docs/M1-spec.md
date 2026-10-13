# M1 – Spec, Data Model & Accessibility Plan

**Theme:** Student Finance Tracker

## Pages
About · Dashboard · Records · Add/Edit Form · Settings

## Data model
Record: id (`txn_0001`), description, amount, category, date (YYYY-MM-DD), createdAt, updatedAt (ISO).
Settings: base currency + 2 others with manual rates, spending cap, editable category list.
Storage: localStorage, auto-saved on every change. JSON import/export is validated first.

## Validation rules (regex)
| Field | Rule |
|---|---|
| Description | no leading/trailing spaces: `^\S(?:.*\S)?$`; double spaces collapsed |
| Amount | `^(0\|[1-9]\d*)(\.\d{1,2})?$` |
| Date | `^\d{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[12]\d\|3[01])$` |
| Category | `^[A-Za-z]+(?:[ -][A-Za-z]+)*$` |
| Advanced | duplicate-word back-reference `\b(\w+)\s+\1\b` |

## Accessibility plan
- Landmarks: header, nav, main, section, footer; one h1, no skipped heading levels
- Skip-to-content link as the first focusable element
- Every input has a bound label; errors announced via role="status"/aria-live
- Cap message: polite when under, assertive when exceeded
- Visible :focus-visible styles; whole app usable by keyboard only
- Text contrast at least 4.5:1; respect prefers-reduced-motion
- Mobile-first breakpoints at about 360px, 768px, 1024px

## Wireframes
See assets/ (About, Dashboard, Records, Form, Settings; mobile and desktop).
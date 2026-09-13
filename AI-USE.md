# AI Use Log

AI tool used: Claude (Anthropic)and Gemini(Google), chat conversation, September 2026.
Used throughout to understand concepts (semantic HTML, CSS selectors, box
model, cascade layers, tokens) and to help build the code, which I then
tested myself in my own browser.
## Prompt: "can you guide me for it... give me the summary what my
teacher wants"
**Claim:** Claude read the assignment brief, both readings, and the
lecture slides, and summarized that grading is mostly about design-system
tokens and CSS architecture (40 of 100 marks combined), not amount of
code, and that I could skip the "Responsive and Accessible Behavior"
section since my teacher said to ignore it.
**My test:** I reread the rubric table in the assignment PDF myself to
check the mark distribution matched.
**Result:** Confirmed — design-system definition and CSS architecture
really are the two biggest rubric lines. Accepted.

## Prompt: "whats this design system and style"
**Claim:** Claude explained that `design-system/` (tokens + components)
is meant to be reusable and portable to a different page, while `styles/`
(reset, base, layout, page) is plumbing specific to this one page — and
gave the test: could I add a third theme by only editing tokens.css,
touching zero component files?
**My test:** I checked my own `tokens.css` and `components.css` to see if
components really only reference token names and never a raw color value.
**Result:** Confirmed — every color in components.css uses var(--token-name),
none are hardcoded. Accepted.
## Prompt: "what is this @layer?"
**Claim:** Claude explained that `@layer` lets me fix the priority order
between my CSS files in advance, so a rule in `components.css` always
beats a rule in `layout.css` regardless of selector specificity, as long
as `components` is listed after `layout` in the `@layer` declaration.
**My test:** I opened my actual `.card` element in Firefox DevTools and
checked which rule was really being applied. It showed the rule coming
from `components.css:67`, inside `@layer components`, with nothing
crossed out or overriding it.
**Result:** Confirmed — matched what was explained. Accepted.
## Prompt: asking to find the card's box-model measurement in DevTools
**Claim:** Claude explained that with `box-sizing: border-box` set
globally in `reset.css`, a card's declared padding and border shouldn't
add extra width on top of its content — the box model diagram should
show them as already included.
**My test:** I inspected my actual event card in Firefox's Layout tab.
The box diagram showed content 214.333px × 249.6px, padding 24px on all
sides, border 1px on all sides, margin 0.
**Result:** Confirmed — 214.333 + 48 (padding) + 2 (border) = 264.3px
total, exactly what border-box should produce, no unexpected extra width.
Accepted.
## Prompt: self-check on "why" questions (article vs div, tokens, layer
order, label/id, data-attribute naming)
**Claim:** Claude gave a 5-question quiz testing whether I actually
understood these decisions, not just recognized the code.
**My test:** I answered all 5 without looking anything up.
**Result:** Got all 5 correct. Confirms I can explain these points if
asked in class. Accepted.
## Prompt (asked to Gemini): "why do the file paths in specimen.html have
../ in front of them but index.html doesn't?"
**Claim:** Gemini explained that `specimen.html` lives inside the
`design-system/` subfolder, so it must step out into the root directory
using `../` before entering `styles/` or referencing `tokens.css`.
`index.html` lives in the root directory, so it accesses subfolders
directly.
**My test:** Removed `../` from `specimen.html` and checked the Network
tab in DevTools. All CSS files returned 404 errors until `../` was
restored.
**Result:** Confirmed — path navigation is required for nested HTML
files. Accepted.

## Prompt: "can you list down each file purpose, what it has, what i need
to know, benefits, what if its not present in simple and easy wording
please"
**Claim:** Claude gave a full breakdown of every file in my project
(index.html, tokens.css, components.css, specimen.html, reset.css,
base.css, layout.css, page.css, theme.js, README.md, AI-USE.md) — its
purpose, what's inside it, what I should be able to explain, the benefit
of having it, and what would break if I removed it.
**My test:** I checked this against my actual files by opening each one
and comparing it to what was described, and I asked follow-up questions
on anything that wasn't clear yet — like what "those names" meant inside
components.css, and what specimen.html was really for.
**Result:** Confirmed — matched what's actually written in my files. This
is the point where the whole project actually clicked for me — I finally
understood why it needs this many separate files instead of one big one,
and what a token really is. Accepted.
---
Every line of code in this submission was reviewed and tested by me
before submission. I can explain the purpose of every file, token, and
selector above.
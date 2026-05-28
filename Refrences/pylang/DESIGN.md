---
name: PyLang
colors:
  surface: '#09151a'
  surface-dim: '#09151a'
  surface-bright: '#2f3b40'
  surface-container-lowest: '#041015'
  surface-container-low: '#111d22'
  surface-container: '#152126'
  surface-container-high: '#202c31'
  surface-container-highest: '#2a373c'
  on-surface: '#d7e5eb'
  on-surface-variant: '#becbb1'
  inverse-surface: '#d7e5eb'
  inverse-on-surface: '#263237'
  outline: '#88957d'
  outline-variant: '#3f4a36'
  surface-tint: '#6be026'
  primary: '#74e930'
  on-primary: '#133800'
  primary-container: '#58cc02'
  on-primary-container: '#1e5000'
  inverse-primary: '#2b6c00'
  secondary: '#edc22b'
  on-secondary: '#3c2f00'
  secondary-container: '#cfa700'
  on-secondary-container: '#4e3e00'
  tertiary: '#b1d1ff'
  on-tertiary: '#00315b'
  tertiary-container: '#7db7ff'
  on-tertiary-container: '#00477e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#87fe45'
  primary-fixed-dim: '#6be026'
  on-primary-fixed: '#082100'
  on-primary-fixed-variant: '#1f5100'
  secondary-fixed: '#ffe086'
  secondary-fixed-dim: '#edc22b'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#d3e4ff'
  tertiary-fixed-dim: '#a1c9ff'
  on-tertiary-fixed: '#001c38'
  on-tertiary-fixed-variant: '#004880'
  background: '#09151a'
  on-background: '#d7e5eb'
  surface-variant: '#2a373c'
typography:
  display-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: '800'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '800'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  space-xs: 4px
  space-sm: 8px
  space-md: 16px
  space-lg: 24px
  space-xl: 32px
  container-margin: 20px
  gutter: 16px
---

## Brand & Style

The design system is built to transform Python education into a high-energy, gamified experience. It targets learners who crave dopamine-driven progress, utilizing a **Tactile / Modern** hybrid style. This approach combines the clean, flat surfaces of modern SaaS with "squishy" 3D-effect interactive elements that provide immediate physical satisfaction upon interaction.

The UI is optimized for a **dark-mode-first** experience, evoking the aesthetic of a high-end IDE while maintaining the friendliness of a mobile game. The emotional response should be one of continuous achievement, excitement, and approachability, lowering the barrier to entry for complex coding concepts through playful visual cues.

## Colors

The palette is anchored by a deep charcoal background to ensure high legibility of code snippets and vibrant UI elements. 

- **Primary Green:** Used for "Check" buttons, progress bars, and positive reinforcement. It represents movement and success.
- **Secondary Yellow:** Reserved for Python-specific branding accents, streak icons, and warning states. 
- **Tertiary Blue:** Used for secondary navigational elements or instructional hints.
- **Surface Strategy:** Surfaces use subtle shifts in charcoal depth to create hierarchy. The background is the darkest layer, with interactive cards and input areas sitting on slightly lighter "Surface Dark" tones.

## Typography

This design system uses **Be Vietnam Pro** for its friendly, rounded terminals which mirror the "approachable" nature of Python. For code-specific content and technical labels, **JetBrains Mono** is introduced to provide the necessary precision and monospaced rhythm essential for syntax recognition.

Headlines should always use heavy weights (700-800) to maintain the bold, energetic brand voice. Body text remains generous in size (16px-18px) to ensure comfort during long reading sessions on mobile devices.

## Layout & Spacing

The layout follows a **fluid-to-fixed** model. On mobile devices, content is fluid with 20px side margins. On desktop, content is centered within a 1024px maximum width container to prevent line lengths from becoming unreadable.

Spacing is based on a 4px grid. Larger gaps (24px+) are used between distinct learning "blocks" or exercises, while tighter spacing (8px-12px) is used to group related elements like a question title and its multi-choice options.

## Elevation & Depth

Depth is not achieved through realistic shadows, but through **Tonal Layers** and **Hard-Shadow Offsets**. 

- **The "Squish" Effect:** Interactive elements feature a bottom border (2px to 4px) that is a darker shade of the element's base color. When pressed, the element translates Y-axis downward, hiding the "shadow" border to simulate a physical button press.
- **Cards:** Use a flat 2px solid stroke (`#37464F`) instead of soft shadows to maintain a crisp, comic-book adjacent aesthetic.
- **Modals:** Use a heavy backdrop blur (20px) with a 60% opacity black overlay to isolate the learning task from the background.

## Shapes

The design system utilizes **Rounded** shapes to reinforce the friendly and gamified atmosphere. 

- **Primary Containers:** 16px (rounded-lg) for exercise cards and code blocks.
- **Interactive Elements:** 12px (rounded-md) for buttons and input fields.
- **Progress Trackers:** Fully rounded (pill-shaped) to represent a continuous flow of learning.
- **Selection States:** When an item is selected, its border width increases to 2px, and the background utilizes a subtle tint of the primary green.

## Components

### Buttons
Buttons are the core of the tactile experience. They must have a "3D" bottom border.
- **Primary:** Emerald green background with a dark-green bottom border. Text is white.
- **Secondary:** Surface-dark background with a `#37464F` bottom border. Text is white.
- **Ghost:** No background, stroke only. Used for "Skip" or "Back."

### Progress Bars
Playful and chunky. The container is a dark trough (`#37464F`), and the inner fill is a vibrant emerald green with a subtle "sheen" highlight on the top half.

### Lists & Options
Multi-choice options are cards with 2px borders.
- **Default:** Gray border.
- **Hover/Selected:** Blue border and light blue background tint.
- **Correct:** Green border and green background tint.
- **Incorrect:** Red border and red background tint.

### Gamification Elements
- **Streaks:** Use the secondary yellow with a flame icon.
- **Hearts/Lives:** Vibrant red with a subtle inner glow.
- **Gems:** Hexagonal shapes using a purple-to-blue gradient.

### Code Editor
Syntax highlighting should be optimized for dark mode, using the primary green for functions, yellow for strings, and light blue for variables. The editor background should be slightly darker than the standard surface (`#0F171A`).
# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Red: hsl(0, 100%, 74%) 
- Green: hsl(154, 59%, 51%)

### Accent

- Blue: hsl(248, 32%, 49%)

### Neutral

- Dark Blue: hsl(249, 10%, 26%) 
- Grayish Blue: hsl(246, 25%, 77%)

## Typography

### Body Copy

- Font size: 16px

### Font

- Family: [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 400, 500, 600, 700

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.

@media (max-width: 768px) {
    .wrapper {
        justify-content: center;
        align-items: flex-start;
        padding: 1rem;
    }

    .container {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }

    .hero {
        text-align: center;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .hero p {
        font-size: 1rem;
    }

    .form-section {
        max-width: 100%;
        width: 100%;
    }

    .ad {
        font-size: 1rem;
    }

    .input-box {
        padding: 1rem;
    }

    .input-area {
        padding: .5rem 1rem;
    }

    .button input {
        padding: .5rem 1rem;
        font-size: 1rem;
    }

    .disclaimer {
        font-size: .7rem;
    }
}

@media (max-width: 430px) {
    .wrapper {
        justify-content: flex-start;
        align-items: flex-start;
        padding: 1rem;
    }

    .container {
        flex-direction: column;
        display: inline;
        gap: 1rem;
        padding: 1rem;
    }

    .hero {
        width: 100%;
        text-align: center;
    }

    .hero h1 {
        font-size: 1.5rem;
    }

    .hero p {
        font-size: .875rem;
    }

    .form-section {
        max-width: 100%;
        width: 100%;
    }

    .ad {
        font-size: .875rem;
    }

    .input-box {
        padding: 1rem;
    }

    .input-area {
        padding: .5rem 1rem;
    }

    .button input {
        padding: .5rem 1rem;
        font-size: .875rem;
    }

    .disclaimer {
        font-size: .625rem;
    }
}

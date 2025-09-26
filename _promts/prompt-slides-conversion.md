# Prompt: Conversion of Markdown Files to Presentation Slides

## Goal
Convert each markdown file into presentation-ready slides for lecture delivery. Each markdown file represents one part of a lecture, which should be visually divided into multiple slide sections. Each section should resemble a slide, with additional lecture notes hidden in collapsible details at the bottom of each slide-section.

## Context
This is for a course on "Computer Programs in Renewable Energy Systems (OZE) Design". The markdown files contain lecture content that needs to be restructured for live presentation during lectures.

## Requirements

### 1. Slide Structure
- **Visual Division**: Each markdown file should be divided into clear slide sections
- **Slide Sections**: Each section should represent one slide with:
  - Clear heading (slide title)
  - Concise content (bullet points, key concepts)
  - Visual separation between slides
  - Maximum 5-7 bullet points per slide
  - Key information highlighted

### 2. Content Organization
- **Main Content**: Keep essential information visible on each slide
- **Lecture Notes**: Add detailed lecture notes in collapsible sections using HTML `<details>` and `<summary>` tags
- **Progressive Disclosure**: Structure content from general to specific
- **Visual Hierarchy**: Use appropriate heading levels (H1 for slide titles, H2 for subsections)

### 3. Slide-Section Format
Each slide section should follow this structure:
```markdown
## Slide Title

### Key Points
- Main point 1
- Main point 2
- Main point 3

### Supporting Details
- Additional context
- Examples
- Technical specifications

<details>
<summary>Lecture Notes (Click to expand)</summary>

**Detailed lecture content:**
- Extended explanations
- Background information
- Teaching tips
- Examples and case studies
- Questions for students
- Transition notes to next slide

</details>
```

### 4. Content Guidelines
- **Clarity**: Each slide should have a single, clear focus
- **Brevity**: Keep slide content concise and scannable
- **Engagement**: Include interactive elements where appropriate
- **Progression**: Ensure logical flow between slides
- **Accessibility**: Use clear, readable formatting

### 5. Special Considerations for OZE Course
- **Technical Accuracy**: Maintain precision in technical terminology
- **Visual Elements**: Preserve references to diagrams, charts, and software interfaces
- **Practical Examples**: Keep real-world applications and case studies
- **Software References**: Maintain specific tool names and capabilities
- **Learning Objectives**: Preserve educational goals and outcomes

### 6. Output Format
- Convert existing markdown structure into slide-ready format
- Maintain original content while improving presentation flow
- Add slide transitions and logical breaks
- Include hidden lecture notes for instructor guidance
- Ensure each slide can stand alone while contributing to overall narrative

## Example Transformation

**Before (Original):**
```markdown
## 1. Klasyfikacja narzędzi programowych OZE

Narzędzia wykorzystywane w projektowaniu instalacji OZE można podzielić na trzy główne kategorie.

### 1.1 Narzędzia CAD (Computer-Aided Design)
- Modelowanie geometryczne instalacji (np. AutoCAD – układy paneli, trasy kablowe, lokalizacje turbin)
- Projektowanie konstrukcji nośnych (SolidWorks, CATIA)
- Wizualizacja projektów (SketchUp)
- Zalety: precyzja geometryczna, dokumentacja techniczna zgodna ze standardami
```

**After (Slide Format):**
```markdown
## Slide 1: Classification of OZE Design Tools

### Three Main Categories
- **CAD Tools**: Geometric modeling and visualization
- **CAE Tools**: Advanced engineering analysis
- **Specialized Software**: Industry-specific solutions

### CAD Tools Overview
- AutoCAD: Panel layouts, cable routing
- SolidWorks/CATIA: Structural design
- SketchUp: 3D visualization
- **Key Advantage**: Precision and standards compliance

<details>
<summary>Lecture Notes (Click to expand)</summary>

**Teaching Points:**
- Start with the big picture: why we need different tool categories
- Emphasize that each category serves different project phases
- Use examples from students' potential future work
- Connect to real project scenarios they might encounter

**Questions to Ask:**
- "What type of tool would you use for initial site assessment?"
- "When would you switch from CAD to CAE tools?"

**Transition:** "Now let's dive deeper into each category..."

</details>
```

## Quality Checklist
- [ ] Each slide has a clear, focused message
- [ ] Content is appropriately condensed for presentation
- [ ] Lecture notes provide sufficient detail for instructor
- [ ] Logical flow between slides is maintained
- [ ] Technical accuracy is preserved
- [ ] Interactive elements are included where appropriate
- [ ] Visual hierarchy is clear and consistent
- [ ] Content is accessible and engaging for students

## Expected Outcome
Each markdown file should be transformed into a series of well-structured slides that can be used directly for lecture presentation, with comprehensive instructor notes hidden in collapsible sections for reference during delivery.

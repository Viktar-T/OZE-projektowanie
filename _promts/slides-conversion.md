# Slide Conversion Prompt

## Goal
Convert markdown files into visually attractive, card-based presentation slides for OZE (Renewable Energy Systems) course lectures. Each slide should be a separate card with rich visual elements, colors, and interactive components.

## Core Requirements

### 1. Card-Based Structure
- **Each slide = separate card** with styled container
- **Visual boundaries**: Rounded borders, shadows, gradients
- **Clear separation** between slides
- **Maximum 5-7 bullet points** per slide

### 2. Visual Enhancements
- **Emojis & Icons**: 🎯 goals, 📊 data, 🔧 tools, ⚡ energy, 🌱 renewable, 💻 tech, 📈 trends, 🎓 education
- **Colored Callouts**: 
  - Yellow (#fff3cd) - key points
  - Blue (#d1ecf1) - supporting details  
  - Green (#d4edda) - success/achievements
  - Red (#f8d7da) - warnings/critical
  - Purple (#e2e3f1) - advanced concepts
- **Gradients**: Subtle backgrounds with high contrast
- **Infographics**: Replace lists with timelines, flowcharts, diagrams

### 3. Slide Format Template
```markdown
<div style="border: 2px solid #4CAF50; border-radius: 10px; padding: 20px; margin: 20px 0; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

# 🎯 Slide Title with Emoji

<div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 10px 0; border-radius: 5px;">
## 📋 Key Points
- ✅ **Main point 1** with visual indicator
- 🔥 **Main point 2** with emphasis  
- 💡 **Main point 3** with insight icon
</div>

<div style="background: #d1ecf1; border-left: 4px solid #17a2b8; padding: 15px; margin: 10px 0; border-radius: 5px;">
## 🔧 Supporting Details
- 📊 **Additional context** with data icon
- 🎨 **Examples** with visual indicator
- ⚙️ **Technical specifications** with gear icon
</div>

<details>
<summary>🎓 Wykładowca: Szczegółowe notatki (Kliknij aby rozwinąć)</summary>
**Szczegółowa zawartość wykładu:**
- 📝 Rozszerzone wyjaśnienia
- 📚 Informacje tła
- 💡 Wskazówki dydaktyczne
- 📖 Przykłady i studia przypadków
- ❓ Pytania dla studentów
- 🔄 Notatki przejściowe do następnego slajdu
</details>

</div>
```

### 4. Content Guidelines
- **Single focus** per slide with visual emphasis
- **Concise content** with visual indicators
- **Progressive disclosure** from general to specific
- **Technical accuracy** maintained with visual clarity
- **Educational goals** preserved with achievement emojis

### 5. Color Coding System
- 🟢 **Green**: Renewable energy topics
- 🔵 **Blue**: Technical/software content  
- 🟠 **Orange**: Warnings/important notes
- 🟣 **Purple**: Advanced concepts
- 🔴 **Red**: Critical information

### 6. Visual Separators
- `---` with emoji separators
- `🎯 ➡️ 🎯` for slide transitions
- `📊 📈 📊` for data content
- `💻 🔧 💻` for technical content

## Quality Checklist
- [ ] Card-based design with proper styling
- [ ] Colored callouts for important information
- [ ] Gradients enhance appeal while maintaining readability
- [ ] Infographics replace text-heavy lists
- [ ] High contrast maintained for accessibility
- [ ] Consistent styling across all slides
- [ ] Technical accuracy preserved
- [ ] Educational content enhanced with appropriate visuals

## Expected Outcome
Transform each markdown file into visually attractive, card-based slides featuring:
- **Rich visual elements** with emojis, icons, and color coding
- **Colored callouts and boxes** for information hierarchy
- **Gradient backgrounds** with maintained readability
- **Infographics and visual elements** replacing text lists
- **Professional appearance** with educational focus
- **Comprehensive instructor notes** in collapsible sections
- **Seamless visual flow** between slides

Result: Presentation-ready slides that are visually appealing, educationally effective, and suitable for modern lecture delivery with enhanced student engagement.
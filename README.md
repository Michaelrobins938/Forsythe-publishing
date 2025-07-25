# Micha's Art Gallery - React Edition

A professional, modern art gallery website built with React, Adobe Spectrum UI, and Victory charts. This application showcases digital artwork with advanced filtering, analytics, and AI-powered insights.

## 🎨 Features

### Core Gallery Features
- **Responsive Grid Layout** - Beautiful card-based gallery with hover effects
- **Advanced Filtering** - Filter by type (images/videos), category, and more
- **Interactive Modals** - Detailed artwork view with metadata
- **AI Agent Integration** - Automated organization and categorization
- **Real-time Analytics** - Professional charts and insights

### Professional UI Components
- **Adobe Spectrum UI** - Enterprise-grade design system
- **Victory Charts** - Beautiful data visualization
- **Responsive Design** - Works perfectly on all devices
- **Accessibility** - WCAG compliant with keyboard navigation
- **Modern Animations** - Smooth transitions and hover effects

### Analytics & Insights
- **Category Distribution** - Interactive pie charts
- **Engagement Trends** - Line charts showing performance
- **AI Recommendations** - Smart suggestions for content optimization
- **Performance Metrics** - Real-time engagement scoring

## 🚀 Tech Stack

- **React 18** - Modern React with hooks and TypeScript
- **Adobe Spectrum UI** - Professional design system
- **Victory Charts** - Data visualization library
- **TypeScript** - Type-safe development
- **CSS3** - Custom styling with animations

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Michaelrobins938/Forsythe-publishing.git
   cd forsythe-gallery
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Navigation
- **All Art** - View all artwork in the gallery
- **Images** - Filter to show only images
- **Videos** - Filter to show only videos
- **Analytics** - View performance charts and metrics
- **AI Insights** - Get AI-powered recommendations

### Gallery Interaction
- **Click any artwork card** to view details in a modal
- **Use the floating action button** (+) for upload functionality
- **Hover over cards** for enhanced visual effects
- **Filter using the navigation buttons** to find specific content

### Analytics Dashboard
- **Category Distribution** - Pie chart showing artwork categories
- **Engagement Trends** - Line chart tracking performance over time
- **Top Performing** - List of highest-engagement artwork
- **AI Recommendations** - Suggestions for content optimization

## 🎨 Customization

### Adding Your Artwork
1. Replace the `sampleArtworks` array in `src/App.tsx`
2. Add your artwork data with the following structure:
   ```typescript
   {
     id: string;
     src: string; // Image/video URL
     title: string;
     description: string;
     type: 'image' | 'video';
     category: string;
     size: string;
     date: string;
     tags: string[];
     engagementScore: number;
   }
   ```

### Styling Customization
- Modify `src/App.css` for custom styling
- Update color variables in the CSS root section
- Customize animations and transitions
- Adjust responsive breakpoints

### Theme Customization
- Import different Spectrum themes
- Customize the `defaultTheme` object
- Add dark mode support
- Modify component variants

## 📊 Analytics Integration

### Victory Charts Used
- **VictoryPie** - Category distribution
- **VictoryLine** - Engagement trends
- **VictoryBar** - Performance metrics
- **VictoryChart** - Chart containers
- **VictoryAxis** - Chart axes
- **VictoryTooltip** - Interactive tooltips

### Data Visualization Features
- Interactive tooltips on hover
- Responsive chart sizing
- Custom color schemes
- Smooth animations
- Professional styling

## 🤖 AI Agent Features

### Automated Organization
- Smart categorization of artwork
- Tag generation based on content
- Engagement score calculation
- Performance optimization suggestions

### AI Insights
- Content recommendations
- Trend analysis
- Performance predictions
- Optimization strategies

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push
3. Get a production URL instantly

### Netlify
1. Drag and drop the build folder
2. Or connect to GitHub for auto-deploy
3. Configure custom domain

### GitHub Pages
1. Run `npm run build`
2. Deploy the `build` folder to GitHub Pages
3. Configure in repository settings

## 📱 Responsive Design

The gallery is fully responsive and optimized for:
- **Desktop** - Full grid layout with 4 columns
- **Tablet** - 2-3 column layout
- **Mobile** - Single column layout
- **Touch devices** - Optimized touch interactions

## ♿ Accessibility

- **WCAG 2.1 AA compliant**
- **Keyboard navigation** support
- **Screen reader** friendly
- **High contrast** mode support
- **Focus indicators** for all interactive elements

## 🔧 Development

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

### Project Structure
```
src/
├── App.tsx          # Main application component
├── App.css          # Custom styles
├── index.tsx        # Application entry point
└── components/      # Reusable components (future)
```

## 🎯 Future Enhancements

- [ ] **Upload functionality** - Drag & drop file upload
- [ ] **Search feature** - Full-text search across artwork
- [ ] **Collections** - Organize artwork into collections
- [ ] **Social sharing** - Share artwork on social media
- [ ] **Advanced filters** - Date range, size, tags
- [ ] **Export functionality** - Download artwork data
- [ ] **User authentication** - Multi-user support
- [ ] **Real-time updates** - Live data synchronization

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact: [Your Contact Information]
- Documentation: [Link to docs]

---

**Built with ❤️ using React, Adobe Spectrum UI, and Victory Charts** 
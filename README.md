# Micha's Art Gallery Website

A beautiful, modern art gallery website to showcase your digital artwork, photographs, and videos. This website features a responsive design, elegant animations, and an interactive lightbox for viewing your artwork in detail. Enhanced with **Spectrum UI** components and **Victory** data visualizations.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, elegant design with smooth animations and transitions
- **Filter System**: Filter artwork by type (All Art, Images, Videos, Analytics)
- **Interactive Lightbox**: Click on any artwork to view it in full size with navigation
- **Keyboard Navigation**: Use arrow keys and Escape key in the lightbox
- **Lazy Loading**: Images load as you scroll for better performance
- **Mobile-Friendly**: Touch-friendly interface with mobile menu

### 🎨 Spectrum UI Components
- **Animated Buttons**: Beautiful gradient buttons with hover effects
- **Floating Action Button (FAB)**: Quick access to upload, share, and download features
- **Toast Notifications**: Elegant notification system for user feedback
- **Modal Dialogs**: Professional upload modal with drag-and-drop functionality
- **Progress Bars**: Loading indicators with smooth animations
- **Upload Interface**: Drag-and-drop file upload with preview

### 📊 Victory Charts Integration
- **Analytics Dashboard**: View gallery statistics and insights
- **Artwork Distribution**: Pie chart showing image vs video distribution
- **Monthly Creations**: Line chart tracking artwork creation over time
- **File Size Distribution**: Bar chart analyzing file sizes
- **Interactive Charts**: Hover effects and responsive design

## 🚀 How to Use

1. **Open the Website**: Double-click on `index.html` to open the website in your web browser
2. **Browse Artwork**: Scroll through the gallery to see all your artwork
3. **Filter Artwork**: Use the buttons at the top to view specific categories
4. **View Analytics**: Click "Analytics" to see gallery statistics and charts
5. **Upload New Art**: Use the floating action button (+) to upload new artwork
6. **View in Detail**: Click any artwork to open the lightbox
7. **Navigate**: Use arrow buttons or keyboard arrows to browse through artwork
8. **Share Gallery**: Use the FAB menu to share your gallery

## 📁 File Structure

```
Your Art Gallery/
├── index.html          # Main website file with Spectrum UI components
├── styles.css          # All styling including Spectrum UI and Victory charts
├── script.js           # Interactive functionality with enhanced features
├── README.md           # This file
├── My artwork/         # Your artwork folder
│   ├── [Your PNG files]
│   ├── [Your JPG files]
│   └── [Your MP4 files]
└── [Other artwork files]
```

## 🎯 Spectrum UI Components Used

### Animated Button
```html
<button class="spectrum-btn" id="exploreBtn">
    <span class="spectrum-btn-content">
        <span class="spectrum-btn-text">Explore Gallery</span>
        <span class="spectrum-btn-icon">
            <i class="fas fa-arrow-right"></i>
        </span>
    </span>
</button>
```

### Floating Action Button
```html
<div class="fab-container">
    <button class="fab" id="fabBtn">
        <i class="fas fa-plus"></i>
    </button>
    <div class="fab-menu" id="fabMenu">
        <button class="fab-item" data-action="upload">
            <i class="fas fa-upload"></i>
            <span>Upload Art</span>
        </button>
        <!-- More FAB items -->
    </div>
</div>
```

### Toast Notifications
```javascript
gallery.showToast('Welcome to the gallery! 🎨', 'success');
```

### Upload Modal
- Drag-and-drop file upload
- File preview with remove functionality
- Support for images and videos
- Progress indicators

## 📈 Victory Charts Features

### Analytics Dashboard
- **Artwork Distribution**: Visual breakdown of image vs video content
- **Monthly Creations**: Timeline of artwork creation
- **File Size Analysis**: Distribution of file sizes in your collection
- **Interactive Elements**: Hover effects and responsive design

### Chart Types
1. **Pie Chart**: Shows proportion of images vs videos
2. **Line Chart**: Tracks artwork creation over time
3. **Bar Chart**: Analyzes file size distribution

## 🛠️ Customization

### Adding New Artwork

To add new artwork to your gallery:

1. **Place your files** in the appropriate folder (main folder or "My artwork" folder)
2. **Update the JavaScript** in `script.js`:
   - Find the `loadArtworks()` function
   - Add a new artwork object to either `mainFolderArtworks` or `myArtworkFolder` arrays
   - Follow this format:

```javascript
{
    src: 'path/to/your/file.jpg',
    title: 'Your Artwork Title',
    description: 'A description of your artwork',
    type: 'image', // or 'video'
    category: 'images', // or 'videos'
    size: 2.5, // file size in MB
    date: '2025-01-15' // creation date
}
```

### Adding New Spectrum UI Components

To add more Spectrum UI components:

1. **Add HTML structure** in `index.html`
2. **Add CSS styling** in `styles.css`
3. **Add JavaScript functionality** in `script.js`

Example of adding a new component:
```javascript
// In script.js
setupNewComponent() {
    const newComponent = document.getElementById('newComponent');
    if (newComponent) {
        newComponent.addEventListener('click', () => {
            this.showToast('New component activated!', 'success');
        });
    }
}
```

### Customizing Victory Charts

To customize the charts:

1. **Modify chart data** in the `createChartPlaceholders()` function
2. **Add new chart types** by creating new chart containers
3. **Customize chart styling** in the CSS

### Changing Colors

To change the website colors, edit `styles.css`:

- **Primary Colors**: Look for `#667eea` and `#764ba2` (the purple gradient)
- **Background**: Modify the `background` property in the `body` selector
- **Text Colors**: Change `#333` for main text and `#666` for secondary text
- **Spectrum UI Colors**: Update gradient values in component classes

### Changing Fonts

The website uses Google Fonts:
- **Headings**: Playfair Display (elegant serif font)
- **Body Text**: Inter (clean sans-serif font)

To change fonts, update the Google Fonts link in `index.html` and the font-family properties in `styles.css`.

## 🌐 Browser Compatibility

This website works in all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## ⚡ Performance Tips

- **Image Optimization**: Consider compressing large images for faster loading
- **Video Optimization**: Use compressed video formats (MP4) for better performance
- **File Names**: Use descriptive file names for better organization
- **Lazy Loading**: Images load as you scroll for optimal performance

## 🔧 Troubleshooting

### Images Not Loading
- Make sure the file paths in `script.js` match your actual file locations
- Check that file names match exactly (including case sensitivity)

### Videos Not Playing
- Ensure videos are in MP4 format for best browser compatibility
- Check that video files are not corrupted

### Website Not Working
- Make sure all three files (`index.html`, `styles.css`, `script.js`) are in the same folder
- Try opening the website in a different browser

### Spectrum UI Components Not Working
- Check that all JavaScript functions are properly initialized
- Ensure CSS classes are correctly applied
- Verify that Font Awesome icons are loading

## 📚 Libraries Used

- **Spectrum UI**: Modern UI components inspired by Aceternity UI, Magic UI, and ShadCN UI
- **Victory**: React-based data visualization library for charts
- **Font Awesome**: Icon library for beautiful icons
- **Google Fonts**: Typography (Playfair Display, Inter)
- **Tailwind CSS**: Utility-first CSS framework (CDN)

## 🎨 Credits

- **Spectrum UI**: Inspired by [Spectrum UI](https://github.com/arihantcodes/spectrum-ui) components
- **Victory Charts**: Data visualization by [FormidableLabs/victory](https://github.com/FormidableLabs/victory)
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Font Awesome
- **Design**: Custom modern gallery design with Spectrum UI integration

## 🚀 Future Enhancements

- **Real Victory Charts**: Full React integration for interactive charts
- **More Spectrum UI Components**: Additional modern UI elements
- **Advanced Analytics**: More detailed statistics and insights
- **Social Features**: Comments, likes, and sharing
- **Advanced Upload**: Batch upload and cloud storage integration

## 💡 Support

If you need help customizing your art gallery website, you can:
1. Edit the files directly in any text editor
2. Modify the CSS for styling changes
3. Update the JavaScript for functionality changes
4. Add more Spectrum UI components for enhanced UX
5. Integrate more Victory charts for better analytics

Enjoy showcasing your beautiful artwork with modern UI components and data visualizations! 🎨✨ 
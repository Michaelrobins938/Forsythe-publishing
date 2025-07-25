// Art Folder Scanner - Automated Gallery Data Generator
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ArtFolderScanner {
    constructor() {
        this.artworks = [];
        this.categories = {
            'digital-art': { name: 'Digital Art', count: 0 },
            'photography': { name: 'Photography', count: 0 },
            'illustration': { name: 'Illustration', count: 0 },
            'animation': { name: 'Animation', count: 0 },
            'mixed-media': { name: 'Mixed Media', count: 0 },
            'concept-art': { name: 'Concept Art', count: 0 },
            'sketches': { name: 'Sketches', count: 0 }
        };
        this.supportedFormats = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.mp4', '.mov', '.avi', '.webm'];
    }

    // Main scanning function
    async scanArtFolder(folderPath = './') {
        console.log('🎨 Starting Art Folder Scanner...');
        console.log(`📁 Scanning folder: ${path.resolve(folderPath)}`);
        
        try {
            // Scan main folder
            await this.scanDirectory(folderPath, '');
            
            // Scan "My artwork" subfolder if it exists
            const myArtworkPath = path.join(folderPath, 'My artwork');
            if (fs.existsSync(myArtworkPath)) {
                console.log('📂 Found "My artwork" folder, scanning...');
                await this.scanDirectory(myArtworkPath, 'My artwork/');
            }
            
            // Process and categorize artworks
            this.processArtworks();
            
            // Generate output files
            this.generateOutputFiles();
            
            console.log(`✅ Scan complete! Found ${this.artworks.length} artworks`);
            return this.artworks;
            
        } catch (error) {
            console.error('❌ Error scanning art folder:', error);
            throw error;
        }
    }

    // Recursively scan directory for art files
    async scanDirectory(dirPath, relativePath) {
        const items = fs.readdirSync(dirPath);
        
        for (const item of items) {
            const fullPath = path.join(dirPath, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                // Skip node_modules and other system folders
                if (!['node_modules', '.git', '.vscode', '__pycache__'].includes(item)) {
                    await this.scanDirectory(fullPath, path.join(relativePath, item));
                }
            } else if (stat.isFile()) {
                const ext = path.extname(item).toLowerCase();
                if (this.supportedFormats.includes(ext)) {
                    await this.processArtFile(fullPath, path.join(relativePath, item), stat);
                }
            }
        }
    }

    // Process individual art file
    async processArtFile(filePath, relativePath, stats) {
        try {
            const ext = path.extname(filePath).toLowerCase();
            const filename = path.basename(filePath);
            const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
            const createdDate = new Date(stats.birthtime).toISOString().split('T')[0];
            const modifiedDate = new Date(stats.mtime).toISOString().split('T')[0];
            
            // Determine file type
            const type = this.getFileType(ext);
            
            // Generate title from filename
            const title = this.generateTitle(filename);
            
            // Generate description
            const description = this.generateDescription(filename, type);
            
            // Categorize artwork
            const category = this.categorizeArtwork(filename, title, description);
            
            // Generate tags
            const tags = this.generateTags(filename, title, description);
            
            // Calculate engagement score
            const engagementScore = this.calculateEngagementScore(sizeMB, type, title, description);
            
            const artwork = {
                src: relativePath,
                title: title,
                description: description,
                type: type,
                category: category,
                size: parseFloat(sizeMB),
                date: createdDate,
                modifiedDate: modifiedDate,
                tags: tags,
                engagementScore: engagementScore,
                filename: filename,
                fileSize: stats.size,
                aiProcessed: true,
                lastUpdated: new Date().toISOString()
            };
            
            this.artworks.push(artwork);
            console.log(`📄 Processed: ${relativePath}`);
            
        } catch (error) {
            console.error(`❌ Error processing ${filePath}:`, error);
        }
    }

    // Determine file type
    getFileType(extension) {
        const videoFormats = ['.mp4', '.mov', '.avi', '.webm'];
        return videoFormats.includes(extension) ? 'video' : 'image';
    }

    // Generate title from filename
    generateTitle(filename) {
        const nameWithoutExt = path.basename(filename, path.extname(filename));
        
        // Handle ChatGPT generated images
        if (nameWithoutExt.includes('ChatGPT Image')) {
            const parts = nameWithoutExt.split(' ');
            const timePart = parts.slice(-3).join(' '); // Get time part
            return `AI-Generated Artwork - ${timePart}`;
        }
        
        // Handle IMG_ files
        if (nameWithoutExt.startsWith('IMG_')) {
            return `Photographic Art - ${nameWithoutExt}`;
        }
        
        // Handle UUID-style filenames
        if (nameWithoutExt.match(/^[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}$/i)) {
            return `Artistic Creation - ${nameWithoutExt.substring(0, 8)}`;
        }
        
        // Handle descriptive filenames
        if (nameWithoutExt.includes(' ')) {
            return nameWithoutExt.replace(/_/g, ' ').replace(/-/g, ' ');
        }
        
        // Default title
        return `Artwork - ${nameWithoutExt}`;
    }

    // Generate description
    generateDescription(filename, type) {
        const nameWithoutExt = path.basename(filename, path.extname(filename));
        
        if (type === 'video') {
            if (nameWithoutExt.includes('Animation')) {
                return 'A mesmerizing animated piece showcasing dynamic movement and creative vision';
            }
            if (nameWithoutExt.includes('ScreenRecording')) {
                return 'A recording capturing the creative process and artistic workflow';
            }
            return 'A captivating video artwork with dynamic visual elements';
        }
        
        if (nameWithoutExt.includes('ChatGPT')) {
            return 'A stunning digital artwork created with AI assistance and creative vision';
        }
        
        if (nameWithoutExt.startsWith('IMG_')) {
            return 'A beautiful photographic piece from the art collection';
        }
        
        if (nameWithoutExt.includes('Flowing')) {
            return 'A beautiful piece featuring flowing colors and organic forms';
        }
        
        return 'A captivating artwork showcasing creative vision and artistic expression';
    }

    // Categorize artwork
    categorizeArtwork(filename, title, description) {
        const content = `${filename} ${title} ${description}`.toLowerCase();
        
        if (content.includes('img_') || content.includes('photo') || content.includes('photographic')) {
            return 'photography';
        }
        
        if (content.includes('animation') || content.includes('mp4') || content.includes('video')) {
            return 'animation';
        }
        
        if (content.includes('concept')) {
            return 'concept-art';
        }
        
        if (content.includes('sketch')) {
            return 'sketches';
        }
        
        if (content.includes('illustration')) {
            return 'illustration';
        }
        
        if (content.includes('mixed')) {
            return 'mixed-media';
        }
        
        return 'digital-art'; // default
    }

    // Generate tags
    generateTags(filename, title, description) {
        const tags = [];
        const content = `${filename} ${title} ${description}`.toLowerCase();
        
        // Content-based tags
        if (content.includes('digital') || content.includes('ai') || content.includes('chatgpt')) {
            tags.push('digital');
        }
        if (content.includes('color') || content.includes('vibrant') || content.includes('flowing')) {
            tags.push('colorful');
        }
        if (content.includes('dark') || content.includes('gothic')) {
            tags.push('dark');
        }
        if (content.includes('nature') || content.includes('organic')) {
            tags.push('nature');
        }
        if (content.includes('abstract') || content.includes('flowing')) {
            tags.push('abstract');
        }
        if (content.includes('portrait') || content.includes('face')) {
            tags.push('portrait');
        }
        if (content.includes('landscape') || content.includes('scenery')) {
            tags.push('landscape');
        }
        if (content.includes('fantasy') || content.includes('dream')) {
            tags.push('fantasy');
        }
        if (content.includes('animation') || content.includes('video')) {
            tags.push('animated');
        }
        if (content.includes('photo') || content.includes('img_')) {
            tags.push('photography');
        }
        
        return tags;
    }

    // Calculate engagement score
    calculateEngagementScore(sizeMB, type, title, description) {
        let score = 50; // base score
        
        // File size factor
        if (sizeMB > 10) score += 10;
        if (sizeMB > 5) score += 5;
        
        // Content analysis
        const content = `${title} ${description}`.toLowerCase();
        if (content.includes('stunning') || content.includes('beautiful')) score += 15;
        if (content.includes('creative') || content.includes('artistic')) score += 10;
        if (content.includes('unique') || content.includes('original')) score += 10;
        if (content.includes('mesmerizing') || content.includes('captivating')) score += 10;
        
        // Type preference
        if (type === 'video') score += 5;
        
        return Math.min(100, score);
    }

    // Process all artworks
    processArtworks() {
        // Sort by engagement score
        this.artworks.sort((a, b) => b.engagementScore - a.engagementScore);
        
        // Update category counts
        this.updateCategoryCounts();
        
        console.log('🎯 Artworks processed and categorized');
    }

    // Update category counts
    updateCategoryCounts() {
        Object.keys(this.categories).forEach(category => {
            this.categories[category].count = this.artworks.filter(a => a.category === category).length;
        });
    }

    // Generate output files
    generateOutputFiles() {
        // Generate artworks.json
        const artworksJson = JSON.stringify(this.artworks, null, 2);
        fs.writeFileSync('artworks.json', artworksJson);
        console.log('📄 Generated artworks.json');
        
        // Generate JavaScript data file
        const jsData = `// Auto-generated artwork data
const galleryData = ${JSON.stringify(this.artworks, null, 2)};

// Category information
const categoryData = ${JSON.stringify(this.categories, null, 2)};

// Export for use in gallery
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { galleryData, categoryData };
} else {
    window.galleryData = galleryData;
    window.categoryData = categoryData;
}`;
        
        fs.writeFileSync('gallery-data.js', jsData);
        console.log('📄 Generated gallery-data.js');
        
        // Generate summary report
        this.generateSummaryReport();
    }

    // Generate summary report
    generateSummaryReport() {
        const totalArtworks = this.artworks.length;
        const totalSize = this.artworks.reduce((sum, artwork) => sum + artwork.size, 0);
        const averageEngagement = this.artworks.reduce((sum, artwork) => sum + artwork.engagementScore, 0) / totalArtworks;
        
        const report = `
# Art Gallery Scan Report

## Summary
- **Total Artworks:** ${totalArtworks}
- **Total Size:** ${totalSize.toFixed(2)} MB
- **Average Engagement Score:** ${averageEngagement.toFixed(1)}/100

## Categories
${Object.entries(this.categories).map(([key, value]) => `- **${value.name}:** ${value.count} artworks`).join('\n')}

## File Types
- **Images:** ${this.artworks.filter(a => a.type === 'image').length}
- **Videos:** ${this.artworks.filter(a => a.type === 'video').length}

## Top Performing Artworks
${this.artworks.slice(0, 5).map((artwork, index) => 
    `${index + 1}. **${artwork.title}** (${artwork.engagementScore}/100)`
).join('\n')}

## Recent Additions
${this.artworks
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5)
    .map((artwork, index) => 
        `${index + 1}. **${artwork.title}** (${artwork.date})`
    ).join('\n')}

---
*Generated on ${new Date().toLocaleString()}*
`;
        
        fs.writeFileSync('scan-report.md', report);
        console.log('📄 Generated scan-report.md');
    }
}

// CLI usage
if (require.main === module) {
    const scanner = new ArtFolderScanner();
    const folderPath = process.argv[2] || './';
    
    scanner.scanArtFolder(folderPath)
        .then(() => {
            console.log('\n🎉 Art folder scanning complete!');
            console.log('📁 Generated files:');
            console.log('  - artworks.json (gallery data)');
            console.log('  - gallery-data.js (JavaScript module)');
            console.log('  - scan-report.md (summary report)');
            console.log('\n🚀 Your gallery is ready to use!');
        })
        .catch(error => {
            console.error('❌ Scanning failed:', error);
            process.exit(1);
        });
}

module.exports = ArtFolderScanner; 
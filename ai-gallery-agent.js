// AI Gallery Agent - Automated Art Management System
class AIGalleryAgent {
    constructor() {
        this.artworks = [];
        this.categories = {
            'digital-art': { name: 'Digital Art', count: 0, color: '#667eea' },
            'photography': { name: 'Photography', count: 0, color: '#f093fb' },
            'illustration': { name: 'Illustration', count: 0, color: '#4facfe' },
            'animation': { name: 'Animation', count: 0, color: '#43e97b' },
            'mixed-media': { name: 'Mixed Media', count: 0, color: '#fa709a' },
            'concept-art': { name: 'Concept Art', count: 0, color: '#ffecd2' },
            'sketches': { name: 'Sketches', count: 0, color: '#fcb69f' }
        };
        this.autoOrganize = true;
        this.smartCategorization = true;
        this.init();
    }

    async init() {
        console.log('🤖 AI Gallery Agent Initializing...');
        await this.scanAndOrganize();
        this.setupAutoManagement();
        this.startAnalytics();
        console.log('✅ AI Agent Ready - Gallery Automated!');
    }

    // AI-Powered File Scanning and Organization
    async scanAndOrganize() {
        console.log('🔍 AI Agent: Scanning art collection...');
        
        // Simulate AI scanning of your folder structure
        const discoveredArtworks = await this.aiScanFiles();
        
        // AI categorizes and organizes each artwork
        this.artworks = discoveredArtworks.map(artwork => 
            this.aiCategorizeAndOrganize(artwork)
        );

        // AI generates smart metadata
        this.artworks = this.artworks.map(artwork => 
            this.aiGenerateMetadata(artwork)
        );

        // AI optimizes gallery layout
        this.aiOptimizeGallery();
        
        console.log(`🎨 AI Agent: Organized ${this.artworks.length} artworks into ${Object.keys(this.categories).length} categories`);
    }

    // AI File Scanner (Simulates scanning your actual files)
    async aiScanFiles() {
        // This would normally scan your actual folder
        // For now, using the artworks.json data as discovered files
        try {
            const response = await fetch('artworks.json');
            const data = await response.json();
            return data;
        } catch (error) {
            console.log('AI Agent: Using fallback data');
            return this.getFallbackArtworks();
        }
    }

    // AI Categorization Engine
    aiCategorizeAndOrganize(artwork) {
        const filename = artwork.src.toLowerCase();
        const title = artwork.title.toLowerCase();
        const description = artwork.description.toLowerCase();

        // AI analyzes content and assigns categories
        let category = 'digital-art'; // default

        if (filename.includes('img_') || filename.includes('photo') || 
            title.includes('photographic') || description.includes('photographic')) {
            category = 'photography';
        } else if (filename.includes('animation') || filename.includes('mp4') || 
                   title.includes('animation') || description.includes('animated')) {
            category = 'animation';
        } else if (filename.includes('concept') || title.includes('concept')) {
            category = 'concept-art';
        } else if (filename.includes('sketch') || title.includes('sketch')) {
            category = 'sketches';
        } else if (filename.includes('illustration') || title.includes('illustration')) {
            category = 'illustration';
        } else if (filename.includes('mixed') || title.includes('mixed')) {
            category = 'mixed-media';
        }

        // AI assigns smart tags
        const tags = this.aiGenerateTags(artwork);
        
        // AI calculates engagement score
        const engagementScore = this.aiCalculateEngagement(artwork);

        return {
            ...artwork,
            category,
            tags,
            engagementScore,
            aiProcessed: true,
            lastUpdated: new Date().toISOString()
        };
    }

    // AI Tag Generation
    aiGenerateTags(artwork) {
        const tags = [];
        const content = `${artwork.title} ${artwork.description}`.toLowerCase();

        // AI analyzes content and generates relevant tags
        if (content.includes('digital') || content.includes('ai')) tags.push('digital');
        if (content.includes('color') || content.includes('vibrant')) tags.push('colorful');
        if (content.includes('dark') || content.includes('gothic')) tags.push('dark');
        if (content.includes('nature') || content.includes('organic')) tags.push('nature');
        if (content.includes('abstract') || content.includes('flowing')) tags.push('abstract');
        if (content.includes('portrait') || content.includes('face')) tags.push('portrait');
        if (content.includes('landscape') || content.includes('scenery')) tags.push('landscape');
        if (content.includes('fantasy') || content.includes('dream')) tags.push('fantasy');

        return tags;
    }

    // AI Engagement Scoring
    aiCalculateEngagement(artwork) {
        let score = 50; // base score

        // File size factor (larger files might be more detailed)
        if (artwork.size > 10) score += 10;
        if (artwork.size > 5) score += 5;

        // Content analysis
        const content = `${artwork.title} ${artwork.description}`.toLowerCase();
        if (content.includes('stunning') || content.includes('beautiful')) score += 15;
        if (content.includes('creative') || content.includes('artistic')) score += 10;
        if (content.includes('unique') || content.includes('original')) score += 10;

        // Type preference
        if (artwork.type === 'video') score += 5; // videos are engaging

        return Math.min(100, score);
    }

    // AI Metadata Generation
    aiGenerateMetadata(artwork) {
        // AI generates better titles and descriptions
        let enhancedTitle = artwork.title;
        let enhancedDescription = artwork.description;

        // AI enhances titles
        if (artwork.title.includes('ChatGPT Image')) {
            enhancedTitle = `AI-Generated Artwork - ${artwork.title.split(' ').slice(-3).join(' ')}`;
        }

        // AI enhances descriptions
        if (artwork.description.includes('A stunning')) {
            enhancedDescription = `A captivating ${artwork.category} piece showcasing creative vision and artistic expression.`;
        }

        return {
            ...artwork,
            title: enhancedTitle,
            description: enhancedDescription,
            aiEnhanced: true
        };
    }

    // AI Gallery Optimization
    aiOptimizeGallery() {
        // AI sorts artworks by engagement score
        this.artworks.sort((a, b) => b.engagementScore - a.engagementScore);

        // AI updates category counts
        this.updateCategoryCounts();

        // AI suggests featured artworks
        this.featuredArtworks = this.artworks.slice(0, 6);

        console.log('🎯 AI Agent: Gallery optimized for maximum engagement');
    }

    // Auto Management System
    setupAutoManagement() {
        // Auto-refresh every 5 minutes
        setInterval(() => {
            this.autoRefresh();
        }, 5 * 60 * 1000);

        // Auto-backup every hour
        setInterval(() => {
            this.autoBackup();
        }, 60 * 60 * 1000);

        console.log('⚙️ AI Agent: Auto-management systems activated');
    }

    // Auto Refresh
    async autoRefresh() {
        console.log('🔄 AI Agent: Auto-refreshing gallery...');
        await this.scanAndOrganize();
        this.updateGalleryDisplay();
    }

    // Auto Backup
    autoBackup() {
        const backup = {
            artworks: this.artworks,
            categories: this.categories,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('aiGalleryBackup', JSON.stringify(backup));
        console.log('💾 AI Agent: Gallery backup created');
    }

    // Analytics System
    startAnalytics() {
        this.analytics = {
            totalArtworks: this.artworks.length,
            categoryDistribution: this.getCategoryDistribution(),
            averageEngagement: this.getAverageEngagement(),
            topPerforming: this.getTopPerforming(),
            recentActivity: this.getRecentActivity()
        };

        console.log('📊 AI Agent: Analytics system running');
    }

    // Get Category Distribution
    getCategoryDistribution() {
        const distribution = {};
        Object.keys(this.categories).forEach(category => {
            distribution[category] = this.artworks.filter(a => a.category === category).length;
        });
        return distribution;
    }

    // Get Average Engagement
    getAverageEngagement() {
        const total = this.artworks.reduce((sum, artwork) => sum + artwork.engagementScore, 0);
        return Math.round(total / this.artworks.length);
    }

    // Get Top Performing Artworks
    getTopPerforming() {
        return this.artworks
            .sort((a, b) => b.engagementScore - a.engagementScore)
            .slice(0, 5);
    }

    // Get Recent Activity
    getRecentActivity() {
        return this.artworks
            .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
            .slice(0, 10);
    }

    // Update Category Counts
    updateCategoryCounts() {
        Object.keys(this.categories).forEach(category => {
            this.categories[category].count = this.artworks.filter(a => a.category === category).length;
        });
    }

    // Update Gallery Display
    updateGalleryDisplay() {
        if (window.gallery) {
            window.gallery.artworks = this.artworks;
            window.gallery.renderGallery();
            window.gallery.createChartPlaceholders();
        }
    }

    // AI Search and Filter
    aiSearch(query) {
        const results = this.artworks.filter(artwork => {
            const searchText = `${artwork.title} ${artwork.description} ${artwork.tags.join(' ')}`.toLowerCase();
            return searchText.includes(query.toLowerCase());
        });
        return results;
    }

    // AI Recommendations
    getAIRecommendations(artworkId) {
        const artwork = this.artworks.find(a => a.src === artworkId);
        if (!artwork) return [];

        // AI finds similar artworks based on tags, category, and engagement
        return this.artworks
            .filter(a => a.src !== artworkId)
            .filter(a => a.category === artwork.category || 
                        a.tags.some(tag => artwork.tags.includes(tag)))
            .sort((a, b) => b.engagementScore - a.engagementScore)
            .slice(0, 6);
    }

    // Fallback Artworks (if JSON loading fails)
    getFallbackArtworks() {
        return [
            {
                src: 'ChatGPT Image Jul 25, 2025, 03_44_33 AM.png',
                title: 'Digital Art Creation - 03:44:33',
                description: 'A stunning digital artwork created with AI assistance',
                type: 'image',
                category: 'images',
                size: 1.8,
                date: '2025-07-25'
            }
        ];
    }

    // Get AI Status
    getStatus() {
        return {
            totalArtworks: this.artworks.length,
            categories: Object.keys(this.categories).length,
            averageEngagement: this.getAverageEngagement(),
            lastUpdated: new Date().toISOString(),
            autoOrganize: this.autoOrganize,
            smartCategorization: this.smartCategorization
        };
    }
}

// Initialize AI Agent
let aiAgent;
document.addEventListener('DOMContentLoaded', () => {
    aiAgent = new AIGalleryAgent();
    window.aiAgent = aiAgent; // Make globally accessible
}); 
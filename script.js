// Art Gallery JavaScript with Spectrum UI and Victory Charts
class ArtGallery {
    constructor() {
        this.artworks = [];
        this.currentFilter = 'all';
        this.currentLightboxIndex = 0;
        this.uploadedFiles = [];
        this.init();
    }

    init() {
        this.loadArtworks();
        this.setupEventListeners();
        this.setupFilterButtons();
        this.setupSpectrumUI();
        this.setupVictoryCharts();
    }

    // Load all artworks from the folders
    loadArtworks() {
        // Main folder artworks
        const mainFolderArtworks = [
            {
                src: 'ChatGPT Image Jul 25, 2025, 03_44_33 AM.png',
                title: 'Digital Art Creation - 03:44:33',
                description: 'A stunning digital artwork created with AI assistance',
                type: 'image',
                category: 'images',
                size: 1.8,
                date: '2025-07-25'
            },
            {
                src: 'ChatGPT Image Jul 25, 2025, 03_44_25 AM.png',
                title: 'Digital Art Creation - 03:44:25',
                description: 'Another beautiful piece from the creative session',
                type: 'image',
                category: 'images',
                size: 1.0,
                date: '2025-07-25'
            },
            {
                src: 'ChatGPT Image Jul 25, 2025, 03_44_17 AM.png',
                title: 'Digital Art Creation - 03:44:17',
                description: 'Expressive digital artwork showcasing creative vision',
                type: 'image',
                category: 'images',
                size: 1.8,
                date: '2025-07-25'
            },
            {
                src: 'ChatGPT Image Jul 25, 2025, 03_44_09 AM.png',
                title: 'Digital Art Creation - 03:44:09',
                description: 'Unique digital composition with artistic flair',
                type: 'image',
                category: 'images',
                size: 1.2,
                date: '2025-07-25'
            }
        ];

        // My artwork folder - ALL artworks included
        const myArtworkFolder = [
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_42 AM.png',
                title: 'Creative Digital Art - 03:43:42',
                description: 'A vibrant digital creation from the art collection',
                type: 'image',
                category: 'images',
                size: 3.8,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_37 AM.png',
                title: 'Digital Artwork - 03:43:37',
                description: 'Expressive digital piece with dynamic composition',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_35 AM.png',
                title: 'Artistic Digital Creation - 03:43:35',
                description: 'Beautiful digital artwork with rich colors',
                type: 'image',
                category: 'images',
                size: 3.8,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_32 AM.png',
                title: 'Digital Art Piece - 03:43:32',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 3.6,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_23 AM.png',
                title: 'Creative Digital Art - 03:43',
                description: 'Dynamic digital artwork with expressive elements',
                type: 'image',
                category: 'images',
                size: 3.6,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_17 AM.png',
                title: 'Digital Art Creation - 03:43',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 3.4,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_14 AM.png',
                title: 'Artistic Digital Work - 03:43',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 3.3,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_10 AM.png',
                title: 'Digital Art Piece - 03:43',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_05 AM.png',
                title: 'Creative Digital Art - 03:43',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 3.3,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_00 AM.png',
                title: 'Digital Artwork - 03:43',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 3.1,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/IMG_4953.PNG',
                title: 'Photographic Art - IMG_4953',
                description: 'A beautiful photographic piece from the collection',
                type: 'image',
                category: 'images',
                size: 13.0,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/IMG_4954.PNG',
                title: 'Photographic Art - IMG_4954',
                description: 'Another stunning photographic artwork',
                type: 'image',
                category: 'images',
                size: 11.0,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/20250707_2202_Gothic Dreamscape Animation_storyboard_01jzkzqr8eek8vnrbz39nsvrtn.mp4',
                title: 'Gothic Dreamscape Animation',
                description: 'A mesmerizing animated storyboard with gothic themes',
                type: 'video',
                category: 'videos',
                size: 5.2,
                date: '2025-07-07'
            },
            {
                src: 'My artwork/ScreenRecording_07-07-2025 15-45-41_1.mp4',
                title: 'Screen Recording - Creative Process',
                description: 'A recording of the creative process and workflow',
                type: 'video',
                category: 'videos',
                size: 73.0,
                date: '2025-07-07'
            },
            {
                src: 'My artwork/Flowing Colors and Swirling Tendrils.png',
                title: 'Flowing Colors and Swirling Tendrils',
                description: 'A beautiful piece featuring flowing colors and organic forms',
                type: 'image',
                category: 'images',
                size: 3.8,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/361BC66C-0E1A-4D77-86B5-82942F202BAD.jpg',
                title: 'Artistic Photography - 361BC66C',
                description: 'A stunning photographic artwork with artistic composition',
                type: 'image',
                category: 'images',
                size: 0.748,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/B5B4ED14-2A46-4C4B-91B0-C9EC09517C81.jpg',
                title: 'Creative Photography - B5B4ED14',
                description: 'Another beautiful photographic piece from the collection',
                type: 'image',
                category: 'images',
                size: 1.019,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/8AA4D4CD-1F93-4B6E-B3A9-E50D0D258D1B.jpg',
                title: 'Artistic Photography - 8AA4D4CD',
                description: 'A striking photographic artwork with creative vision',
                type: 'image',
                category: 'images',
                size: 1.1,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/F466E934-9EAF-4D7D-8AB4-883336B4CD72.jpg',
                title: 'Creative Photography - F466E934',
                description: 'Beautiful photographic piece with artistic elements',
                type: 'image',
                category: 'images',
                size: 0.685,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/E63B6B22-6668-4C25-B394-43EEB1BE8326.jpg',
                title: 'Artistic Photography - E63B6B22',
                description: 'Another stunning photographic artwork',
                type: 'image',
                category: 'images',
                size: 0.620,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/03E0E9E0-8509-4EE8-B0D1-F8DDCF2FECDB.jpg',
                title: 'Creative Photography - 03E0E9E0',
                description: 'A beautiful photographic piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 0.573,
                date: '2025-07-25'
            }
        ];

        // Combine all artworks
        this.artworks = [...mainFolderArtworks, ...myArtworkFolder];
        
        // Render the gallery
        this.renderGallery();
    }

    // Setup Spectrum UI components
    setupSpectrumUI() {
        // Explore button animation
        const exploreBtn = document.getElementById('exploreBtn');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', () => {
                this.showToast('Welcome to the gallery! 🎨', 'success');
                document.querySelector('.gallery').scrollIntoView({ behavior: 'smooth' });
            });
        }

        // Floating Action Button
        const fabBtn = document.getElementById('fabBtn');
        const fabMenu = document.getElementById('fabMenu');
        
        if (fabBtn && fabMenu) {
            fabBtn.addEventListener('click', () => {
                fabMenu.classList.toggle('active');
            });

            // Close FAB menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!fabBtn.contains(e.target) && !fabMenu.contains(e.target)) {
                    fabMenu.classList.remove('active');
                }
            });

            // FAB menu items
            const fabItems = document.querySelectorAll('.fab-item');
            fabItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    const action = item.dataset.action;
                    this.handleFabAction(action);
                    fabMenu.classList.remove('active');
                });
            });
        }

        // Upload modal
        this.setupUploadModal();
    }

    // Handle FAB actions
    handleFabAction(action) {
        switch (action) {
            case 'upload':
                this.openUploadModal();
                break;
            case 'share':
                this.shareGallery();
                break;
            case 'download':
                this.downloadAll();
                break;
        }
    }

    // Setup upload modal
    setupUploadModal() {
        const uploadModal = document.getElementById('uploadModal');
        const modalClose = document.getElementById('modalClose');
        const cancelUpload = document.getElementById('cancelUpload');
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        const confirmUpload = document.getElementById('confirmUpload');

        // Open modal
        this.openUploadModal = () => {
            uploadModal.classList.add('active');
        };

        // Close modal
        const closeModal = () => {
            uploadModal.classList.remove('active');
            this.uploadedFiles = [];
            this.updateUploadPreview();
        };

        modalClose.addEventListener('click', closeModal);
        cancelUpload.addEventListener('click', closeModal);

        // Close on background click
        uploadModal.addEventListener('click', (e) => {
            if (e.target === uploadModal) {
                closeModal();
            }
        });

        // File upload handling
        uploadArea.addEventListener('click', () => {
            fileInput.click();
        });

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#764ba2';
            uploadArea.style.background = 'rgba(102, 126, 234, 0.1)';
        });

        uploadArea.addEventListener('dragleave', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#667eea';
            uploadArea.style.background = 'rgba(102, 126, 234, 0.05)';
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#667eea';
            uploadArea.style.background = 'rgba(102, 126, 234, 0.05)';
            
            const files = Array.from(e.dataTransfer.files);
            this.handleFileUpload(files);
        });

        fileInput.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            this.handleFileUpload(files);
        });

        confirmUpload.addEventListener('click', () => {
            this.processUploadedFiles();
            closeModal();
        });
    }

    // Handle file upload
    handleFileUpload(files) {
        const imageFiles = files.filter(file => file.type.startsWith('image/') || file.type.startsWith('video/'));
        
        imageFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.uploadedFiles.push({
                    file: file,
                    preview: e.target.result,
                    name: file.name
                });
                this.updateUploadPreview();
            };
            reader.readAsDataURL(file);
        });

        if (imageFiles.length > 0) {
            this.showToast(`${imageFiles.length} file(s) selected`, 'success');
        }
    }

    // Update upload preview
    updateUploadPreview() {
        const preview = document.getElementById('uploadPreview');
        preview.innerHTML = '';

        this.uploadedFiles.forEach((item, index) => {
            const previewItem = document.createElement('div');
            previewItem.className = 'upload-preview-item';
            
            if (item.file.type.startsWith('image/')) {
                previewItem.innerHTML = `
                    <img src="${item.preview}" alt="${item.name}">
                    <button class="remove-btn" onclick="gallery.removeUploadedFile(${index})">×</button>
                `;
            } else {
                previewItem.innerHTML = `
                    <div style="background: #667eea; color: white; display: flex; align-items: center; justify-content: center; height: 100%;">
                        <i class="fas fa-video"></i>
                    </div>
                    <button class="remove-btn" onclick="gallery.removeUploadedFile(${index})">×</button>
                `;
            }
            
            preview.appendChild(previewItem);
        });
    }

    // Remove uploaded file
    removeUploadedFile(index) {
        this.uploadedFiles.splice(index, 1);
        this.updateUploadPreview();
    }

    // Process uploaded files
    processUploadedFiles() {
        this.uploadedFiles.forEach(item => {
            const newArtwork = {
                src: item.preview,
                title: item.name,
                description: `Uploaded artwork: ${item.name}`,
                type: item.file.type.startsWith('image/') ? 'image' : 'video',
                category: item.file.type.startsWith('image/') ? 'images' : 'videos',
                size: (item.file.size / (1024 * 1024)).toFixed(2),
                date: new Date().toISOString().split('T')[0]
            };
            
            this.artworks.unshift(newArtwork);
        });

        this.renderGallery();
        this.showToast(`${this.uploadedFiles.length} artwork(s) added to gallery!`, 'success');
    }

    // Share gallery
    shareGallery() {
        if (navigator.share) {
            navigator.share({
                title: "Micha's Art Gallery",
                text: "Check out my amazing art collection!",
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            this.showToast('Gallery link copied to clipboard!', 'success');
        }
    }

    // Download all
    downloadAll() {
        this.showToast('Download feature coming soon!', 'warning');
    }

    // Setup Victory Charts
    setupVictoryCharts() {
        // This would normally use React and Victory components
        // For now, we'll create simple chart placeholders
        this.createChartPlaceholders();
    }

    // Create chart placeholders
    createChartPlaceholders() {
        const pieChart = document.getElementById('pieChart');
        const lineChart = document.getElementById('lineChart');
        const barChart = document.getElementById('barChart');

        if (pieChart) {
            pieChart.innerHTML = `
                <div style="text-align: center; color: #666;">
                    <i class="fas fa-chart-pie" style="font-size: 3rem; color: #667eea; margin-bottom: 1rem;"></i>
                    <p>Artwork Distribution Chart</p>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">
                        Images: ${this.artworks.filter(a => a.category === 'images').length}<br>
                        Videos: ${this.artworks.filter(a => a.category === 'videos').length}
                    </p>
                </div>
            `;
        }

        if (lineChart) {
            lineChart.innerHTML = `
                <div style="text-align: center; color: #666;">
                    <i class="fas fa-chart-line" style="font-size: 3rem; color: #667eea; margin-bottom: 1rem;"></i>
                    <p>Monthly Creations Chart</p>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">
                        July 2025: ${this.artworks.length} artworks
                    </p>
                </div>
            `;
        }

        if (barChart) {
            const sizeRanges = {
                '0-1MB': this.artworks.filter(a => a.size <= 1).length,
                '1-5MB': this.artworks.filter(a => a.size > 1 && a.size <= 5).length,
                '5-10MB': this.artworks.filter(a => a.size > 5 && a.size <= 10).length,
                '10+MB': this.artworks.filter(a => a.size > 10).length
            };

            barChart.innerHTML = `
                <div style="text-align: center; color: #666;">
                    <i class="fas fa-chart-bar" style="font-size: 3rem; color: #667eea; margin-bottom: 1rem;"></i>
                    <p>File Size Distribution</p>
                    <div style="margin-top: 1rem;">
                        ${Object.entries(sizeRanges).map(([range, count]) => 
                            `<div style="margin: 0.5rem 0;">
                                <span style="font-size: 0.8rem;">${range}: ${count}</span>
                            </div>`
                        ).join('')}
                    </div>
                </div>
            `;
        }
    }

    // Show toast notification
    showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icon = type === 'success' ? 'check-circle' : 
                    type === 'error' ? 'exclamation-circle' : 
                    type === 'warning' ? 'exclamation-triangle' : 'info-circle';
        
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-${icon} toast-icon"></i>
                <span class="toast-message">${message}</span>
            </div>
        `;
        
        toastContainer.appendChild(toast);
        
        // Show toast
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Remove toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Render the gallery with current filter
    renderGallery() {
        const galleryGrid = document.getElementById('galleryGrid');
        const analyticsSection = document.getElementById('analyticsSection');
        const filteredArtworks = this.getFilteredArtworks();
        
        if (this.currentFilter === 'analytics') {
            galleryGrid.innerHTML = '';
            analyticsSection.style.display = 'block';
            return;
        } else {
            analyticsSection.style.display = 'none';
        }
        
        galleryGrid.innerHTML = '';
        
        if (filteredArtworks.length === 0) {
            galleryGrid.innerHTML = '<div class="loading">No artworks found for this category.</div>';
            return;
        }

        filteredArtworks.forEach((artwork, index) => {
            const galleryItem = this.createGalleryItem(artwork, index);
            galleryGrid.appendChild(galleryItem);
        });
    }

    // Create individual gallery item
    createGalleryItem(artwork, index) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.index = index;
        
        const mediaElement = artwork.type === 'video' 
            ? `<video src="${artwork.src}" preload="metadata" muted></video>`
            : `<img src="${artwork.src}" alt="${artwork.title}" loading="lazy">`;
        
        item.innerHTML = `
            ${mediaElement}
            <div class="gallery-item-type">${artwork.type.toUpperCase()}</div>
            <div class="gallery-item-info">
                <h3 class="gallery-item-title">${artwork.title}</h3>
                <p class="gallery-item-description">${artwork.description}</p>
                <div style="font-size: 0.8rem; color: #999; margin-top: 0.5rem;">
                    Size: ${artwork.size}MB | Date: ${artwork.date}
                </div>
            </div>
        `;
        
        // Add click event for lightbox
        item.addEventListener('click', () => {
            this.openLightbox(index);
        });
        
        return item;
    }

    // Get filtered artworks based on current filter
    getFilteredArtworks() {
        if (this.currentFilter === 'all') {
            return this.artworks;
        }
        return this.artworks.filter(artwork => artwork.category === this.currentFilter);
    }

    // Setup filter buttons
    setupFilterButtons() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Update filter and re-render
                this.currentFilter = button.dataset.filter;
                this.renderGallery();
            });
        });
    }

    // Open lightbox
    openLightbox(index) {
        const lightbox = document.getElementById('lightbox');
        const lightboxMedia = document.getElementById('lightboxMedia');
        const lightboxTitle = document.getElementById('lightboxTitle');
        const lightboxDescription = document.getElementById('lightboxDescription');
        const progressContainer = document.getElementById('progressContainer');
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        const filteredArtworks = this.getFilteredArtworks();
        const artwork = filteredArtworks[index];
        this.currentLightboxIndex = index;
        
        // Show progress bar
        progressContainer.style.display = 'block';
        progressFill.style.width = '0%';
        progressText.textContent = 'Loading...';
        
        // Simulate loading progress
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += Math.random() * 30;
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressInterval);
                setTimeout(() => {
                    progressContainer.style.display = 'none';
                }, 500);
            }
            progressFill.style.width = progress + '%';
            progressText.textContent = `Loading... ${Math.round(progress)}%`;
        }, 100);
        
        // Set media content
        if (artwork.type === 'video') {
            lightboxMedia.innerHTML = `
                <video src="${artwork.src}" controls autoplay>
                    Your browser does not support the video tag.
                </video>
            `;
        } else {
            lightboxMedia.innerHTML = `<img src="${artwork.src}" alt="${artwork.title}">`;
        }
        
        // Set info content
        lightboxTitle.textContent = artwork.title;
        lightboxDescription.textContent = `${artwork.description} | Size: ${artwork.size}MB | Date: ${artwork.date}`;
        
        // Show lightbox
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Stop video if playing
        const video = lightbox.querySelector('video');
        if (video) {
            video.pause();
        }
    }

    // Navigate lightbox
    navigateLightbox(direction) {
        const filteredArtworks = this.getFilteredArtworks();
        let newIndex = this.currentLightboxIndex + direction;
        
        if (newIndex < 0) {
            newIndex = filteredArtworks.length - 1;
        } else if (newIndex >= filteredArtworks.length) {
            newIndex = 0;
        }
        
        this.openLightbox(newIndex);
    }

    // Setup event listeners
    setupEventListeners() {
        // Lightbox close button
        document.getElementById('lightboxClose').addEventListener('click', () => {
            this.closeLightbox();
        });
        
        // Lightbox navigation
        document.getElementById('lightboxPrev').addEventListener('click', () => {
            this.navigateLightbox(-1);
        });
        
        document.getElementById('lightboxNext').addEventListener('click', () => {
            this.navigateLightbox(1);
        });
        
        // Close lightbox on background click
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target.id === 'lightbox') {
                this.closeLightbox();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!document.getElementById('lightbox').classList.contains('active')) return;
            
            switch (e.key) {
                case 'Escape':
                    this.closeLightbox();
                    break;
                case 'ArrowLeft':
                    this.navigateLightbox(-1);
                    break;
                case 'ArrowRight':
                    this.navigateLightbox(1);
                    break;
            }
        });
        
        // Mobile menu toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    }
}

// Initialize the gallery when DOM is loaded
let gallery;
document.addEventListener('DOMContentLoaded', () => {
    gallery = new ArtGallery();
});

// Add some additional styling for mobile menu
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
    }
`;
document.head.appendChild(style); 
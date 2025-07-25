
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

        // My artwork folder - ALL artworks included (100+ images)
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
                title: 'Creative Digital Art - 03:43:23',
                description: 'Dynamic digital artwork with expressive elements',
                type: 'image',
                category: 'images',
                size: 3.6,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_17 AM.png',
                title: 'Digital Art Creation - 03:43:17',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 3.4,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_14 AM.png',
                title: 'Artistic Digital Work - 03:43:14',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 3.3,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_10 AM.png',
                title: 'Digital Art Piece - 03:43:10',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_05 AM.png',
                title: 'Creative Digital Art - 03:43:05',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 3.3,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_43_00 AM.png',
                title: 'Digital Artwork - 03:43:00',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 3.1,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_42_56 AM.png',
                title: 'Digital Art Creation - 03:42:56',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 3.4,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_42_52 AM.png',
                title: 'Artistic Digital Work - 03:42:52',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 3.4,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_42_46 AM.png',
                title: 'Digital Art Piece - 03:42:46',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 3.8,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_42_44 AM.png',
                title: 'Creative Digital Art - 03:42:44',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_42_41 AM.png',
                title: 'Digital Artwork - 03:42:41',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 3.0,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_42_37 AM.png',
                title: 'Digital Art Creation - 03:42:37',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 3.2,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_42_34 AM.png',
                title: 'Artistic Digital Work - 03:42:34',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_42_32 AM.png',
                title: 'Digital Art Piece - 03:42:32',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 3.3,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_42_27 AM.png',
                title: 'Creative Digital Art - 03:42:27',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 3.6,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_42_14 AM.png',
                title: 'Digital Artwork - 03:42:14',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_42_06 AM.png',
                title: 'Digital Art Creation - 03:42:06',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 3.2,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_42_02 AM.png',
                title: 'Artistic Digital Work - 03:42:02',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 3.6,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_59 AM.png',
                title: 'Digital Art Piece - 03:41:59',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 3.6,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_55 AM.png',
                title: 'Creative Digital Art - 03:41:55',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 3.3,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_50 AM.png',
                title: 'Digital Artwork - 03:41:50',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 3.4,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_46 AM.png',
                title: 'Digital Art Creation - 03:41:46',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 3.2,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_43 AM.png',
                title: 'Artistic Digital Work - 03:41:43',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_40 AM.png',
                title: 'Digital Art Piece - 03:41:40',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 3.4,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_33 AM.png',
                title: 'Creative Digital Art - 03:41:33',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_30 AM.png',
                title: 'Digital Artwork - 03:41:30',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 3.7,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_28 AM.png',
                title: 'Digital Art Creation - 03:41:28',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_23 AM.png',
                title: 'Artistic Digital Work - 03:41:23',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_20 AM.png',
                title: 'Digital Art Piece - 03:41:20',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 3.2,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_17 AM.png',
                title: 'Creative Digital Art - 03:41:17',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 3.4,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_13 AM.png',
                title: 'Digital Artwork - 03:41:13',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 3.6,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_09 AM.png',
                title: 'Digital Art Creation - 03:41:09',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 3.6,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_41_06 AM.png',
                title: 'Artistic Digital Work - 03:41:06',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_40_56 AM.png',
                title: 'Digital Art Piece - 03:40:56',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 3.4,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_40_53 AM.png',
                title: 'Creative Digital Art - 03:40:53',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_40_47 AM.png',
                title: 'Digital Artwork - 03:40:47',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 3.6,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_40_44 AM.png',
                title: 'Digital Art Creation - 03:40:44',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 3.6,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_40_40 AM.png',
                title: 'Artistic Digital Work - 03:40:40',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_40_37 AM.png',
                title: 'Digital Art Piece - 03:40:37',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 3.4,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_40_33 AM.png',
                title: 'Creative Digital Art - 03:40:33',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 3.1,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_40_30 AM.png',
                title: 'Digital Artwork - 03:40:30',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 3.1,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_40_25 AM.png',
                title: 'Digital Art Creation - 03:40:25',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 3.4,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/ChatGPT Image Jul 25, 2025, 03_40_01 AM.png',
                title: 'Artistic Digital Work - 03:40:01',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 3.4,
                date: '2025-07-25'
            },
            // Additional images from the folder
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
                src: 'My artwork/IMG_4950.PNG',
                title: 'Photographic Art - IMG_4950',
                description: 'A beautiful photographic piece from the collection',
                type: 'image',
                category: 'images',
                size: 11.0,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/IMG_4952.PNG',
                title: 'Photographic Art - IMG_4952',
                description: 'Another stunning photographic artwork',
                type: 'image',
                category: 'images',
                size: 12.0,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/IMG_4951.PNG',
                title: 'Photographic Art - IMG_4951',
                description: 'A beautiful photographic piece from the collection',
                type: 'image',
                category: 'images',
                size: 8.9,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/IMG_4807.PNG',
                title: 'Photographic Art - IMG_4807',
                description: 'Another stunning photographic artwork',
                type: 'image',
                category: 'images',
                size: 3.3,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/IMG_4713.PNG',
                title: 'Photographic Art - IMG_4713',
                description: 'A beautiful photographic piece from the collection',
                type: 'image',
                category: 'images',
                size: 5.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/IMG_4715.PNG',
                title: 'Photographic Art - IMG_4715',
                description: 'Another stunning photographic artwork',
                type: 'image',
                category: 'images',
                size: 5.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/IMG_4714.PNG',
                title: 'Photographic Art - IMG_4714',
                description: 'A beautiful photographic piece from the collection',
                type: 'image',
                category: 'images',
                size: 5.3,
                date: '2025-07-25'
            },
            // Additional digital artworks
            {
                src: 'My artwork/2FD88415-880F-41E6-A364-968E13F33213.png',
                title: 'Digital Art - 2FD88415',
                description: 'A stunning digital artwork with unique composition',
                type: 'image',
                category: 'images',
                size: 2.9,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/64F19014-FA61-4940-ADA0-7738222AC5BF.png',
                title: 'Digital Art - 64F19014',
                description: 'Another beautiful digital piece from the collection',
                type: 'image',
                category: 'images',
                size: 2.8,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/8AA59C4C-9DB0-4A55-851C-558DC1DF5FC7.png',
                title: 'Digital Art - 8AA59C4C',
                description: 'A striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/44FA7439-9448-44A4-91A0-96598D9A865B.png',
                title: 'Digital Art - 44FA7439',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 4.1,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/582C3297-A94D-4BB6-91CB-D8795451AAA7.png',
                title: 'Digital Art - 582C3297',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 0.48,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/277AA636-56DA-416D-B66F-04B8FA62D9CE.png',
                title: 'Digital Art - 277AA636',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/9CD28FB4-3365-4205-A51F-3A53D2D8E403.png',
                title: 'Digital Art - 9CD28FB4',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 0.767,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/E658BDB0-9EB2-4F83-AA24-F302EDE99D5B.png',
                title: 'Digital Art - E658BDB0',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 3.2,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/e871f8e2-f25d-4b87-9c1e-d00d7df53eed.png',
                title: 'Digital Art - e871f8e2',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 2.4,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/9C023E0D-A3BD-43ED-848F-BDE1D8445415.png',
                title: 'Digital Art - 9C023E0D',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 0.719,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/EA4F6785-5449-4E7B-AEB6-423840170273.png',
                title: 'Digital Art - EA4F6785',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 3.6,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/a2f1add9-4aee-4c73-a75d-70d4c2e8d6b4.png',
                title: 'Digital Art - a2f1add9',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 3.2,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/1C781AD9-A90B-4A53-9796-95CA3194BEAB.png',
                title: 'Digital Art - 1C781AD9',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 3.4,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/E2AD75AA-40A3-47EC-801B-139005EB59A7.png',
                title: 'Digital Art - E2AD75AA',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 4.4,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/EEA58716-38DB-4D05-B704-4C1E6403046D.png',
                title: 'Digital Art - EEA58716',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 4.1,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/38091868-D319-468A-986B-1D7170B5F0A0.png',
                title: 'Digital Art - 38091868',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 2.8,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/6D3A35F6-33D9-45CB-82C6-C2B34BBDAFB3.png',
                title: 'Digital Art - 6D3A35F6',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 3.2,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/21E40876-7160-49D0-A861-7E36DABA2BD0(1).png',
                title: 'Digital Art - 21E40876',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 0.532,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/426A2283-B42D-4DD5-8D1E-3DCC08A8F02C.png',
                title: 'Digital Art - 426A2283',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 3.6,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/6D3A35F6-33D9-45CB-82C6-C2B34BBDAFB3(1).png',
                title: 'Digital Art - 6D3A35F6 Variant',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 0.679,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/69A66293-5352-4978-9A5F-87409A9057C1.png',
                title: 'Digital Art - 69A66293',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 3.8,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/426A2283-B42D-4DD5-8D1E-3DCC08A8F02C(1).png',
                title: 'Digital Art - 426A2283 Variant',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 0.745,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/9C709E63-7593-4ED5-B46A-DED9B8D722DB(1).png',
                title: 'Digital Art - 9C709E63',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 0.739,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/B06B67CB-30E7-4B6A-9337-837E086A2BCE.png',
                title: 'Digital Art - B06B67CB',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 3.6,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/B06B67CB-30E7-4B6A-9337-837E086A2BCE(1).png',
                title: 'Digital Art - B06B67CB Variant',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 0.813,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/55727097-8E51-4538-B763-7DE8414A17A6.png',
                title: 'Digital Art - 55727097',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 3.0,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/F8EF6FBB-7E8A-4E56-9B7B-E94BCB433BB7.png',
                title: 'Digital Art - F8EF6FBB',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 4.0,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/9372C800-FCE2-4D32-BF28-FD7623F83961.png',
                title: 'Digital Art - 9372C800',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 4.1,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/06353777-AFC8-49DD-895A-2B46EEFE2389.png',
                title: 'Digital Art - 06353777',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 3.4,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/A69428A9-4272-48F6-9462-05F6CE596E0A.png',
                title: 'Digital Art - A69428A9',
                description: 'Expressive digital creation with artistic flair',
                type: 'image',
                category: 'images',
                size: 4.0,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/1D4CF9EC-6B15-4076-BD4C-35775788105E.png',
                title: 'Digital Art - 1D4CF9EC',
                description: 'Dynamic digital artwork with rich visual elements',
                type: 'image',
                category: 'images',
                size: 3.5,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/4FD6955D-6E84-4A4E-951F-04E0A5F04371.png',
                title: 'Digital Art - 4FD6955D',
                description: 'Striking digital composition with artistic vision',
                type: 'image',
                category: 'images',
                size: 0.732,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/98664DBB-5F2B-490C-ADF8-190B354AF8E0.png',
                title: 'Digital Art - 98664DBB',
                description: 'Vibrant digital piece with artistic composition',
                type: 'image',
                category: 'images',
                size: 3.8,
                date: '2025-07-25'
            },
            {
                src: 'My artwork/9CCA9B5B-BC4F-431C-8869-59BBDECB6DFF.png',
                title: 'Digital Art - 9CCA9B5B',
                description: 'Beautiful digital artwork with creative elements',
                type: 'image',
                category: 'images',
                size: 3.2,
                date: '2025-07-25'
            },
            // Photographic artworks
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
            },
            // Special artworks
            {
                src: 'My artwork/Flowing Colors and Swirling Tendrils.png',
                title: 'Flowing Colors and Swirling Tendrils',
                description: 'A beautiful piece featuring flowing colors and organic forms',
                type: 'image',
                category: 'images',
                size: 3.8,
                date: '2025-07-25'
            },
            // Videos
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
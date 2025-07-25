import React, { useState, useEffect } from 'react';
import {
  Provider,
  defaultTheme,
  View,
  Text,
  Heading,
  Button,
  ButtonGroup,
  Card,
  CardView,
  Grid,
  Flex,
  ActionButton,
  DialogTrigger,
  Modal,
  Dialog,
  Content,
  Header,
  Divider,
  ProgressCircle,
  StatusLight,
  Badge,
  Image,
  Link,
  Tabs,
  TabList,
  TabPanels,
  Item,
  useAsyncList,
  SearchField,
  Well,
  IllustratedMessage
} from '@adobe/react-spectrum';
import {
  VictoryChart,
  VictoryPie,
  VictoryBar,
  VictoryLine,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryTooltip
} from 'victory';
import './App.css';

// Types
interface Artwork {
  id: string;
  src: string;
  title: string;
  description: string;
  type: 'image' | 'video';
  category: string;
  size: string;
  date: string;
  tags: string[];
  engagementScore: number;
}

interface CategoryData {
  category: string;
  count: number;
  color: string;
}

function App() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [aiStatus, setAiStatus] = useState<'active' | 'processing' | 'idle'>('active');

  useEffect(() => {
    fetch('artworks.json')
      .then(res => res.json())
      .then((data: Artwork[]) => {
        setArtworks(data);
        // Generate category data
        const categoryMap: { [key: string]: number } = {};
        data.forEach(art => {
          categoryMap[art.category] = (categoryMap[art.category] || 0) + 1;
        });
        const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#00ff41', '#ff0080', '#00d4ff', '#8a2be2', '#ff6b35'];
        const catData: CategoryData[] = Object.entries(categoryMap).map(([category, count], i) => ({
          category,
          count,
          color: colors[i % colors.length]
        }));
        setCategoryData(catData);
      });
  }, []);

  const filteredArtworks = artworks.filter(artwork => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'images') return artwork.type === 'image';
    if (selectedFilter === 'videos') return artwork.type === 'video';
    return artwork.category === selectedFilter;
  });

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  const renderArtworkCard = (artwork: Artwork) => (
    <Card key={artwork.id} width="100%" height="100%">
      <Image
        src={artwork.src}
        alt={artwork.title}
        objectFit="cover"
        width="100%"
        height="200px"
      />
      <View padding="size-200">
        <Heading level={3} marginBottom="size-100">{artwork.title}</Heading>
        <Text marginBottom="size-100">{artwork.description}</Text>
        <Flex gap="size-100" marginBottom="size-100">
          <Badge variant="info">{artwork.category}</Badge>
          <Badge variant="secondary">{artwork.type}</Badge>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text size="caption">{artwork.size}</Text>
          <StatusLight variant="positive">{artwork.engagementScore}%</StatusLight>
        </Flex>
      </View>
    </Card>
  );

  const renderAnalytics = () => (
    <View>
      <Heading level={2} marginBottom="size-300">Gallery Analytics</Heading>
      <Grid columns={['1fr', '1fr']} gap="size-300" marginBottom="size-300">
        <Card>
          <View padding="size-200">
            <Heading level={3} marginBottom="size-200">Category Distribution</Heading>
            <VictoryChart theme={VictoryTheme.material} height={300}>
              <VictoryPie
                data={categoryData}
                x="category"
                y="count"
                colorScale={categoryData.map(c => c.color)}
                labelComponent={<VictoryTooltip />}
                style={{ labels: { fontSize: 12, fill: "white" } }}
              />
            </VictoryChart>
          </View>
        </Card>
        <Card>
          <View padding="size-200">
            <Heading level={3} marginBottom="size-200">Engagement Trends</Heading>
            <VictoryChart theme={VictoryTheme.material} height={300}>
              <VictoryAxis />
              <VictoryAxis dependentAxis />
              <VictoryLine
                data={artworks}
                x="id"
                y="engagementScore"
                style={{ data: { stroke: "#6366f1" } }}
              />
            </VictoryChart>
          </View>
        </Card>
      </Grid>
    </View>
  );

  const renderAIInsights = () => (
    <View>
      <Heading level={2} marginBottom="size-300">AI Insights</Heading>
      <Grid columns={['1fr', '1fr']} gap="size-300">
        <Card>
          <View padding="size-200">
            <Heading level={3} marginBottom="size-200">Top Performing</Heading>
            <Well>
              <Text>Digital Dreamscape - 95% engagement</Text>
              <Text>Character Animation - 97% engagement</Text>
              <Text>Sci-Fi Concept - 92% engagement</Text>
            </Well>
          </View>
        </Card>
        <Card>
          <View padding="size-200">
            <Heading level={3} marginBottom="size-200">AI Recommendations</Heading>
            <Well>
              <Text>• Create more character-focused content</Text>
              <Text>• Experiment with animation techniques</Text>
              <Text>• Develop series-based artwork</Text>
            </Well>
          </View>
        </Card>
      </Grid>
    </View>
  );

  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <View backgroundColor="background" minHeight="100vh">
        {/* Header */}
        <View backgroundColor="background" borderBottomWidth="thin" borderBottomColor="dark">
          <Flex justifyContent="space-between" alignItems="center" padding="size-200">
            <Flex alignItems="center" gap="size-200">
              <Heading level={1} margin={0}>Micha's Art Gallery</Heading>
              <Flex alignItems="center" gap="size-100">
                <StatusLight variant="positive" />
                <Text size="caption">AI Agent Active</Text>
              </Flex>
            </Flex>
            <ButtonGroup>
              <Button
                variant={selectedFilter === 'all' ? 'cta' : 'secondary'}
                onPress={() => setSelectedFilter('all')}
              >
                All Art
              </Button>
              <Button
                variant={selectedFilter === 'images' ? 'cta' : 'secondary'}
                onPress={() => setSelectedFilter('images')}
              >
                Images
              </Button>
              <Button
                variant={selectedFilter === 'videos' ? 'cta' : 'secondary'}
                onPress={() => setSelectedFilter('videos')}
              >
                Videos
              </Button>
              <Button
                variant={selectedFilter === 'analytics' ? 'cta' : 'secondary'}
                onPress={() => setSelectedFilter('analytics')}
              >
                Analytics
              </Button>
              <Button
                variant={selectedFilter === 'ai-insights' ? 'cta' : 'secondary'}
                onPress={() => setSelectedFilter('ai-insights')}
              >
                AI Insights
              </Button>
            </ButtonGroup>
          </Flex>
        </View>

        {/* Main Content */}
        <View padding="size-300">
          {selectedFilter === 'analytics' ? (
            renderAnalytics()
          ) : selectedFilter === 'ai-insights' ? (
            renderAIInsights()
          ) : (
            <>
              {/* Hero Section */}
              <Card marginBottom="size-300">
                <View padding="size-300" textAlign="center">
                  <Heading level={1} marginBottom="size-200">
                    Welcome to My Creative World
                  </Heading>
                  <Text marginBottom="size-300">
                    Explore a collection of digital art, illustrations, and creative expressions
                  </Text>
                  <Flex justifyContent="center" alignItems="center" gap="size-200" marginBottom="size-300">
                    <ProgressCircle size="S" value={75} />
                    <Text>AI Gallery Agent</Text>
                  </Flex>
                  <Text size="caption" color="text-700">
                    Automatically organizing and categorizing your art collection
                  </Text>
                </View>
              </Card>

              {/* Gallery Grid */}
              <CardView
                items={filteredArtworks}
                layout="grid"
                width="100%"
                height="auto"
                maxColumns={4}
                columnGap="size-200"
                rowGap="size-200"
              >
                {renderArtworkCard}
              </CardView>
            </>
          )}
        </View>

        {/* Floating Action Button */}
        <DialogTrigger isOpen={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
          <ActionButton
            position="fixed"
            bottom="size-300"
            right="size-300"
            isQuiet
            UNSAFE_style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'var(--spectrum-global-color-blue-600)',
              color: 'white',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
          >
            +
          </ActionButton>
          <Modal>
            <Dialog>
              <Header>
                <Heading>Upload Artwork</Heading>
              </Header>
              <Divider />
              <Content>
                <Text>Upload functionality coming soon...</Text>
              </Content>
            </Dialog>
          </Modal>
        </DialogTrigger>

        {/* Artwork Detail Modal */}
        <DialogTrigger isOpen={!!selectedArtwork} onOpenChange={(isOpen) => !isOpen && setSelectedArtwork(null)}>
          <Modal>
            <Dialog>
              <Header>
                <Heading>{selectedArtwork?.title}</Heading>
              </Header>
              <Divider />
              <Content>
                {selectedArtwork && (
                  <View>
                    <Image
                      src={selectedArtwork.src}
                      alt={selectedArtwork.title}
                      width="100%"
                      height="400px"
                      objectFit="cover"
                      marginBottom="size-200"
                    />
                    <Text marginBottom="size-200">{selectedArtwork.description}</Text>
                    <Flex gap="size-200" marginBottom="size-200">
                      <Badge variant="info">{selectedArtwork.category}</Badge>
                      <Badge variant="secondary">{selectedArtwork.type}</Badge>
                      <Badge variant="positive">{selectedArtwork.engagementScore}% engagement</Badge>
                    </Flex>
                    <Text size="caption">Size: {selectedArtwork.size} | Date: {selectedArtwork.date}</Text>
                  </View>
                )}
              </Content>
            </Dialog>
          </Modal>
        </DialogTrigger>
      </View>
    </Provider>
  );
}

export default App; 
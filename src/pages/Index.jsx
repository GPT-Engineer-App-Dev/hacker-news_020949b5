import { Box, Container, Heading, Text, Stack, Link, Divider, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaHackerNews, FaUser, FaClock, FaExternalLinkAlt } from "react-icons/fa";

const newsItems = [
  {
    title: "The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await",
    user: "john_doe",
    time: "3 hours ago",
    points: 156,
    comments: 42,
    link: "https://example.com/article1",
  },
  // ... more news items
];

const Index = () => {
  return (
    <Container maxW="container.md" py={5}>
      <Stack spacing={4}>
        <Box display="flex" alignItems="center">
          <ListIcon as={FaHackerNews} color="orange.500" boxSize={8} />
          <Heading as="h1" size="lg" ml={2}>
            Hacker News
          </Heading>
        </Box>
        {newsItems.map((item, index) => (
          <Box key={index}>
            <Heading as="h2" size="md" fontWeight="normal">
              <Link href={item.link} isExternal color="orange.500">
                {item.title} <ListIcon as={FaExternalLinkAlt} mx="2px" />
              </Link>
            </Heading>
            <Text fontSize="sm">
              <ListIcon as={FaUser} mx="2px" />
              {item.user}
              <ListIcon as={FaClock} mx="2px" ml={4} />
              {item.time}
              <Text as="span" ml={4}>
                {item.points} points
              </Text>
              <Text as="span" ml={4}>
                {item.comments} comments
              </Text>
            </Text>
            <Divider my={4} />
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Index;

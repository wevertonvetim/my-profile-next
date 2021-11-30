import { LinkBox, LinkOverlay, Box, Heading, Text } from '@chakra-ui/react';
export default function ExperienceTimeLine() {
  return (
    <LinkBox maxW="" p="5" borderWidth="1ren" rounded="md">
      <Heading size="md" my="2">
        <LinkOverlay href="#">New Year, New Beginnings: Smashing Workshops & Audits</LinkOverlay>
      </Heading>
      <Text mb="3">
        Catch up on what’s been cookin’ at Smashing and explore some of the most popular community
        resources.
      </Text>
      <Box as="a" color="teal.400" href="#" fontWeight="bold">
        Some inner link
      </Box>
    </LinkBox>
  );
}

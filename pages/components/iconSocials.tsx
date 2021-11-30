import { Stack, HStack, IconButton } from '@chakra-ui/react';
import { BsGithub, BsDiscord, BsPerson, BsLinkedin } from 'react-icons/bs';

function IconSocials() {
  return (
    <Stack direction={'row'} justify={'center'}>
      <HStack mt={{ lg: 1, md: 1 }} px={0} alignItems="flex-start">
        <IconButton
          aria-label="linkedin"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: 'blue.400' }}
          icon={<BsLinkedin size="28px" />}
        />
        <IconButton
          aria-label="github"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: 'blue.400' }}
          icon={<BsGithub size="28px" />}
        />
        <IconButton
          aria-label="discord"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: 'blue.300' }}
          icon={<BsDiscord size="28px" />}
        />
      </HStack>
    </Stack>
  );
}
export default IconSocials;

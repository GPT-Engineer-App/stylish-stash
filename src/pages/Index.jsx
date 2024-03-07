import { Box, Flex, Grid, GridItem, Heading, Image, Text, Button, VStack, StackDivider, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwdC1zaGlydHxlbnwwfHx8fDE3MDk4MTM3NDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Casual Shorts",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1686561422086-226403620efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzaG9ydHN8ZW58MHx8fHwxNzA5ODEzNzQzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Summer Dress",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBkcmVzc3xlbnwwfHx8fDE3MDk4MTM3NDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 4,
      name: "Comfortable Jeans",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1541840031508-326b77c9a17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21mb3J0YWJsZSUyMGplYW5zfGVufDB8fHx8MTcwOTgxMzc0NHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  const ProductCard = ({ product }) => {
    return (
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg={useColorModeValue("white", "gray.800")}>
        <Image src={product.image} alt={product.name} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Heading size="md" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              {product.name}
            </Heading>
          </Box>

          <Box>
            <Text fontWeight="bold" fontSize="xl">
              {product.price}
            </Text>
          </Box>

          <Flex mt="2" alignItems="center" justifyContent="space-between">
            <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="outline">
              Add to Cart
            </Button>
            <Button colorScheme="pink" variant="ghost">
              <FaHeart />
            </Button>
            <Button colorScheme="blue" variant="ghost">
              <FaSearch />
            </Button>
          </Flex>
        </Box>
      </Box>
    );
  };

  return (
    <Box p={8}>
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Clothing Brand Ecommerce Store
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {products.map((product) => (
            <GridItem w="100%" key={product.id}>
              <ProductCard product={product} />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default Index;

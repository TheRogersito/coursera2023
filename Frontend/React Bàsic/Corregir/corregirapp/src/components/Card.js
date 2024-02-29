import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" borderRadius="15px" textAlign="left">
      <Image src={imageSrc} borderRadius="15px"></Image>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <Text>See more <FontAwesomeIcon icon={faArrowRight}/></Text>
    </VStack>
    );
};

export default Card;

import { Container, Text, Title } from "@mantine/core";
import { FaHeart } from "react-icons/fa";

const LovePage = () => {
  return (
    <Container w={"100%"} h={"100%"}>
      <Title order={3}>Постскриптум</Title>
      <br />
      <Text>
        Я тебя правда просто безумно сильно люблю. Ты лучшее, что со мной в
        принципе случалось в жизни! У нас длинная и красивая история, да со
        своими проблемами и ссорами, но она очень счастливая. Я очень хочу
        построить с тобой семью, я уверен что у нас все получится! Прости меня
        пожалуйста, все общение было без любого "любовного" контекста! Я не
        знаю, почему я не рассказал тебе про это сразу, но прошу поверить в то,
        что действительно не было даже умысла. Я сделал безумную глупость,
        прости меня!
      </Text>
      <br />

      <Text>
        Я ТЕБЯ ОЧЕНЬ ОЧЕНЬ ОЧЕНЬ СИЛЬНО ЛЮБЛЮ 
        <FaHeart color="red" /> <FaHeart color="red" /> <FaHeart color="red" />{" "}
        <FaHeart color="red" /> <FaHeart color="red" /> <FaHeart color="red" />
      </Text>

      <br />
      <Container h={20}></Container>
    </Container>
  );
};

export default LovePage;

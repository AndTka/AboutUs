import { Container, List, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container w={"100%"} h={"100%"}>
      <Title order={3}>Что это такое?</Title>
      <br />
      <Text>
        Этот сайт я создал специально для тебя! Сверху ты видишь навигационную
        панель, на которой ты можешь переходить между страничками. Ниже написан порядок, пожалуйста, следуй ему.
      </Text>

      <br />
      <Title order={6}>Порядок:</Title>
      <List type="ordered">
        <List.Item>
          Первая страница <Link to={"/AboutUs/history"}>History</Link> - это
          страница о нашей с тобой истории. Первым делом перейди на нее!
        </List.Item>
        <List.Item>
          Вторая страница <Link to={"/AboutUs/photo"}>Beautiful Photo</Link> -
          это страница с нашими фотографиями, которые мне очень сильно нравятся.
          Посмотри на них и улыбнись!
        </List.Item>
        <List.Item>Третья страница <Link to={"/AboutUs/love"}>Love</Link>, просто прочитай ее))))</List.Item>
      </List>
    </Container>
  );
};

export default HomePage;

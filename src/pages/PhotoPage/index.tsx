import { Container, Title } from "@mantine/core";
import { CardComp } from "./Card";
import { Link } from "react-router-dom";

const PhotoPage = () => {
  const photo = [
    {
      id: 1,
      link: "https://sun9-1.userapi.com/impf/QPembNlikEZ8ncwZ6nwxpVgBsOdARtj8GvdUxg/yNNlCHACprc.jpg?size=1620x2160&quality=95&sign=a3d882cca0eb0eea4b3342e2ee452c48&type=album",
      title: "Новый год 2024",
      description:
        "Эта очень красивая фотография с нашего последнего нового года!",
      tag: "Новый год",
    },
    {
      id: 2,
      link: "https://sun9-4.userapi.com/impf/LDCs1PN8YY27JH5NsknBeFJxH4j_VTMd_gS18w/85kBchBjeoc.jpg?size=1620x2160&quality=95&sign=8ff69ec12d4073948f9c4571a621c7c3&type=album",
      title: "Прогулка около МоскваСити",
      description:
        "Это наша прогулка, когда Лена была последний день в Москве, а я купил телефон",
      tag: "Прогулка",
    },
    {
      id: 3,
      link: "https://sun9-50.userapi.com/impf/DPOwUraaUbOxr2nQYPiTGJxu8helEeedP9SJ2Q/rGxlmoW6UDE.jpg?size=1347x1028&quality=95&sign=37314fa2d5e24b4a8deef39d6cb13681&type=album",
      title: "Фоткались на море",
      description:
        "Это мы с тобой фотографировались на море, когда Насте было плохо, а мы пошли с тобой в двоем гулять",
      tag: "Море",
    },
    {
      id: 4,
      link: "https://sun9-25.userapi.com/impf/tgOE4Mo5IG9ZBLTV_ZriUxUwY5utYxnl1L8QTQ/IriUeo6mOPQ.jpg?size=1440x1440&quality=95&sign=6876b3a1d60fc11954ee6f461ff15a9b&type=album",
      title: "Фоткались на море",
      description:
        "Это мы с тобой фотографировались на море, когда Насте было плохо, а мы пошли с тобой в двоем гулять",
      tag: "Море",
    },
    {
      id: 5,
      link: "https://sun9-17.userapi.com/impf/3RJ_eLcJR4163YmFk7r7yq3msPHBIzRm9rcPkg/E5M05vp9AV4.jpg?size=1440x1920&quality=95&sign=6310a78ed134b9868a0c1690ca0c1931&type=album",
      title: "Фоткались на море",
      description:
        "Это мы с тобой фотографировались на море, когда Насте было плохо, а мы пошли с тобой в двоем гулять",
      tag: "Море",
    },
    {
      id: 6,
      link: "https://sun9-33.userapi.com/impf/QlpRm0Zn8TBuqwTArMmpcIpLpMyuY3JEAGQC4g/ruXbi1XMofk.jpg?size=1440x1920&quality=95&sign=170b1e190758f1542ebc2e0355db88a0&type=album",
      title: "Фоткались на море",
      description:
        "Это мы с тобой фотографировались на море, когда поехали гулять в Анапу",
      tag: "Море",
    },
    {
      id: 7,
      link: "https://sun9-44.userapi.com/impf/qY6DMpYsFdJibTYhP6ePWvy_JaDdhvdbEIA8Iw/O2J_F7GlSWk.jpg?size=2560x1704&quality=95&sign=07b4a18ecf3d64df390b2098198a8aaf&type=album",
      title: "Фоткались в Курске, перед поездом",
      description:
        "Это нас фотографировал Кирилл, перед отъездом на море, в Курске",
      tag: "Курск",
    },
    {
      id: 8,
      link: "https://sun9-47.userapi.com/impf/hFBZ-4qA3s_6Z2o8y7DAud83vXSKB890kKzpew/4Xa2OYEOwDk.jpg?size=1440x1920&quality=95&sign=1d1e8794f3943035698bd16f5b836a49&type=album",
      title: "Фоткались в Железногоске",
      description:
        "Это нас фотографировали, пока мы ждали Пиражулю с автомойки",
      tag: "Железногорск",
    },
    {
      id: 9,
      link: "https://sun9-47.userapi.com/impf/XrAea8V0AGmg0Zq9Ka2EwRopkkby4Uxv2X3RMQ/KYJJLvOrLws.jpg?size=1440x1920&quality=95&sign=35966375d70a41d3da676e1cc3750b95&type=album",
      title: "Фоткались в Железногоске",
      description: "Это просто прикольная фотка",
      tag: "Железногорск",
    },
  ];

  return (
    <Container w={"100%"} h={"100%"}>
      <Title order={3}>Альбом моих любимых фотографий</Title>
      <br />
      {photo.map((el) => (
        <CardComp key={el.id} {...el} />
      ))}

      <Link to={"/AboutUs/love"}>{`Далее >>>`}</Link>
      <br />
      <Container h={20}></Container>
    </Container>
  );
};

export default PhotoPage;

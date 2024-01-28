import { Card, Image, Text, Badge } from "@mantine/core";
import classes from "./styles.module.css";

export function CardComp({
  link,
  title,
  description,
  tag
}: {
  link: string;
  title: string;
  description: string;
  tag: string
}) {
  return (
    <Card withBorder radius="md" className={classes.card} mb={20}>
      <Card.Section>
        <Image src={link} height={180} />
      </Card.Section>

      <Badge
        className={classes.rating}
        variant="gradient"
        gradient={{ from: "yellow", to: "red" }}
      >
        {tag}
      </Badge>

      <Text className={classes.title} fw={500}>
       {title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {description}
      </Text>
    </Card>
  );
}

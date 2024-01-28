import { Container } from "@mantine/core";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  const links: { id: number; label: string; link: string }[] = [
    { id: 1, label: "Home", link: "/" },
  ];
  
  return (
    <header className={styles.header}>
      <nav>
        <Container className={styles.downBlock}>
          <div className={styles.scroll}>
            {links.map((el) => (
              <NavLink
                key={el.id}
                to={el.link}
                className={({ isActive }) =>
                  isActive ? clsx(styles.link, styles.active) : styles.link
                }
              >
                {el.label}
              </NavLink>
            ))}
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
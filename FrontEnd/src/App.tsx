import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Welcome } from "./Welcome/Welcome";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Navbar />
      <Welcome />
    </MantineProvider>
  );
}

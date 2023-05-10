import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
    fonts: {
        body: "Open Sans, sans-serif",
        heading: "Montserrat, sans-serif",
    },
    components: {
        Button: {
            defaultProps: {
                colorScheme: "#111825",

            },
            baseStyle: {
                _hover: {
                    bg: "#D2691E",
                },
            },
        },
    },
    colors: {
        primary: {
            100: "#E6F6FF",
            200: "#B3E1FF",
            300: "#80CFFF",
            400: "#4DB9FF",
            500: "#1A9EFF",
            600: "#007ACC",
            700: "#005E99",
            800: "#003F66",
            900: "#002233",
        },
    },
    styles: {
        global: {
            "html, body": {
                height: "100vh",
                backgroundColor: "gray.50",
            },
            "button": {
                backgroundColor: "#F77F00",
                color: "white",
            },
            "button:hover": {
                backgroundColor: "#D2691E"
            }
        },
    },
});

export default theme;

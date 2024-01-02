import {
    Avatar,
    Box,
    Collapse,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
import { RiHandCoinFill } from "react-icons/ri";
import { AiFillGift } from "react-icons/ai";
import { FcCollaboration } from "react-icons/fc";
import { FaGift } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
// import { Logo } from "@choc-ui/logo";
import Logo from "./logo"

export default function App() {
    const sidebar = useDisclosure();
    const integrations = useDisclosure();
    const color = useColorModeValue("gray.600", "gray.300");

    const NavItem = (props: any) => {
        const { icon, children, ...rest } = props;
        return (
            <Flex
                align="center"
                px="4"
                pl="4"
                py="3"
                cursor="pointer"
                color="inherit"
                _dark={{ color: "gray.400" }}
                _hover={{
                    bg: "gray.100",
                    _dark: { bg: "gray.900" },
                    color: "gray.900",
                }}
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
                {...rest}
            >
                {icon && (
                    <Icon
                        mx="2"
                        boxSize="4"
                        _groupHover={{
                            color: color,
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        );
    };

    const SidebarContent = (props: any) => (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg="white"
            _dark={{ bg: "gray.800" }}
            border
            color="inherit"
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <Flex px="4" py="5" align="center">
                <Logo />
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="gray.600"
                aria-label="Main Navigation"
            >
                <NavItem icon={MdHome}>Dashboard</NavItem>
                <NavItem icon={RiHandCoinFill}>Points</NavItem>
                <NavItem icon={IoStorefront}>Store</NavItem>
                <NavItem icon={FcCollaboration}>Referal</NavItem>
                <NavItem icon={FaGift}>Rewards</NavItem>
                <NavItem icon={BsGearFill}>Settings</NavItem>
            </Flex>
        </Box>
    );
    return (
        <Box as="section" bg="gray.50" _dark={{ bg: "gray.700" }} minH="100vh">
            <SidebarContent display={{ base: "none", md: "unset" }} />
            <Drawer
                isOpen={sidebar.isOpen}
                onClose={sidebar.onClose}
                placement="left"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <SidebarContent w="full" borderRight="none" />
                </DrawerContent>
            </Drawer>
            <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                <Flex
                    as="header"
                    align="center"
                    justify="space-between"
                    w="full"
                    px="4"
                    bg="white"
                    _dark={{ bg: "gray.800" }}
                    borderBottomWidth="1px"
                    color="inherit"
                    h="14"
                >
                    <IconButton
                        aria-label="Menu"
                        display={{ base: "inline-flex", md: "none" }}
                        onClick={sidebar.onOpen}
                        icon={<FiMenu />}
                        size="sm"
                    />
                    <InputGroup w="96" display={{ base: "none", md: "flex" }}>
                        <InputLeftElement color="gray.500">
                            <FiSearch />
                        </InputLeftElement>
                        <Input placeholder="Search for articles..." />
                    </InputGroup>

                    <Flex align="center">
                        <Icon color="gray.500" as={FaBell} cursor="pointer" />
                        <Avatar
                            ml="4"
                            size="sm"
                            name="anubra266"
                            src="https://avatars.githubusercontent.com/u/30869823?v=4"
                            cursor="pointer"
                        />
                    </Flex>
                </Flex>

                <Box as="main" p="4">
                    {/* Add content here, remove div below  */}
                    <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
                </Box>
            </Box>
        </Box>
    );
};

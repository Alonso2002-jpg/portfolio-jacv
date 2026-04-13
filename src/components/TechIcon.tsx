import {
    SiDotnet,
    SiLaravel,
    SiFastapi,
    SiAngular,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiDocker,
    SiNginx,
    SiAmazonwebservices,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { VscExtensions } from "react-icons/vsc";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
    dotnet: SiDotnet,
    laravel: SiLaravel,
    fastapi: SiFastapi,
    angular: SiAngular,
    react: SiReact,
    typescript: SiTypescript,
    tailwindcss: SiTailwindcss,
    docker: SiDocker,
    nginx: SiNginx,
    aws: SiAmazonwebservices,
    github: FaGithub,
    cursor: HiSparkles,
    extension: VscExtensions,
};

interface Props {
    icon: string;
    size?: number;
}

export default function TechIcon({ icon, size = 18 }: Props) {
    const Icon = iconMap[icon];
    if (!Icon) return null;
    return <Icon size={size} />;
}


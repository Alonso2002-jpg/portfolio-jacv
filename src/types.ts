type ProjectImageProps = {
    image?: any
    images?: any[]
    imgBg:string
}

type ProjectTextProps = {
    title:string
    techstach:string
    description:string
    shape?:string
    githubUrl?:string
    liveUrl?:string
}
export type ProjectComponentProps = {
    projectImage:ProjectImageProps
    projectText:ProjectTextProps
    imgPosition: "left" | "right"
}
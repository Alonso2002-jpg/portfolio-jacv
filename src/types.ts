type ProjectImageProps = {
    image:any
    imgBg:string
}

type ProjectTextProps = {
    title:string
    techstach:string
    description:string
    shape?:string
    githubUrl?:string
}
export type ProjectComponentProps = {
    projectImage:ProjectImageProps
    projectText:ProjectTextProps
    imgPosition: "left" | "right"
}
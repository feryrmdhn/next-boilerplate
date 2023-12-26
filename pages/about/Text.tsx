import { FC } from "react"
import { AboutTypes } from "@/types"

const TextAbout: FC<AboutTypes> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default TextAbout

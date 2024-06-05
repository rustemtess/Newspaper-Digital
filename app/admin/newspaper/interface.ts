import { ReactNode } from "react"

export interface INewspaperPage {
    params: {
        id: string
    }
}

export interface IComponent {
    id: number,
    name: string,
    children?: string
}
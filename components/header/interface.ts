import { ReactNode } from "react"

export interface IHeader {
    activeId?: number,
    children?: ReactNode
}

export interface IItem {
    id: number,
    title: string,
    href: string,
    allowItems: Array<number>
}
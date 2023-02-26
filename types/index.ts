import { ReactNode } from "react"

export interface GlobalTypes {
    id: number | string;
    name?: string;
    status?: boolean;
}

export interface UrlParams extends GlobalTypes {
    _page: number;
    _limit?: number;
    filter_by?: 'string';
    sort_by?: 'string';
}

export interface Data extends GlobalTypes {
    image: string;
    description: string;
    phone: number;
}

export interface ButtonProps {
    onClick?: () => void;
    children: ReactNode;
}

export interface AboutTypes {
    children: ReactNode;
}


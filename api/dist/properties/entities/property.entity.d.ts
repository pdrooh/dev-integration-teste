export declare enum PropertyType {
    HOME = "HOME",
    APARTMENT = "APARTMENT",
    KITNET = "KITNET"
}
export declare class Property {
    id: string;
    title: string;
    description: string;
    address: string;
    price: number;
    type: PropertyType;
    createdAt: Date;
}

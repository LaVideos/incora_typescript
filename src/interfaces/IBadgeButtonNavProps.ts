interface IBadgeButtonNavProps{
    data:string;
    disabled:boolean;
    onclick():void;
    classes?: {
        btn?: string;
        activeBtn?: string;
    }
}


export type {
    IBadgeButtonNavProps
}
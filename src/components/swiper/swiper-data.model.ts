import { ButtonModel } from "@/models/button.model";

export interface SwiperDataConfigModel {
    title?: string,
    subTitle?: string,
    buttons: ButtonModel[],
    des?:string
    pagination?:boolean,
    playAndPause?:boolean,
    image?:string
}
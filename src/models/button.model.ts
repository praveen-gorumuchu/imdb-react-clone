export interface ButtonModel {
    btnName: string,
    isDisabled?: boolean,
    icon?: any,
    btnType: ButtonTypeEnum
}

export enum ButtonTypeEnum {
    PRIMARY = 'btn-primary',
    SECONDARY = 'btn-secondary',
    PRIMARY_OUTLINE = 'btn-outline',
    SECONDARY_OUTLINE = 'btn-secondary-outline'
}
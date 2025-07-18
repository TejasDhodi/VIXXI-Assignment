export type SliderType = {
    slider2?: string[],
    slider3?: {
        img: string
        title: string
        description: string
    }[]
}

export type CommonSliderType = {
    settings: object
    className: string
    sliderData: SliderType
    sliderInd: number
}
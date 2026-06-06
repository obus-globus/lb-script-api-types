import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ColorSpace extends Enum<ColorSpace> {
    static ADOBE_RGB: ColorSpace;
    static DCI_P3: ColorSpace;
    static DISPLAY_P3: ColorSpace;
    static REC2020: ColorSpace;
    static SRGB: ColorSpace;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ColorSpace;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    getName(): Component;
    name(): "SRGB" | "DCI_P3" | "DISPLAY_P3" | "REC2020" | "ADOBE_RGB";
}
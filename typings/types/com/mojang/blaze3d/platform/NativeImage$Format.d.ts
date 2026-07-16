import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class NativeImage$Format extends Enum<NativeImage$Format> {
    static LUMINANCE: NativeImage$Format;
    static LUMINANCE_ALPHA: NativeImage$Format;
    static RGB: NativeImage$Format;
    static RGBA: NativeImage$Format;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NativeImage$Format;
    static values(): NativeImage$Format[];
    private constructor(components: number, hasRed: boolean, hasGreen: boolean, hasBlue: boolean, hasLuminance: boolean, hasAlpha: boolean, redOffset: number, greenOffset: number, blueOffset: number, luminanceOffset: number, alphaOffset: number, supportedByStb: boolean)
    // private alphaOffset: number;
    // private blueOffset: number;
    // private components: number;
    // private greenOffset: number;
    // private hasAlpha: boolean;
    // private hasBlue: boolean;
    // private hasGreen: boolean;
    // private hasLuminance: boolean;
    // private hasRed: boolean;
    // private luminanceOffset: number;
    // private redOffset: number;
    // private supportedByStb: boolean;
    alphaOffset(): number;
    blueOffset(): number;
    components(): number;
    greenOffset(): number;
    hasAlpha(): boolean;
    hasBlue(): boolean;
    hasGreen(): boolean;
    hasLuminance(): boolean;
    hasLuminanceOrAlpha(): boolean;
    hasLuminanceOrBlue(): boolean;
    hasLuminanceOrGreen(): boolean;
    hasLuminanceOrRed(): boolean;
    hasRed(): boolean;
    luminanceOffset(): number;
    luminanceOrAlphaOffset(): number;
    luminanceOrBlueOffset(): number;
    luminanceOrGreenOffset(): number;
    luminanceOrRedOffset(): number;
    redOffset(): number;
    supportedByStb(): boolean;
    name(): "RGBA" | "RGB" | "LUMINANCE_ALPHA" | "LUMINANCE";
}
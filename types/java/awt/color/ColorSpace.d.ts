import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ColorSpace extends Object implements Serializable {
    static CS_CIEXYZ: number;
    static CS_GRAY: number;
    static CS_LINEAR_RGB: number;
    static CS_PYCC: number;
    static CS_sRGB: number;
    static TYPE_2CLR: number;
    static TYPE_3CLR: number;
    static TYPE_4CLR: number;
    static TYPE_5CLR: number;
    static TYPE_6CLR: number;
    static TYPE_7CLR: number;
    static TYPE_8CLR: number;
    static TYPE_9CLR: number;
    static TYPE_ACLR: number;
    static TYPE_BCLR: number;
    static TYPE_CCLR: number;
    static TYPE_CMY: number;
    static TYPE_CMYK: number;
    static TYPE_DCLR: number;
    static TYPE_ECLR: number;
    static TYPE_FCLR: number;
    static TYPE_GRAY: number;
    static TYPE_HLS: number;
    static TYPE_HSV: number;
    static TYPE_Lab: number;
    static TYPE_Luv: number;
    static TYPE_RGB: number;
    static TYPE_XYZ: number;
    static TYPE_YCbCr: number;
    static TYPE_Yxy: number;
    static getInstance(paramarg0: number): ColorSpace;
    constructor(arg0: number, arg1: number)
    // private compName: string[];
    readonly numComponents: number;
    readonly type: number;
    fromCIEXYZ(arg0: number[]): number[];
    fromRGB(arg0: number[]): number[];
    getMaxValue(arg0: number): number;
    getMinValue(arg0: number): number;
    getName(arg0: number): string;
    getNumComponents(): number;
    getType(): number;
    isCS_sRGB(): boolean;
    rangeCheck(arg0: number): void;
    toCIEXYZ(arg0: number[]): number[];
    toRGB(arg0: number[]): number[];
}
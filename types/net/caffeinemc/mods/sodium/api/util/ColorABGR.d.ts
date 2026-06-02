import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ColorU8 } from '../../../../../../net/caffeinemc/mods/sodium/api/util/ColorU8.d.ts'
export class ColorABGR extends Object implements ColorU8 {
    static COMPONENT_BITS: number;
    static COMPONENT_MASK: number;
    static COMPONENT_RANGE: number;
    static COMPONENT_RANGE_INVERSE: number;
    static byteToNormalizedFloat(paramarg0: number): number;
    static fromNativeByteOrder(paramarg0: number): number;
    static mulRGB(paramarg0: number, paramarg1: number): number;
    static mulRGB(paramarg0: number, paramarg1: number): number;
    static normalizedFloatToByte(paramarg0: number): number;
    static pack(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static pack(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static pack(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static toNativeByteOrder(paramarg0: number): number;
    static unpackAlpha(paramarg0: number): number;
    static unpackBlue(paramarg0: number): number;
    static unpackGreen(paramarg0: number): number;
    static unpackRed(paramarg0: number): number;
    static withAlpha(paramarg0: number, paramarg1: number): number;
    static withAlpha(paramarg0: number, paramarg1: number): number;
    constructor()
}
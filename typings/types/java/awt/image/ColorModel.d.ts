import type { Transparency } from '../../../java/awt/Transparency.d.ts'
import type { ColorSpace } from '../../../java/awt/color/ColorSpace.d.ts'
import type { Raster } from '../../../java/awt/image/Raster.d.ts'
import type { SampleModel } from '../../../java/awt/image/SampleModel.d.ts'
import type { WritableRaster } from '../../../java/awt/image/WritableRaster.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ColorModel extends Object implements Transparency {
    static BITMASK: number;
    static OPAQUE: number;
    static TRANSLUCENT: number;
    static getRGBdefault(): ColorModel;
    constructor(arg0: number)
    constructor(arg0: number, arg1: number[], arg2: ColorSpace, arg3: boolean, arg4: boolean, arg5: number, arg6: number)
    colorSpace: ColorSpace;
    // private colorSpaceType: number;
    // private isAlphaPremultiplied: boolean;
    // private is_sRGB: boolean;
    // private maxBits: number;
    // private nBits: number[];
    numColorComponents: number;
    numComponents: number;
    // private pixel_bits: number;
    // private supportsAlpha: boolean;
    transferType: number;
    transparency: number;
    coerceData(arg0: WritableRaster, arg1: boolean): ColorModel;
    createCompatibleSampleModel(arg0: number, arg1: number): SampleModel;
    createCompatibleWritableRaster(arg0: number, arg1: number): WritableRaster;
    equals(arg0: Object | null): boolean;
    getAlpha(arg0: Object): number;
    getAlpha(arg0: number): number;
    getAlphaRaster(arg0: WritableRaster): WritableRaster;
    getBlue(arg0: Object): number;
    getBlue(arg0: number): number;
    getColorSpace(): ColorSpace;
    getComponentSize(): number[];
    getComponentSize(arg0: number): number;
    getComponents(arg0: Object, arg1: number[], arg2: number): number[];
    getComponents(arg0: number, arg1: number[], arg2: number): number[];
    getDataElement(arg0: number[], arg1: number): number;
    getDataElements(arg0: number[], arg1: number, arg2: Object): Object;
    getDataElements(arg0: number, arg1: Object): Object;
    getGreen(arg0: Object): number;
    getGreen(arg0: number): number;
    getNormalizedComponents(arg0: Object, arg1: number[], arg2: number): number[];
    getNormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
    getNumColorComponents(): number;
    getNumComponents(): number;
    getPixelSize(): number;
    getRGB(arg0: Object): number;
    getRGB(arg0: number): number;
    getRed(arg0: Object): number;
    getRed(arg0: number): number;
    getTransferType(): number;
    getTransparency(): number;
    getUnnormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
    hasAlpha(): boolean;
    hashCode(): number;
    isAlphaPremultiplied(): boolean;
    isCompatibleRaster(arg0: Raster): boolean;
    isCompatibleSampleModel(arg0: SampleModel): boolean;
    toString(): string;
}
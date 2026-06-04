import type { BufferedImage } from '../../../java/awt/image/BufferedImage.d.ts'
import type { ColorModel } from '../../../java/awt/image/ColorModel.d.ts'
import type { Raster } from '../../../java/awt/image/Raster.d.ts'
import type { SampleModel } from '../../../java/awt/image/SampleModel.d.ts'
import type { WritableRaster } from '../../../java/awt/image/WritableRaster.d.ts'
import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BufImgSurfaceData$ICMColorData } from '../../../sun/awt/image/BufImgSurfaceData$ICMColorData.d.ts'
export class IndexColorModel extends ColorModel {
    static BITMASK: number;
    static OPAQUE: number;
    static TRANSLUCENT: number;
    static getRGBdefault(): ColorModel;
    constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[])
    constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number[])
    constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number)
    constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean)
    constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number)
    constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number, arg6: number)
    constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: number, arg5: BigInteger)
    // private allgrayopaque: boolean;
    // private colorData: BufImgSurfaceData$ICMColorData;
    // private hashCode: number;
    // private lookupcache: number[];
    // private map_size: number;
    // private pixel_mask: number;
    // private rgb: number[];
    // private transparent_index: number;
    // private validBits: BigInteger;
    // private calcRealMapSize(arg0: number, arg1: number): number;
    // private calculatePixelMask(): void;
    convertToIntDiscrete(arg0: Raster, arg1: boolean): BufferedImage;
    createCompatibleSampleModel(arg0: number, arg1: number): SampleModel;
    createCompatibleWritableRaster(arg0: number, arg1: number): WritableRaster;
    equals(arg0: Object | null): boolean;
    // private getAllValid(): BigInteger;
    getAlpha(arg0: Object): number;
    getAlpha(arg0: number): number;
    getAlphas(arg0: number[]): void;
    getBlue(arg0: Object): number;
    getBlue(arg0: number): number;
    getBlues(arg0: number[]): void;
    getComponentSize(): number[];
    getComponentSize(arg0: number): number;
    getComponents(arg0: Object, arg1: number[], arg2: number): number[];
    getComponents(arg0: number, arg1: number[], arg2: number): number[];
    getDataElement(arg0: number[], arg1: number): number;
    getDataElements(arg0: number[], arg1: number, arg2: Object): Object;
    getDataElements(arg0: number, arg1: Object): Object;
    getGreen(arg0: Object): number;
    getGreen(arg0: number): number;
    getGreens(arg0: number[]): void;
    getMapSize(): number;
    getRGB(arg0: Object): number;
    getRGB(arg0: number): number;
    getRGBs(arg0: number[]): void;
    getRed(arg0: Object): number;
    getRed(arg0: number): number;
    getReds(arg0: number[]): void;
    getTransparency(): number;
    getTransparentPixel(): number;
    getValidPixels(): BigInteger;
    hashCode(): number;
    // private installpixel(arg0: Object, arg1: number): Object;
    isCompatibleRaster(arg0: Raster): boolean;
    isCompatibleSampleModel(arg0: SampleModel): boolean;
    isValid(): boolean;
    isValid(arg0: number): boolean;
    // private setRGBs(arg0: number, arg1: number[], arg2: number[], arg3: number[], arg4: number[]): void;
    // private setRGBs(arg0: number, arg1: number[], arg2: number, arg3: boolean): void;
    // private setTransparency(arg0: number): void;
    // private setTransparentPixel(arg0: number): void;
    toString(): string;
}
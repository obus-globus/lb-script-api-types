import type { Point } from '../../../java/awt/Point.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { DataBuffer } from '../../../java/awt/image/DataBuffer.d.ts'
import type { Raster } from '../../../java/awt/image/Raster.d.ts'
import type { SampleModel } from '../../../java/awt/image/SampleModel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WritableRaster extends Raster {
    static createBandedRaster(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[], paramarg5: number[], paramarg6: Point): WritableRaster;
    static createBandedRaster(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: Point): WritableRaster;
    static createBandedRaster(paramarg0: DataBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[], paramarg5: number[], paramarg6: Point): WritableRaster;
    static createInterleavedRaster(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number[], paramarg6: Point): WritableRaster;
    static createInterleavedRaster(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: Point): WritableRaster;
    static createInterleavedRaster(paramarg0: DataBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number[], paramarg6: Point): WritableRaster;
    static createPackedRaster(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: Point): WritableRaster;
    static createPackedRaster(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: Point): WritableRaster;
    static createPackedRaster(paramarg0: DataBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[], paramarg5: Point): WritableRaster;
    static createPackedRaster(paramarg0: DataBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: Point): WritableRaster;
    static createRaster(paramarg0: SampleModel, paramarg1: DataBuffer, paramarg2: Point): Raster;
    static createWritableRaster(paramarg0: SampleModel, paramarg1: Point): WritableRaster;
    static createWritableRaster(paramarg0: SampleModel, paramarg1: DataBuffer, paramarg2: Point): WritableRaster;
    constructor(arg0: SampleModel, arg1: Point)
    constructor(arg0: SampleModel, arg1: DataBuffer, arg2: Point)
    constructor(arg0: SampleModel, arg1: DataBuffer, arg2: Rectangle, arg3: Point, arg4: WritableRaster)
    createWritableChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): WritableRaster;
    createWritableTranslatedChild(arg0: number, arg1: number): WritableRaster;
    getWritableParent(): WritableRaster;
    setDataElements(arg0: number, arg1: number, arg2: Raster): void;
    setDataElements(arg0: number, arg1: number, arg2: Object): void;
    setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Object): void;
    setPixel(arg0: number, arg1: number, arg2: number[]): void;
    setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
    setRect(arg0: Raster): void;
    setRect(arg0: number, arg1: number, arg2: Raster): void;
    setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
}
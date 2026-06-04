import type { Point } from '../../../java/awt/Point.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { DataBuffer } from '../../../java/awt/image/DataBuffer.d.ts'
import type { SampleModel } from '../../../java/awt/image/SampleModel.d.ts'
import type { WritableRaster } from '../../../java/awt/image/WritableRaster.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Raster extends Object {
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
    constructor(arg0: SampleModel, arg1: DataBuffer, arg2: Rectangle, arg3: Point, arg4: Raster)
    dataBuffer: DataBuffer;
    height: number;
    minX: number;
    minY: number;
    numBands: number;
    numDataElements: number;
    parent: Raster;
    sampleModel: SampleModel;
    sampleModelTranslateX: number;
    sampleModelTranslateY: number;
    width: number;
    createChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): Raster;
    createCompatibleWritableRaster(): WritableRaster;
    createCompatibleWritableRaster(arg0: Rectangle): WritableRaster;
    createCompatibleWritableRaster(arg0: number, arg1: number): WritableRaster;
    createCompatibleWritableRaster(arg0: number, arg1: number, arg2: number, arg3: number): WritableRaster;
    createTranslatedChild(arg0: number, arg1: number): Raster;
    getBounds(): Rectangle;
    getDataBuffer(): DataBuffer;
    getDataElements(arg0: number, arg1: number, arg2: Object): Object;
    getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Object): Object;
    getHeight(): number;
    getMinX(): number;
    getMinY(): number;
    getNumBands(): number;
    getNumDataElements(): number;
    getParent(): Raster;
    getPixel(arg0: number, arg1: number, arg2: number[]): number[];
    getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
    getSample(arg0: number, arg1: number, arg2: number): number;
    getSampleDouble(arg0: number, arg1: number, arg2: number): number;
    getSampleFloat(arg0: number, arg1: number, arg2: number): number;
    getSampleModel(): SampleModel;
    getSampleModelTranslateX(): number;
    getSampleModelTranslateY(): number;
    getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
    getTransferType(): number;
    getWidth(): number;
}
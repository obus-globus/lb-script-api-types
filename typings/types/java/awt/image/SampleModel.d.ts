import type { DataBuffer } from '../../../java/awt/image/DataBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class SampleModel extends Object {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    dataType: number;
    height: number;
    numBands: number;
    width: number;
    createCompatibleSampleModel(arg0: number, arg1: number): SampleModel;
    createDataBuffer(): DataBuffer;
    createSubsetSampleModel(arg0: number[]): SampleModel;
    getDataElements(arg0: number, arg1: number, arg2: Object, arg3: DataBuffer): Object;
    getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Object, arg5: DataBuffer): Object;
    getDataType(): number;
    getHeight(): number;
    getNumBands(): number;
    getNumDataElements(): number;
    getPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): number[];
    getPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): number[];
    getPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): number[];
    getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): number[];
    getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): number[];
    getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): number[];
    getSample(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;
    getSampleDouble(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;
    getSampleFloat(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number;
    getSampleSize(): number[];
    getSampleSize(arg0: number): number;
    getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): number[];
    getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): number[];
    getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): number[];
    getTransferType(): number;
    getWidth(): number;
    setDataElements(arg0: number, arg1: number, arg2: Object, arg3: DataBuffer): void;
    setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Object, arg5: DataBuffer): void;
    setPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): void;
    setPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): void;
    setPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): void;
    setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): void;
    setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): void;
    setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): void;
    setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;
    setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;
    setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void;
    setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): void;
    setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): void;
    setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): void;
}
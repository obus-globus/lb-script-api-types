import type { Classifications } from '../../../../../ai/djl/modality/Classifications.d.ts'
import type { Classifications$Classification } from '../../../../../ai/djl/modality/Classifications$Classification.d.ts'
import type { BoundingBox } from '../../../../../ai/djl/modality/cv/output/BoundingBox.d.ts'
export class DetectedObjects extends Classifications {
    constructor(arg0: string[], arg1: number[], arg2: BoundingBox[])
    // private boundingBoxes: BoundingBox[];
    getNumberOfObjects(): number;
    item<T extends Classifications$Classification>(arg0: number): T;
}
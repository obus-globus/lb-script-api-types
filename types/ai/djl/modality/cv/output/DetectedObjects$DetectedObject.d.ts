import type { Classifications$Classification } from '../../../../../ai/djl/modality/Classifications$Classification.d.ts'
import type { BoundingBox } from '../../../../../ai/djl/modality/cv/output/BoundingBox.d.ts'
export class DetectedObjects$DetectedObject extends Classifications$Classification {
    constructor(arg0: string, arg1: number, arg2: BoundingBox)
    readonly boundingBox: BoundingBox;
    getBoundingBox(): BoundingBox;
    toString(): string;
}
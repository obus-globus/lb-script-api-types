import type { Point } from '../../../../../ai/djl/modality/cv/output/Point.d.ts'
export class Joints$Joint extends Point {
    constructor(arg0: number, arg1: number, arg2: number)
    readonly confidence: number;
    getConfidence(): number;
}
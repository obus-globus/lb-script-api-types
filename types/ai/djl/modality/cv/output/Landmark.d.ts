import type { Point } from '../../../../../ai/djl/modality/cv/output/Point.d.ts'
import type { Rectangle } from '../../../../../ai/djl/modality/cv/output/Rectangle.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
export class Landmark extends Rectangle {
    static nms(paramarg0: Rectangle[], paramarg1: number[], paramarg2: number): number[];
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Point[])
    // private points: Point[];
    getPath(): Point[];
    serialize(): JsonObject;
}
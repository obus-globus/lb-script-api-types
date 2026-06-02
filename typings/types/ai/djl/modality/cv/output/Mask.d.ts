import type { Rectangle } from '../../../../../ai/djl/modality/cv/output/Rectangle.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Mask extends Rectangle {
    static nms(paramarg0: Rectangle[], paramarg1: number[], paramarg2: number): number[];
    static toMask(paramarg0: NDArray): (Object | null)[];
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[][])
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[][], arg5: boolean)
    readonly fullImageMask: boolean;
    readonly probDist: number[][];
    getProbDist(): number[][];
    isFullImageMask(): boolean;
    serialize(): JsonObject;
}
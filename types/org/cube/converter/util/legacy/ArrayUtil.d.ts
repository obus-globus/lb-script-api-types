import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayUtil extends Object {
    static add(paramarg0: number[], paramarg1: number[]): number[];
    static build(paramarg0: number, paramarg1: number): number[];
    static clone(paramarg0: number[]): number[];
    static cloneW2Index(paramarg0: number[]): number[];
    static compileAngle(paramarg0: number[]): number[];
    static getFrom(paramarg0: number[], paramarg1: number[]): number[];
    static getOverlap(paramarg0: number[]): number[];
    static isAllEmpty(paramarg0: number[]): boolean;
    static isOneNotEmpty(paramarg0: number[]): boolean;
    static javaOffsetArray(paramarg0: number[]): number[];
    static minus(paramarg0: number[], paramarg1: number[]): number[];
    static size(paramarg0: number[], paramarg1: number[]): number[];
    static sizeAbs(paramarg0: number[], paramarg1: number[]): number[];
    static toArray(paramarg0: JsonElement[]): number[];
    private constructor()
}
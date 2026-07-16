import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PlaneMask extends Object {
    constructor(width: number, height: number, mask: boolean[], hasAny: boolean)
    hasAny: boolean;
    height: number;
    mask: boolean[];
    width: number;
    // private emitHorizontalRuns(row: number, isUpperBoundary: boolean, action: (param0: number, param1: number, param2: number, param3: number) => void): void;
    // private emitVerticalRuns(column: number, isRightBoundary: boolean, action: (param0: number, param1: number, param2: number, param3: number) => void): void;
    forEachMergedRect(action: (param0: number, param1: number, param2: number, param3: number) => void): void;
    forEachPerimeterSegment(action: (param0: number, param1: number, param2: number, param3: number) => void): void;
    get(u: number, v: number): boolean;
    index(u: number, v: number): number;
}
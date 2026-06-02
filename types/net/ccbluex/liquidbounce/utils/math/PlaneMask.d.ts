import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function4 } from '../../../../../kotlin/jvm/functions/Function4.d.ts'
export class PlaneMask extends Object {
    constructor(width: number, height: number, mask: (Object | null)[], hasAny: boolean)
    hasAny: boolean;
    height: number;
    mask: (Object | null)[];
    width: number;
    // private emitHorizontalRuns(row: number, isUpperBoundary: boolean, action: Function4<number, number, number, number, void>): void;
    // private emitVerticalRuns(column: number, isRightBoundary: boolean, action: Function4<number, number, number, number, void>): void;
    forEachMergedRect(action: Function4<number, number, number, number, void>): void;
    forEachPerimeterSegment(action: Function4<number, number, number, number, void>): void;
    get(u: number, v: number): boolean;
    index(u: number, v: number): number;
}
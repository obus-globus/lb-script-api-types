import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnitCircle extends Object {
    static CIRCLE_RES: number;
    static INSTANCE: UnitCircle;
    static POINTS: number[];
    static forEach(radius: number, consumer: (param0: Object | null, param1: Object | null) => void): void;
    CIRCLE_RES: number;
    POINTS: number[];
    forEach(radius: number, consumer: (param0: number, param1: number) => void): void;
}
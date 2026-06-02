import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../../../kotlin/jvm/functions/Function2.d.ts'
export class UnitCircle extends Object {
    static CIRCLE_RES: number;
    static INSTANCE: UnitCircle;
    static POINTS: number[];
    static forEach(paramarg0: number, paramarg1: Function2<Object, Object, void>): void;
    CIRCLE_RES: number;
    POINTS: number[];
    forEach(radius: number, consumer: Function2<number, number, void>): void;
}
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
export class InlineList<E extends Object | number | string | boolean> extends Object {
//     static box-impl(paramarg0: Object): InlineList<Object>;
 // ; invalid because of -//     static constructor-impl(paramarg0: Object): Object;
 // ; invalid because of -//     static equals-impl(paramarg0: Object, paramarg1: Object): boolean;
 // ; invalid because of -//     static equals-impl0(paramarg0: Object, paramarg1: Object): boolean;
 // ; invalid because of -//     static forEachReversed-impl(paramarg0: Object, paramarg1: Function1<Object, void>): void;
 // ; invalid because of -//     static hashCode-impl(paramarg0: Object): number;
 // ; invalid because of -//     static plus-FjFbRPM(paramarg0: Object, paramarg1: Object | null): Object;
 // ; invalid because of -//     static toString-impl(paramarg0: Object): string;
 // ; invalid because of -    constructor(holder: Object | null)
    // private holder: Object | null;
    equals(other: Object | null): boolean;
    forEachReversed(action: Function1<E, void>): void;
    hashCode(): number;
    plus(element: E): InlineList<E>;
    toString(): string;
}
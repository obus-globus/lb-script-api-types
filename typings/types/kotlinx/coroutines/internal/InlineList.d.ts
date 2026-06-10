import type { Object } from '../../../java/lang/Object.d.ts'
export class InlineList<E extends Object | number | string | boolean> extends Object {
// (invalid TS: name contains '-')     static box-impl(paramarg0: Object): InlineList<Object>;
// (invalid TS: name contains '-')     static constructor-impl(paramarg0: Object): Object;
// (invalid TS: name contains '-')     static equals-impl(paramarg0: Object, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: Object, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static forEachReversed-impl(paramarg0: Object, paramarg1: (param0: Object) => void): void;
// (invalid TS: name contains '-')     static hashCode-impl(paramarg0: Object): number;
// (invalid TS: name contains '-')     static plus-FjFbRPM(paramarg0: Object, paramarg1: Object | null): Object;
// (invalid TS: name contains '-')     static toString-impl(paramarg0: Object): string;
    constructor(holder: Object | null)
    // private holder: Object | null;
    equals(other: Object | null): boolean;
    forEachReversed(action: (param0: E) => void): void;
    hashCode(): number;
    plus(element: E): InlineList<E>;
    toString(): string;
}
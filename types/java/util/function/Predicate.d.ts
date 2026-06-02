import type { Object } from '../../../java/lang/Object.d.ts'
export interface Predicate<T extends Object | number | string | boolean> extends Object{
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(arg0: T): boolean;
}
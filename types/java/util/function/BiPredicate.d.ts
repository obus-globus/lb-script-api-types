import type { Object } from '../../../java/lang/Object.d.ts'
export interface BiPredicate<T extends Object | number | string | boolean, U extends Object | number | string | boolean> extends Object{
    and(arg0: (param0: T, param1: U) => kotlin.Boolean): (param0: T, param1: U) => kotlin.Boolean;
    negate(): (param0: T, param1: U) => kotlin.Boolean;
    or(arg0: (param0: T, param1: U) => kotlin.Boolean): (param0: T, param1: U) => kotlin.Boolean;
    test(arg0: T, arg1: U): boolean;
}
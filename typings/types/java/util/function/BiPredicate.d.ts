import type { Object } from '../../../java/lang/Object.d.ts'
export interface BiPredicate<T extends unknown, U extends unknown> extends Object {
    and(arg0: (param0: T, param1: U) => boolean): (param0: T, param1: U) => boolean;
    negate(): (param0: T, param1: U) => boolean;
    or(arg0: (param0: T, param1: U) => boolean): (param0: T, param1: U) => boolean;
    test(arg0: T, arg1: U): boolean;
}
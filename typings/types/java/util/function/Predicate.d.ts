import type { Object } from '../../../java/lang/Object.d.ts'
export interface Predicate<T extends unknown> extends Object {
    and(arg0: (param0: T) => boolean): (param0: T) => boolean;
    negate(): (param0: T) => boolean;
    or(arg0: (param0: T) => boolean): (param0: T) => boolean;
    test(arg0: T): boolean;
}
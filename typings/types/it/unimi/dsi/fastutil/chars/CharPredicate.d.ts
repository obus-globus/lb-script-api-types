import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharPredicate extends IntPredicate, Predicate<string>, Object {
    and(arg0: (param0: string) => boolean): (param0: string) => boolean;
    and(arg0: (param0: number) => boolean): (param0: string) => boolean;
    and(arg0: (param0: number) => boolean): (param0: number) => boolean;
    negate(): (param0: string) => boolean;
    negate(): (param0: number) => boolean;
    or(arg0: (param0: string) => boolean): (param0: string) => boolean;
    or(arg0: (param0: number) => boolean): (param0: string) => boolean;
    or(arg0: (param0: number) => boolean): (param0: number) => boolean;
    test(arg0: string): boolean;
    test(arg0: number): boolean;
}
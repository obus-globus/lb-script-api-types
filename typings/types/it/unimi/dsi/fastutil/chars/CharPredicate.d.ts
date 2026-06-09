import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharPredicate extends IntPredicate, Predicate<string>, Object {
    and(arg0: (param0: string) => kotlin.Boolean): (param0: string) => kotlin.Boolean;
    and(arg0: (param0: number) => kotlin.Boolean): (param0: string) => kotlin.Boolean;
    and(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    negate(): (param0: string) => kotlin.Boolean;
    negate(): (param0: number) => kotlin.Boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: string) => kotlin.Boolean): (param0: string) => kotlin.Boolean;
    or(arg0: (param0: number) => kotlin.Boolean): (param0: string) => kotlin.Boolean;
    or(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(arg0: string): boolean;
    test(arg0: number): boolean;
}
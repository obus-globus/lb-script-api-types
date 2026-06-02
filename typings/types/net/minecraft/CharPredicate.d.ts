import type { Object } from '../../java/lang/Object.d.ts'
export interface CharPredicate extends Object{
    and(other: (param0: string) => kotlin.Boolean): (param0: string) => kotlin.Boolean;
    negate(): (param0: string) => kotlin.Boolean;
    or(other: (param0: string) => kotlin.Boolean): (param0: string) => kotlin.Boolean;
    test(value: string): boolean;
}
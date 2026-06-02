import type { Object } from '../../../java/lang/Object.d.ts'
export interface Pattern$CharPredicate extends Object{
    and(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
    is(arg0: number): boolean;
    negate(): (param0: number) => kotlin.Boolean;
    union(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
    union(arg0: (param0: number) => kotlin.Boolean, arg1: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
}
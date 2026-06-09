import type { Object } from '../../../java/lang/Object.d.ts'
export interface IntPredicate extends Object {
    and(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
    negate(): (param0: number) => kotlin.Boolean;
    or(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
    test(arg0: number): boolean;
}
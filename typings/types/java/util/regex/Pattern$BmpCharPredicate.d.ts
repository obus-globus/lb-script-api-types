import type { Pattern$CharPredicate } from '../../../java/util/regex/Pattern$CharPredicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Pattern$BmpCharPredicate extends Pattern$CharPredicate, Object{
    and(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
    negate(): (param0: number) => kotlin.Boolean;
    union(arg0: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
    union(arg0: (param0: number) => kotlin.Boolean, arg1: (param0: number) => kotlin.Boolean): (param0: number) => kotlin.Boolean;
}
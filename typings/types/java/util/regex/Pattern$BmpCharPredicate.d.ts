import type { Pattern$CharPredicate } from '../../../java/util/regex/Pattern$CharPredicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Pattern$BmpCharPredicate extends Pattern$CharPredicate, Object {
    and(arg0: (param0: number) => boolean): (param0: number) => boolean;
    is(arg0: number): boolean;
    negate(): (param0: number) => boolean;
    union(arg0: (param0: number) => boolean): (param0: number) => boolean;
    union(arg0: (param0: number) => boolean, arg1: (param0: number) => boolean): (param0: number) => boolean;
}
import type { Pattern$BmpCharPredicate } from '../../../java/util/regex/Pattern$BmpCharPredicate.d.ts'
import type { Pattern$CharPredicate } from '../../../java/util/regex/Pattern$CharPredicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Pattern$BitClass extends Object implements Pattern$BmpCharPredicate {
    constructor()
    // private bits: boolean[];
    add(arg0: number, arg1: number): Pattern$BitClass;
    and(arg0: (param0: number) => boolean): (param0: number) => boolean;
    is(arg0: number): boolean;
    union(arg0: (param0: number) => boolean): (param0: number) => boolean;
    union(arg0: (param0: number) => boolean, arg1: (param0: number) => boolean): (param0: number) => boolean;
}
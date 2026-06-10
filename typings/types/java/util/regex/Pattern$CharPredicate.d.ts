import type { Object } from '../../../java/lang/Object.d.ts'
export interface Pattern$CharPredicate extends Object {
    and(arg0: (param0: number) => boolean): (param0: number) => boolean;
    is(arg0: number): boolean;
    negate(): (param0: number) => boolean;
    union(arg0: (param0: number) => boolean): (param0: number) => boolean;
    union(arg0: (param0: number) => boolean, arg1: (param0: number) => boolean): (param0: number) => boolean;
}
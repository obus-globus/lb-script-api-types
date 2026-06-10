import type { Object } from '../../java/lang/Object.d.ts'
export interface CharPredicate extends Object {
    and(other: (param0: string) => boolean): (param0: string) => boolean;
    negate(): (param0: string) => boolean;
    or(other: (param0: string) => boolean): (param0: string) => boolean;
    test(value: string): boolean;
}
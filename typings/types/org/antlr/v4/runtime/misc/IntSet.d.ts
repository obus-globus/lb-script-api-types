import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IntSet extends Object{
    add(arg0: number): void;
    addAll(arg0: IntSet): IntSet;
    and(arg0: IntSet): IntSet;
    complement(arg0: IntSet): IntSet;
    contains(arg0: number): boolean;
    isNil(): boolean;
    or(arg0: IntSet): IntSet;
    remove(arg0: number): void;
    size(): number;
    subtract(arg0: IntSet): IntSet;
    toList(): number[];
}
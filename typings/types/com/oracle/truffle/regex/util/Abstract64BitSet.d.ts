import type { PrimitiveIterator$OfInt } from '../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Abstract64BitSet extends Object {
    static clear(parambs: number, paramb: number): number;
    static contains(parambs1: number, parambs2: number): boolean;
    static equals(parambs1: number, parambs2: number): boolean;
    static get(parambs: number, paramb: number): boolean;
    static hashCode(parambs: number): number;
    static intersects(parambs1: number, parambs2: number): boolean;
    static isDisjoint(parambs1: number, parambs2: number): boolean;
    static isEmpty(parambs: number): boolean;
    static isFull(parambs: number): boolean;
    static iterator(parambs: number): PrimitiveIterator$OfInt;
    static set(parambs: number, paramb: number): number;
    static size(parambs: number): number;
    constructor()
}
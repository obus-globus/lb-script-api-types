import type { PrimitiveIterator$OfInt } from '../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BitSets extends Object {
    static add(parambs: number[], paramindex: number): boolean;
    static addAll(parambs1: number[], parambs2: number[]): number;
    static clear(parambs: number[]): void;
    static clear(parambs: number[], paramindex: number): void;
    static clearRange(parambs: number[], paramlo: number, paramhi: number): void;
    static contains(parambs1: number[], parambs2: number[]): boolean;
    static createBitSetArray(paramnbits: number): number[];
    static createInverse(parambs: number[]): number[];
    static equals(parambs1: number[], parambs2: number[]): boolean;
    static get(parambs: number[], paramindex: number): boolean;
    static getRange(paramlo: number, paramhi: number): number;
    static getRangeChunk(paramchunkIndex: number, paramlo: number, paramhi: number): number;
    static hashCode(parambs: number[]): number;
    static highByte(paramc: number): number;
    static intersect(parambs1: number[], parambs2: number[]): void;
    static invert(parambs: number[]): void;
    static isDisjoint(parambs1: number[], parambs2: number[]): boolean;
    static isEmpty(parambs: number[]): boolean;
    static isFull(parambs: number[]): boolean;
    static iterator(parambs: number[]): PrimitiveIterator$OfInt;
    static lowByte(paramc: number): number;
    static remove(parambs: number[], paramindex: number): boolean;
    static removeAll(parambs1: number[], parambs2: number[]): number;
    static requiredArraySize(paramnbits: number): number;
    static retainAll(parambs1: number[], parambs2: number[]): number;
    static set(parambs: number[], paramindex: number): void;
    static setRange(parambs: number[], paramlo: number, paramhi: number): void;
    static size(parambs: number[]): number;
    static subtract(parambs1: number[], parambs2: number[]): void;
    static toBit(paramindex: number): number;
    static toString(parambs: number[]): string;
    static toString(parambs: number[]): string;
    static union(parambs1: number[], parambs2: number[]): void;
    static valuesToArray(parambs: number[]): number[];
    static wordIndex(parami: number): number;
    constructor()
}
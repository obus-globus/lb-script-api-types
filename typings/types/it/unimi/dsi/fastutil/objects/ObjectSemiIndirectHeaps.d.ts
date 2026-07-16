import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectSemiIndirectHeaps extends Object {
    static downHeap<K extends unknown>(paramarg0: K[], paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: (param0: K, param1: K) => number): number;
    static front<K extends unknown>(paramarg0: K[], paramarg1: number[], paramarg2: number, paramarg3: number[]): number;
    static front<K extends unknown>(paramarg0: K[], paramarg1: number[], paramarg2: number, paramarg3: number[], paramarg4: (param0: K, param1: K) => number): number;
    static makeHeap<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: (param0: K, param1: K) => number): number[];
    static makeHeap<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: (param0: K, param1: K) => number): void;
    static makeHeap<K extends unknown>(paramarg0: K[], paramarg1: number[], paramarg2: number, paramarg3: (param0: K, param1: K) => number): void;
    static upHeap<K extends unknown>(paramarg0: K[], paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: (param0: K, param1: K) => number): number;
    private constructor()
}
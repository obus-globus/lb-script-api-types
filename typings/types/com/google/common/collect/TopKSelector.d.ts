import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class TopKSelector<T extends Object | number | string | boolean> extends Object {
    static greatest(paramk: number): TopKSelector<Object>;
    static greatest(paramk: number, paramcomparator: (param0: Object) => boolean): TopKSelector<Object>;
    static least(paramk: number): TopKSelector<Object>;
    static least(paramk: number, paramcomparator: (param0: Object) => boolean): TopKSelector<Object>;
    private constructor(comparator: (param0: Object) => boolean, k: number)
    // private buffer: T[];
    // private bufferSize: number;
    // private comparator: (param0: Object) => boolean;
    // private k: number;
    // private threshold: T;
    combine(other: TopKSelector<T>): TopKSelector<T>;
    offer(elem: T): void;
    offerAll(elements: T[]): void;
    offerAll(elements: Iterator<T>): void;
    // private partition(left: number, right: number, pivotIndex: number): number;
    // private swap(i: number, j: number): void;
    topK(): T[];
    // private trim(): void;
}
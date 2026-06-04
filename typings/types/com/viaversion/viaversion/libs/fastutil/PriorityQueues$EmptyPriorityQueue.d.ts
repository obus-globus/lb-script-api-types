import type { PriorityQueue } from '../../../../../com/viaversion/viaversion/libs/fastutil/PriorityQueue.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PriorityQueues$EmptyPriorityQueue extends Object implements PriorityQueue<Object>, Serializable {
    constructor()
    changed(): void;
    clear(): void;
    clone(): Object;
    comparator(): (param0: Object) => kotlin.Boolean;
    dequeue(): Object;
    enqueue(arg0: Object): void;
    equals(arg0: Object | null): boolean;
    first(): Object;
    hashCode(): number;
    isEmpty(): boolean;
    last<K extends Object | number | string | boolean>(): K;
    last(): Object;
    // private readResolve(): Object;
    size(): number;
}
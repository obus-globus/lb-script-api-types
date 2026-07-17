import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ParallelMapTransform$Container<K extends unknown, U extends unknown, V extends unknown> extends Record {
    constructor(operation: (param0: K, param1: U) => V, size: number)
    // private keys: Object[];
    // private operation: (param0: K, param1: U) => V;
    // private values: Object[];
    applyOperation(index: number): void;
    copyOut(index: number, output: JavaMap<K, V>): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    // private input(index: number): U;
    // private key(index: number): K;
    keys(): Object[];
    operation(): (param0: K, param1: U) => V;
    // private output(index: number): V;
    put(index: number, key: K, input: U): void;
    size(): number;
    toString(): string;
    values(): Object[];
}
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CodepointMap$Output } from '../../../../../net/minecraft/client/gui/font/CodepointMap$Output.d.ts'
export class CodepointMap<T extends Object | number | string | boolean> extends Object {
    constructor(blockConstructor: (param0: number) => T[], blockMapConstructor: (param0: number) => T[][])
    // private blockConstructor: (param0: number) => T[];
    // private blockMap: T[][];
    // private empty: T[];
    clear(): void;
    computeIfAbsent(codepoint: number, mapper: (param0: number) => T): T;
    forEach(output: (param0: number, param1: T) => void): void;
    get(codepoint: number): T;
    keySet(): (Object | null)[];
    put(codepoint: number, value: T): T;
    remove(codepoint: number): T;
}
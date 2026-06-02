import type { JsonConvertible } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DFACaptureGroupPartialTransition$IndexOperation extends Object implements JsonConvertible {
    static groupBoundariesToJsonObject(paramarr: number[]): JsonValue;
    constructor(targetArray: number, indices: number[])
    // private indices: number[];
    readonly targetArray: number;
    equals(o: Object | null): boolean;
    getIndex(i: number): number;
    getNumberOfIndices(): number;
    getTargetArray(): number;
    hashCode(): number;
    toJson(): JsonValue;
    toString(): string;
}
import type { RegexResult } from '../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { JsonConvertible } from '../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PreCalculatedResultFactory extends Object implements JsonConvertible {
    constructor(nGroups: number, trackLastGroup: boolean)
    private constructor(nGroups: number, result: number[], length: number)
    readonly length: number;
    // private nGroups: number;
    // private result: number[];
    // private applyOffset(target: number[], offset: number): void;
    clearIndices(clearIndices: number[]): void;
    copy(): PreCalculatedResultFactory;
    createArrayFromEnd(end: number): number[];
    createFromEnd(end: number): RegexResult;
    // private createFromOffset(offset: number): RegexResult;
    createFromStart(start: number): RegexResult;
    equals(obj: Object | null): boolean;
    getEnd(groupNr: number): number;
    getLength(): number;
    getStart(groupNr: number): number;
    hashCode(): number;
    setEnd(groupNr: number, value: number): void;
    setLastGroup(lastGroup: number): void;
    setLength(length: number): void;
    setStart(groupNr: number, value: number): void;
    toJson(): JsonValue;
    updateIndices(updateIndices: number[], index: number): void;
}
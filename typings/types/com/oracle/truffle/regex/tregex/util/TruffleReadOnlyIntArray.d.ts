import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { AbstractRegexObject } from '../../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
export class TruffleReadOnlyIntArray extends AbstractRegexObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    constructor(array: number[])
    // private array: number[];
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(index: number): boolean;
    readArrayElement(index: number): number;
    toString(): string;
}
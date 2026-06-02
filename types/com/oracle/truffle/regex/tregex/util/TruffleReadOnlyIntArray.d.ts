import type { AbstractRegexObject } from '../../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TruffleReadOnlyIntArray extends AbstractRegexObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    constructor(array: number[])
    // private array: number[];
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(index: number): boolean;
    readArrayElement(index: number): number;
    toString(): string;
}
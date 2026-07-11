import type { AbstractRegexObject } from '../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
export class TruffleOrderedReadOnlyKeysArray extends AbstractRegexObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: number[] }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: number[] }): AbstractRegexObject;
    constructor(...keys: string[])
    // private keys: string[];
    contains(key: string): boolean;
    getArraySize(): number;
    hasArrayElements(): boolean;
    isArrayElementReadable(index: number): boolean;
    readArrayElement(index: number): string;
    toString(): string;
}
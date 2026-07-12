import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteOrderMark extends Object implements Serializable {
    static UTF_16BE: ByteOrderMark;
    static UTF_16LE: ByteOrderMark;
    static UTF_32BE: ByteOrderMark;
    static UTF_32LE: ByteOrderMark;
    static UTF_8: ByteOrderMark;
    static UTF_BOM: string;
    constructor(arg0: string, ...arg1: number[])
    readonly bytes: number[];
    readonly charsetName: string;
    equals(arg0: Object | null): boolean;
    get(arg0: number): number;
    getBytes(): number[];
    getCharsetName(): string;
    getRawBytes(): number[];
    hashCode(): number;
    length(): number;
    matches(arg0: number[]): boolean;
    toString(): string;
}
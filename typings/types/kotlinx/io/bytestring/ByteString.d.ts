import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
import type { ByteString$Companion } from '../../../kotlinx/io/bytestring/ByteString$Companion.d.ts'
export class ByteString extends Object implements Comparable<ByteString> {
    static Companion: ByteString$Companion;
    constructor(data: number[], startIndex: number, endIndex: number)
    // private data: number[];
    // private hashCode: number;
    readonly size: number;
    compareTo(other: ByteString): number;
    copyInto(destination: number[], destinationOffset: number, startIndex: number, endIndex: number): void;
    equals(other: Object | null): boolean;
    get(index: number): number;
    getBackingArrayReference(): number[];
    hashCode(): number;
    substring(startIndex: number, endIndex: number): ByteString;
    toByteArray(startIndex: number, endIndex: number): number[];
    toString(): string;
}
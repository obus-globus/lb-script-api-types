import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
export class ByteArrayWrapper extends Object implements Comparable<ByteArrayWrapper> {
    constructor()
    constructor(source: ByteBuffer)
    constructor(bytesToAdopt: number[], size: number)
    bytes: number[];
    size: number;
    append(src: number[], start: number, limit: number): ByteArrayWrapper;
    compareTo(other: ByteArrayWrapper): number;
    ensureCapacity(capacity: number): ByteArrayWrapper;
    equals(other: Object | null): boolean;
    hashCode(): number;
    releaseBytes(): number[];
    set(src: number[], start: number, limit: number): ByteArrayWrapper;
    toString(): string;
}
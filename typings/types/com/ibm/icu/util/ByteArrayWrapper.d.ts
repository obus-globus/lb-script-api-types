import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class ByteArrayWrapper extends Object implements Comparable<ByteArrayWrapper> {
    constructor()
    constructor(arg0: ByteBuffer)
    constructor(arg0: number[], arg1: number)
    bytes: number[];
    size: number;
    append(arg0: number[], arg1: number, arg2: number): ByteArrayWrapper;
    compareTo(arg0: ByteArrayWrapper): number;
    ensureCapacity(arg0: number): ByteArrayWrapper;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    releaseBytes(): number[];
    set(arg0: number[], arg1: number, arg2: number): ByteArrayWrapper;
    toString(): string;
}
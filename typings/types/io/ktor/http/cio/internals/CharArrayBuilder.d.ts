import type { ObjectPool } from '../../../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { IntStream } from '../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class CharArrayBuilder extends Object implements Appendable, CharSequence {
    constructor(pool?: ObjectPool<string[]>)
    // private buffers: string[][] | null;
    // private current: string[] | null;
    readonly length: number;
    getLength(): number;
    readonly pool: ObjectPool<string[]>;
    // private released: boolean;
    // private remaining: number;
    // private stringified: string | null;
    append(value: string): Appendable;
    append(value: CharSequence | null): Appendable;
    append(value: CharSequence | null, startIndex: number, endIndex: number): Appendable;
    // private appendNewArray(): string[];
    // private bufferForIndex(index: number): string[];
    chars(): IntStream;
    codePoints(): IntStream;
    // private copy(startIndex: number, endIndex: number): CharSequence;
    // private currentPosition(): number;
    equals(other: Object | null): boolean;
    get(index: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    // private getImpl(index: number): string;
    hashCode(): number;
    // private hashCodeImpl(start: number, end: number): number;
    isEmpty(): boolean;
    // private nonFullBuffer(): string[];
    // private rangeEqualsImpl(start: number, other: CharSequence, otherStart: number, length: number): boolean;
    release(): void;
    subSequence(startIndex: number, endIndex: number): CharSequence;
    // private throwSingleBuffer(index: number): void;
    toString(): string;
}
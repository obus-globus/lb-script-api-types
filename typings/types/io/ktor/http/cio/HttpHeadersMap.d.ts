import type { HeadersData } from '../../../../io/ktor/http/cio/HeadersData.d.ts'
import type { CharArrayBuilder } from '../../../../io/ktor/http/cio/internals/CharArrayBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Sequence } from '../../../../kotlin/sequences/Sequence.d.ts'
export class HttpHeadersMap extends Object {
    constructor(builder: CharArrayBuilder)
    // private builder: CharArrayBuilder;
    // private headerCapacity: number;
    // private headersData: HeadersData;
    readonly size: number;
    find(name: string, fromIndex: number): number;
    get(name: string): CharSequence | null;
    getAll(name: string): Sequence<CharSequence>;
    // private headerHasName(name: CharSequence, headerOffset: number): boolean;
    // private idxToOffset(idx: number): number;
    nameAt(idx: number): CharSequence;
    nameAtOffset(headerOffset: number): CharSequence;
    offsets(): Sequence<number>;
    put(nameStartIndex: number, nameEndIndex: number, valueStartIndex: number, valueEndIndex: number): void;
    put(nameHash: number, valueHash: number, nameStartIndex: number, nameEndIndex: number, valueStartIndex: number, valueEndIndex: number): void;
    release(): void;
    // private resize(): void;
    // private thresholdReached(): boolean;
    toString(): string;
    valueAt(idx: number): CharSequence;
    valueAtOffset(headerOffset: number): CharSequence;
}
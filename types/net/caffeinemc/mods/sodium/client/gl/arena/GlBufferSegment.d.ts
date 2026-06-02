import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlBufferArena } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/GlBufferArena.d.ts'
export class GlBufferSegment extends Object {
    constructor(arg0: GlBufferArena, arg1: number, arg2: number)
    // private arena: GlBufferArena;
    // private free: boolean;
    readonly length: number;
    // private next: GlBufferSegment;
    readonly offset: number;
    // private prev: GlBufferSegment;
    delete(): void;
    getEnd(): number;
    getLength(): number;
    getNext(): GlBufferSegment;
    getOffset(): number;
    getPrev(): GlBufferSegment;
    isFree(): boolean;
    mergeInto(arg0: GlBufferSegment): void;
    setFree(arg0: boolean): void;
    setLength(arg0: number): void;
    setNext(arg0: GlBufferSegment): void;
    setOffset(arg0: number): void;
    setPrev(arg0: GlBufferSegment): void;
}
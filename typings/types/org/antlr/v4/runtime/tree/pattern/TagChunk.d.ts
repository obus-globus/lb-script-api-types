import type { Chunk } from '../../../../../../org/antlr/v4/runtime/tree/pattern/Chunk.d.ts'
export class TagChunk extends Chunk {
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    readonly label: string;
    readonly tag: string;
    getLabel(): string;
    getTag(): string;
    toString(): string;
}
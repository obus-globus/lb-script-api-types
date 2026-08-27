import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BlockChangeRecord } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockChangeRecord.d.ts'
import type { Chunk } from '../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { IdAndData } from '../../../../../com/viaversion/viaversion/util/IdAndData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractBlockRemapper extends Object {
    constructor()
    // private replacements: JavaMap<any, any>;
    registerReplacement(arg0: IdAndData, arg1: IdAndData): void;
    registerReplacement(arg0: number, arg1: number): void;
    remapBlock(arg0: IdAndData): void;
    remapBlock(arg0: number): number;
    remapBlockChangeRecords(arg0: BlockChangeRecord[]): void;
    remapChunk(arg0: Chunk): void;
}
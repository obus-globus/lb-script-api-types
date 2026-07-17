import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { BlockConnectionStorage$SectionData } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/storage/BlockConnectionStorage$SectionData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockConnectionStorage extends Object implements StorableObject {
    static init(): void;
    constructor()
    // private blockStorage: JavaMap<any, any>;
    // private lastIndex: number;
    // private lastSection: BlockConnectionStorage$SectionData;
    // private modified: BlockPosition[];
    clear(): void;
    get(arg0: number, arg1: number, arg2: number): number;
    // private getSection(arg0: number): BlockConnectionStorage$SectionData;
    markModified(arg0: BlockPosition): void;
    onRemove(): void;
    recentlyModified(arg0: BlockPosition): boolean;
    remove(arg0: number, arg1: number, arg2: number): void;
    // private removeSection(arg0: number): void;
    store(arg0: number, arg1: number, arg2: number, arg3: number): void;
    unloadChunk(arg0: number, arg1: number): void;
    unloadSection(arg0: number, arg1: number, arg2: number): void;
}
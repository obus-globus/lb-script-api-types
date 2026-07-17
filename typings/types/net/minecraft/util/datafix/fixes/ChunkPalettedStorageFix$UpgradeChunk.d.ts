import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkPalettedStorageFix$Direction } from '../../../../../net/minecraft/util/datafix/fixes/ChunkPalettedStorageFix$Direction.d.ts'
import type { ChunkPalettedStorageFix$Section } from '../../../../../net/minecraft/util/datafix/fixes/ChunkPalettedStorageFix$Section.d.ts'
export class ChunkPalettedStorageFix$UpgradeChunk extends Object {
    static relative(parampos: number, paramdirection: ChunkPalettedStorageFix$Direction): number;
    constructor(level: Dynamic<Object>)
    // private blockEntities: JavaMap<any, any>;
    // private level: Dynamic<Object>;
    // private sections: ChunkPalettedStorageFix$Section[];
    // private sides: number;
    // private x: number;
    // private z: number;
    getBlock(pos: number): Dynamic<Object>;
    // private getBlockEntity(pos: number): Dynamic<Object>;
    // private getSection(pos: number): ChunkPalettedStorageFix$Section;
    // private removeBlockEntity(pos: number): Dynamic<Object>;
    // private setBlock(pos: number, block: Dynamic<Object>): void;
    write(): Dynamic<Object>;
}
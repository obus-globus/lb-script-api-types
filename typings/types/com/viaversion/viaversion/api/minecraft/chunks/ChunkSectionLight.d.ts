import type { NibbleArray } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/NibbleArray.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ChunkSectionLight extends Object{
    getBlockLight(): number[];
    getBlockLightNibbleArray(): NibbleArray;
    getSkyLight(): number[];
    getSkyLightNibbleArray(): NibbleArray;
    hasBlockLight(): boolean;
    hasSkyLight(): boolean;
    readBlockLight(arg0: ByteBuf): void;
    readSkyLight(arg0: ByteBuf): void;
    setBlockLight(arg0: number[]): void;
    setSkyLight(arg0: number[]): void;
    writeBlockLight(arg0: ByteBuf): void;
    writeSkyLight(arg0: ByteBuf): void;
}
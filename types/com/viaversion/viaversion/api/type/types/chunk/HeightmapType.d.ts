import type { Heightmap } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Heightmap.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class HeightmapType extends Type<Heightmap> {
    constructor()
    read(arg0: ByteBuf): Heightmap;
    write(arg0: ByteBuf, arg1: Heightmap): void;
}
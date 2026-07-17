import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BoxBlur$ColorBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/color/BoxBlur$ColorBuffer.d.ts'
import type { LevelBiomeSlice } from '../../../../../../../net/caffeinemc/mods/sodium/client/world/biome/LevelBiomeSlice.d.ts'
import type { LevelColorCache$Slice } from '../../../../../../../net/caffeinemc/mods/sodium/client/world/biome/LevelColorCache$Slice.d.ts'
import type { ChunkRenderContext } from '../../../../../../../net/caffeinemc/mods/sodium/client/world/cloned/ChunkRenderContext.d.ts'
import type { ColorResolver } from '../../../../../../../net/minecraft/world/level/ColorResolver.d.ts'
import type { Biome } from '../../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class LevelColorCache extends Object {
    constructor(arg0: LevelBiomeSlice, arg1: number)
    // private biomeData: LevelBiomeSlice;
    readonly blendRadius: number;
    // private maxBlockX: number;
    // private maxBlockY: number;
    // private maxBlockZ: number;
    // private minBlockX: number;
    // private minBlockY: number;
    // private minBlockZ: number;
    // private populateStamp: number;
    // private sizeXZ: number;
    // private sizeY: number;
    // private slices: JavaMap<(param0: Biome, param1: number, param2: number) => number, LevelColorCache$Slice[]>;
    // private tempColorBuffer: BoxBlur$ColorBuffer;
    getBlendRadius(): number;
    getColor(arg0: (param0: Biome, param1: number, param2: number) => number, arg1: number, arg2: number, arg3: number): number;
    // private initializeSlices(arg0: (param0: Biome, param1: number, param2: number) => number): void;
    update(arg0: ChunkRenderContext): void;
    // private updateColorBuffers(arg0: number, arg1: (param0: Biome, param1: number, param2: number) => number, arg2: LevelColorCache$Slice): void;
}
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LightDataAccess } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/data/LightDataAccess.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export class AoFaceData extends Object {
    constructor()
    ao: number[];
    bl: number[];
    // private flags: number;
    lm: number[];
    sl: number[];
    getBlendedBlockLight(arg0: number[]): number;
    getBlendedShade(arg0: number[]): number;
    getBlendedSkyLight(arg0: number[]): number;
    hasLightData(): boolean;
    hasUnpackedLightData(): boolean;
    initLightData(arg0: LightDataAccess, arg1: BlockPos, arg2: Direction, arg3: boolean): void;
    reset(): void;
    unpackLightData(): void;
}
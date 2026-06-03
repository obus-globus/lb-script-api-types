import type { LightDataAccess } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/light/data/LightDataAccess.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export class SingleBlockLightDataCache extends LightDataAccess {
    static getEmissiveLightmap(paramarg0: number): number;
    static getLightmap(paramarg0: number): number;
    static packAO(paramarg0: number): number;
    static packBL(paramarg0: number): number;
    static packEM(paramarg0: boolean): number;
    static packFC(paramarg0: boolean): number;
    static packFO(paramarg0: boolean): number;
    static packLU(paramarg0: number): number;
    static packOP(paramarg0: boolean): number;
    static packSL(paramarg0: number): number;
    static unpackAO(paramarg0: number): number;
    static unpackBL(paramarg0: number): number;
    static unpackEM(paramarg0: number): boolean;
    static unpackFC(paramarg0: number): boolean;
    static unpackFO(paramarg0: number): boolean;
    static unpackLU(paramarg0: number): number;
    static unpackOP(paramarg0: number): boolean;
    static unpackSL(paramarg0: number): number;
    constructor()
    // private light: number[];
    // private xOffset: number;
    // private yOffset: number;
    // private zOffset: number;
    get(arg0: number, arg1: number, arg2: number): number;
    get(arg0: number, arg1: number, arg2: number, arg3: Direction): number;
    get(arg0: number, arg1: number, arg2: number, arg3: Direction, arg4: Direction): number;
    get(arg0: BlockPos): number;
    get(arg0: BlockPos, arg1: Direction): number;
    // private index(arg0: number, arg1: number, arg2: number): number;
    release(): void;
    reset(arg0: BlockPos, arg1: BlockAndTintGetter): void;
}
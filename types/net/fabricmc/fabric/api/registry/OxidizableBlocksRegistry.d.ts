import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { WeatheringCopperBlocks } from '../../../../../net/minecraft/world/level/block/WeatheringCopperBlocks.d.ts'
export class OxidizableBlocksRegistry extends Object {
    static registerNextStage(paramarg0: Block, paramarg1: Block): void;
    static registerWaxable(paramarg0: Block, paramarg1: Block): void;
    static registerWeatheringCopperBlocks(paramarg0: WeatheringCopperBlocks): void;
    private constructor()
}
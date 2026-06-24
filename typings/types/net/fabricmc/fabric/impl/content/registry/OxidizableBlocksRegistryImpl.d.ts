import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { WeatheringCopperCollection } from '../../../../../../net/minecraft/world/level/block/WeatheringCopperCollection.d.ts'
export class OxidizableBlocksRegistryImpl extends Object {
    static registerNextStage(paramarg0: Block, paramarg1: Block): void;
    static registerWaxable(paramarg0: Block, paramarg1: Block): void;
    static registerWeatheringCopperBlocks(paramarg0: WeatheringCopperCollection<Block>): void;
    private constructor()
}
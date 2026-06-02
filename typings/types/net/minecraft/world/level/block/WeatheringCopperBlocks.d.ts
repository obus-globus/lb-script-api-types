import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { WeatheringCopper$WeatherState } from '../../../../../net/minecraft/world/level/block/WeatheringCopper$WeatherState.d.ts'
import type { BlockBehaviour$Properties } from '../../../../../net/minecraft/world/level/block/state/BlockBehaviour$Properties.d.ts'
import type { TriFunction } from '../../../../../org/apache/commons/lang3/function/TriFunction.d.ts'
export class WeatheringCopperBlocks extends Record {
    static create(paramid: string, paramregister: (param0: string, param1: Object | null, param2: BlockBehaviour$Properties) => Block, paramwaxedBlockFactory: (param0: BlockBehaviour$Properties) => Object | null, paramweatheringFactory: (param0: WeatheringCopper$WeatherState, param1: BlockBehaviour$Properties) => Object | null, parampropertiesSupplier: (param0: WeatheringCopper$WeatherState) => BlockBehaviour$Properties): WeatheringCopperBlocks;
    constructor(unaffected: Block, exposed: Block, weathered: Block, oxidized: Block, waxed: Block, waxedExposed: Block, waxedWeathered: Block, waxedOxidized: Block)
    // private exposed: Block;
    // private oxidized: Block;
    // private unaffected: Block;
    // private waxed: Block;
    // private waxedExposed: Block;
    // private waxedOxidized: Block;
    // private waxedWeathered: Block;
    // private weathered: Block;
    asList(): Block[];
    equals(o: Object | null): boolean;
    exposed(): Block;
    forEach(consumer: (param0: Block) => void): void;
    hashCode(): number;
    oxidized(): Block;
    toString(): string;
    unaffected(): Block;
    waxed(): Block;
    waxedExposed(): Block;
    waxedMapping(): Map<Block, Block>;
    waxedOxidized(): Block;
    waxedWeathered(): Block;
    weathered(): Block;
    weatheringMapping(): Map<Block, Block>;
}
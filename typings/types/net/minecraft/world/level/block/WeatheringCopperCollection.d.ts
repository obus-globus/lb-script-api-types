import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockFamily } from '../../../../../net/minecraft/data/BlockFamily.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { WeatheringCopper$WeatherState } from '../../../../../net/minecraft/world/level/block/WeatheringCopper$WeatherState.d.ts'
import type { WeatheringCopperCollection$ByState } from '../../../../../net/minecraft/world/level/block/WeatheringCopperCollection$ByState.d.ts'
import type { BlockBehaviour$Properties } from '../../../../../net/minecraft/world/level/block/state/BlockBehaviour$Properties.d.ts'
import type { TriFunction } from '../../../../../org/apache/commons/lang3/function/TriFunction.d.ts'
export class WeatheringCopperCollection<T extends unknown> extends Record {
    static PREFIXES: WeatheringCopperCollection<string>;
    static STATES: WeatheringCopperCollection$ByState<WeatheringCopper$WeatherState>;
    static create(paramname: string): WeatheringCopperCollection<string>;
    static createFamily(paramwaxedProvider: (param0: string, param1: WeatheringCopper$WeatherState) => BlockFamily, paramweatheringProvider: (param0: string, param1: WeatheringCopper$WeatherState) => BlockFamily): WeatheringCopperCollection<BlockFamily>;
    static prefixWithState(paramids: WeatheringCopperCollection<string>): WeatheringCopperCollection<string>;
    static registerBlocks(paramids: WeatheringCopperCollection<Object>, paramregister: (param0: Object | null, param1: (param0: BlockBehaviour$Properties) => Block, param2: BlockBehaviour$Properties) => Block, paramwaxedBlockFactory: (param0: WeatheringCopper$WeatherState, param1: BlockBehaviour$Properties) => Block | null, paramweatheringFactory: (param0: WeatheringCopper$WeatherState, param1: BlockBehaviour$Properties) => Block | null, parampropertiesSupplier: (param0: WeatheringCopper$WeatherState) => BlockBehaviour$Properties): WeatheringCopperCollection<Block>;
    static registerItems(paramids: WeatheringCopperCollection<Object>, paramblocks: WeatheringCopperCollection<Block>, paramitemFactory: (param0: Object | null, param1: Block) => Item): WeatheringCopperCollection<Item>;
    static same(parambyState: WeatheringCopperCollection$ByState<string>): WeatheringCopperCollection<string>;
    static zipApply(paramfirst: WeatheringCopperCollection$ByState<Object>, paramsecond: WeatheringCopperCollection$ByState<Object>, paramconsumer: (param0: Object | null, param1: Object | null) => void): void;
    static zipApply(paramfirst: WeatheringCopperCollection<Object>, paramsecond: WeatheringCopperCollection<Object>, paramconsumer: (param0: Object | null, param1: Object | null) => void): void;
    static zipMap(paramfirst: WeatheringCopperCollection$ByState<Object>, paramsecond: WeatheringCopperCollection$ByState<Object>, paramoperation: (param0: Object | null, param1: Object | null) => Object | null): WeatheringCopperCollection$ByState<Object>;
    static zipMap(paramfirst: WeatheringCopperCollection<Object>, paramsecond: WeatheringCopperCollection<Object>, paramoperation: (param0: Object | null, param1: Object | null) => Object | null): WeatheringCopperCollection<Object>;
    constructor(weathering: WeatheringCopperCollection$ByState<T>, waxed: WeatheringCopperCollection$ByState<T>)
    // private waxed: WeatheringCopperCollection$ByState<T>;
    // private weathering: WeatheringCopperCollection$ByState<T>;
    apply<U extends unknown>(mapper: (param0: WeatheringCopperCollection$ByState<T>) => WeatheringCopperCollection$ByState<U>): WeatheringCopperCollection<U>;
    apply<U extends unknown>(weatheringMapper: (param0: WeatheringCopperCollection$ByState<T>) => WeatheringCopperCollection$ByState<U>, waxedMapper: (param0: WeatheringCopperCollection$ByState<T>) => WeatheringCopperCollection$ByState<U>): WeatheringCopperCollection<U>;
    asList(): T[];
    equals(o: Object | null): boolean;
    forEach(consumer: (param0: T) => void): void;
    hashCode(): number;
    map<U extends unknown>(mapper: (param0: T) => U): WeatheringCopperCollection<U>;
    toString(): string;
    waxed(): WeatheringCopperCollection$ByState<T>;
    weathering(): WeatheringCopperCollection$ByState<T>;
    zipUnwaxedWaxed(consumer: (param0: T, param1: T) => void): void;
}
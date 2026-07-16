import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DyeColor } from '../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockBehaviour$Properties } from '../../../../../net/minecraft/world/level/block/state/BlockBehaviour$Properties.d.ts'
import type { TriFunction } from '../../../../../org/apache/commons/lang3/function/TriFunction.d.ts'
export class ColorCollection<T extends unknown> extends Record {
    static NAMES: ColorCollection<string>;
    static VALUES: ColorCollection<DyeColor>;
    static create<T extends unknown>(paramvalue: T): ColorCollection<T>;
    static prefixWithColor(paramids: ColorCollection<string>): ColorCollection<string>;
    static registerBlockItems<Id extends unknown>(paramids: ColorCollection<Id>, paramblocks: ColorCollection<Block>, paramitemFactory: (param0: Id, param1: Block, param2: DyeColor) => Item): ColorCollection<Item>;
    static registerBlocks<B extends Block, Id extends unknown>(paramids: ColorCollection<Id>, paramregister: (param0: Id, param1: (param0: BlockBehaviour$Properties) => Block, param2: BlockBehaviour$Properties) => Block, paramcolorBlockFactory: (param0: DyeColor, param1: BlockBehaviour$Properties) => B, parampropertiesSupplier: (param0: DyeColor) => BlockBehaviour$Properties): ColorCollection<Block>;
    static registerItems<Id extends unknown>(paramids: ColorCollection<Id>, paramitemFactory: (param0: Id, param1: DyeColor) => Item): ColorCollection<Item>;
    static zipApply<T extends unknown, U extends unknown>(paramfirst: ColorCollection<T>, paramsecond: ColorCollection<U>, paramconsumer: (param0: T, param1: U) => void): void;
    static zipMap<T extends unknown, U extends unknown, R extends unknown>(paramfirst: ColorCollection<T>, paramsecond: ColorCollection<U>, paramoperation: (param0: T, param1: U) => R): ColorCollection<R>;
    constructor(white: T, orange: T, magenta: T, lightBlue: T, yellow: T, lime: T, pink: T, gray: T, lightGray: T, cyan: T, purple: T, blue: T, brown: T, green: T, red: T, black: T)
    // private black: T;
    // private blue: T;
    // private brown: T;
    // private cyan: T;
    // private gray: T;
    // private green: T;
    // private lightBlue: T;
    // private lightGray: T;
    // private lime: T;
    // private magenta: T;
    // private orange: T;
    // private pink: T;
    // private purple: T;
    // private red: T;
    // private white: T;
    // private yellow: T;
    asList(): T[];
    black(): T;
    blue(): T;
    brown(): T;
    cyan(): T;
    equals(o: Object | null): boolean;
    forEach(consumer: (param0: T) => void): void;
    gray(): T;
    green(): T;
    hashCode(): number;
    lightBlue(): T;
    lightGray(): T;
    lime(): T;
    magenta(): T;
    map<U extends unknown>(mapper: (param0: T) => U): ColorCollection<U>;
    orange(): T;
    pick(dyeColor: DyeColor): T;
    pink(): T;
    purple(): T;
    red(): T;
    toString(): string;
    white(): T;
    yellow(): T;
}
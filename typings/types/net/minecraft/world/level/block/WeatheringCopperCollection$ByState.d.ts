import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WeatheringCopper$WeatherState } from '../../../../../net/minecraft/world/level/block/WeatheringCopper$WeatherState.d.ts'
export class WeatheringCopperCollection$ByState<T extends unknown> extends Record {
    static create<T extends unknown>(paramvalue: T): WeatheringCopperCollection$ByState<T>;
    constructor(unaffected: T, exposed: T, weathered: T, oxidized: T)
    // private exposed: T;
    // private oxidized: T;
    // private unaffected: T;
    // private weathered: T;
    equals(o: Object | null): boolean;
    exposed(): T;
    forEach(consumer: (param0: T) => void): void;
    hashCode(): number;
    map<U extends unknown>(mapper: (param0: T) => U): WeatheringCopperCollection$ByState<U>;
    oxidized(): T;
    pick(state: WeatheringCopper$WeatherState): T;
    progressMapping(consumer: (param0: T, param1: T) => void): void;
    toString(): string;
    unaffected(): T;
    weathered(): T;
}
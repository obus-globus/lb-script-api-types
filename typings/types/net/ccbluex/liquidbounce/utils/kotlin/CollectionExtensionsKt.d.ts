import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ColorCollection } from '../../../../../net/minecraft/world/level/block/ColorCollection.d.ts'
import type { WeatheringCopperCollection } from '../../../../../net/minecraft/world/level/block/WeatheringCopperCollection.d.ts'
import type { WeatheringCopperCollection$ByState } from '../../../../../net/minecraft/world/level/block/WeatheringCopperCollection$ByState.d.ts'
export class CollectionExtensionsKt extends Object {
    static addAll<T extends unknown>(self: T[], other: ColorCollection<T>): void;
    static addAll<T extends unknown>(self: T[], other: WeatheringCopperCollection<T>): void;
    static contains<T extends unknown>(self: ColorCollection<T>, e: T): boolean;
    static contains<T extends unknown>(self: WeatheringCopperCollection$ByState<T>, e: T): boolean;
    static contains<T extends unknown>(self: WeatheringCopperCollection<T>, e: T): boolean;
    static matchesAll<T extends unknown>(self: (param0: T) => boolean[], t: T): boolean;
    static matchesAny<T extends unknown>(self: (param0: T) => boolean[], t: T): boolean;
    static toOrderedSet<E extends unknown>(self: E[]): E[];
    static unmodifiable<T extends unknown>(self: T[] | null): T[];
}
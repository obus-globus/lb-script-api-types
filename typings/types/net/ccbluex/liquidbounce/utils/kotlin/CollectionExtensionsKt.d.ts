import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ColorCollection } from '../../../../../net/minecraft/world/level/block/ColorCollection.d.ts'
import type { WeatheringCopperCollection } from '../../../../../net/minecraft/world/level/block/WeatheringCopperCollection.d.ts'
import type { WeatheringCopperCollection$ByState } from '../../../../../net/minecraft/world/level/block/WeatheringCopperCollection$ByState.d.ts'
export class CollectionExtensionsKt extends Object {
    static addAll(paramarg0: (Object | null)[], paramarg1: ColorCollection<Object>): void;
    static addAll(paramarg0: (Object | null)[], paramarg1: WeatheringCopperCollection<Object>): void;
    static contains(paramarg0: ColorCollection<Object>, paramarg1: Object | null): boolean;
    static contains(paramarg0: WeatheringCopperCollection$ByState<Object>, paramarg1: Object | null): boolean;
    static contains(paramarg0: WeatheringCopperCollection<Object>, paramarg1: Object | null): boolean;
    static matchesAll(iterable: (param0: Object | null) => boolean[], t: Object | null): boolean;
    static matchesAny(iterable: (param0: Object | null) => boolean[], t: Object | null): boolean;
    static toOrderedSet(collection: (Object | null)[]): (Object | null)[];
    static unmodifiable(paramarg0: (Object | null)[]): (Object | null)[];
}
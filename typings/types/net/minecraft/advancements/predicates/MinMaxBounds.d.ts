import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
import type { MinMaxBounds$Bounds } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Bounds.d.ts'
export interface MinMaxBounds<T extends Number & Comparable<T>> extends Object{
    bounds(): MinMaxBounds$Bounds<T>;
    isAny(): boolean;
    max(): Optional<T>;
    min(): Optional<T>;
}
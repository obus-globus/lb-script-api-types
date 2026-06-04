import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { OptionalInt } from '../../../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { IntRange$IntChecker } from '../../../../../../net/minecraft/world/level/storage/loot/IntRange$IntChecker.d.ts'
import type { IntRange$IntLimiter } from '../../../../../../net/minecraft/world/level/storage/loot/IntRange$IntLimiter.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextUser } from '../../../../../../net/minecraft/world/level/storage/loot/LootContextUser.d.ts'
import type { ValidationContext } from '../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { NumberProvider } from '../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class IntRange extends Object implements LootContextUser {
    static CODEC: Codec<IntRange>;
    static exact(paramvalue: number): IntRange;
    static lowerBound(paramvalue: number): IntRange;
    static range(parammin: number, parammax: number): IntRange;
    static upperBound(paramvalue: number): IntRange;
    private constructor(min: Optional<NumberProvider>, max: Optional<NumberProvider>)
    private constructor(min: NumberProvider, max: NumberProvider)
    // private limiter: (param0: LootContext, param1: number) => kotlin.Int;
    // private max: NumberProvider;
    // private min: NumberProvider;
    // private predicate: (param0: LootContext, param1: number) => kotlin.Boolean;
    clamp(context: LootContext, value: number): number;
    getReferencedContextParams(): ContextKey<Object>[];
    test(context: LootContext, value: number): boolean;
    // private unpackExact(): OptionalInt;
    validate(context: ValidationContext): void;
}
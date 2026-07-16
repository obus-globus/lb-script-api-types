import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientAsset$ResourceTexture } from '../../../../../../net/minecraft/core/ClientAsset$ResourceTexture.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ChickenVariant$ModelType } from '../../../../../../net/minecraft/world/entity/animal/chicken/ChickenVariant$ModelType.d.ts'
import type { ModelAndTexture } from '../../../../../../net/minecraft/world/entity/variant/ModelAndTexture.d.ts'
import type { PriorityProvider } from '../../../../../../net/minecraft/world/entity/variant/PriorityProvider.d.ts'
import type { PriorityProvider$Selector } from '../../../../../../net/minecraft/world/entity/variant/PriorityProvider$Selector.d.ts'
import type { PriorityProvider$SelectorCondition } from '../../../../../../net/minecraft/world/entity/variant/PriorityProvider$SelectorCondition.d.ts'
import type { SpawnCondition } from '../../../../../../net/minecraft/world/entity/variant/SpawnCondition.d.ts'
import type { SpawnContext } from '../../../../../../net/minecraft/world/entity/variant/SpawnContext.d.ts'
import type { SpawnPrioritySelectors } from '../../../../../../net/minecraft/world/entity/variant/SpawnPrioritySelectors.d.ts'
export class ChickenVariant extends Record implements PriorityProvider<SpawnContext, SpawnCondition> {
    static CODEC: Codec<Holder<ChickenVariant>>;
    static DIRECT_CODEC: Codec<ChickenVariant>;
    static NETWORK_CODEC: Codec<ChickenVariant>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<ChickenVariant>>;
    static alwaysTrue<Context extends unknown, Condition extends PriorityProvider$SelectorCondition<Context>>(parampriority: number): PriorityProvider$Selector<Context, Condition>[];
    static pick<C extends unknown, T extends unknown>(paramentries: Stream<T>, paramextractor: (param0: T) => PriorityProvider<C, any>, paramrandomSource: RandomSource, paramcontext: C): Optional<T>;
    static select<C extends unknown, T extends unknown>(paramentries: Stream<T>, paramextractor: (param0: T) => PriorityProvider<C, any>, paramcontext: C): Stream<T>;
    static single<Context extends unknown, Condition extends PriorityProvider$SelectorCondition<Context>>(paramcheck: Condition, parampriority: number): PriorityProvider$Selector<Context, Condition>[];
    constructor(modelAndTexture: ModelAndTexture<ChickenVariant$ModelType>, babyTexture: ClientAsset$ResourceTexture, spawnConditions: SpawnPrioritySelectors)
    // private babyTexture: ClientAsset$ResourceTexture;
    // private modelAndTexture: ModelAndTexture<ChickenVariant$ModelType>;
    // private spawnConditions: SpawnPrioritySelectors;
    babyTexture(): ClientAsset$ResourceTexture;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modelAndTexture(): ModelAndTexture<ChickenVariant$ModelType>;
    selectors(): PriorityProvider$Selector<SpawnContext, SpawnCondition>[];
    spawnConditions(): SpawnPrioritySelectors;
    toString(): string;
}
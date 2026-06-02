import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ZombieNautilusVariant$ModelType } from '../../../../../../net/minecraft/world/entity/animal/nautilus/ZombieNautilusVariant$ModelType.d.ts'
import type { ModelAndTexture } from '../../../../../../net/minecraft/world/entity/variant/ModelAndTexture.d.ts'
import type { PriorityProvider } from '../../../../../../net/minecraft/world/entity/variant/PriorityProvider.d.ts'
import type { PriorityProvider$Selector } from '../../../../../../net/minecraft/world/entity/variant/PriorityProvider$Selector.d.ts'
import type { SpawnCondition } from '../../../../../../net/minecraft/world/entity/variant/SpawnCondition.d.ts'
import type { SpawnContext } from '../../../../../../net/minecraft/world/entity/variant/SpawnContext.d.ts'
import type { SpawnPrioritySelectors } from '../../../../../../net/minecraft/world/entity/variant/SpawnPrioritySelectors.d.ts'
export class ZombieNautilusVariant extends Record implements PriorityProvider<SpawnContext, SpawnCondition> {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<ZombieNautilusVariant>;
    static NETWORK_CODEC: Codec<ZombieNautilusVariant>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static alwaysTrue(parampriority: number): (Object | null)[];
    static pick(paramentries: Stream<Object>, paramextractor: (param0: Object | null) => Object | null, paramrandomSource: RandomSource, paramcontext: Object | null): Optional<Object>;
    static select(paramentries: Stream<Object>, paramextractor: (param0: Object | null) => Object | null, paramcontext: Object | null): Stream<Object>;
    static single(paramcheck: Object | null, parampriority: number): (Object | null)[];
    private constructor(assetInfo: ModelAndTexture<ZombieNautilusVariant$ModelType>)
    constructor(modelAndTexture: ModelAndTexture<ZombieNautilusVariant$ModelType>, spawnConditions: SpawnPrioritySelectors)
    // private modelAndTexture: ModelAndTexture<ZombieNautilusVariant$ModelType>;
    // private spawnConditions: SpawnPrioritySelectors;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modelAndTexture(): ModelAndTexture<ZombieNautilusVariant$ModelType>;
    selectors(): PriorityProvider$Selector<SpawnContext, SpawnCondition>[];
    spawnConditions(): SpawnPrioritySelectors;
    toString(): string;
}
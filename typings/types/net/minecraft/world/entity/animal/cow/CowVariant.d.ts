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
import type { CowVariant$ModelType } from '../../../../../../net/minecraft/world/entity/animal/cow/CowVariant$ModelType.d.ts'
import type { ModelAndTexture } from '../../../../../../net/minecraft/world/entity/variant/ModelAndTexture.d.ts'
import type { PriorityProvider } from '../../../../../../net/minecraft/world/entity/variant/PriorityProvider.d.ts'
import type { PriorityProvider$Selector } from '../../../../../../net/minecraft/world/entity/variant/PriorityProvider$Selector.d.ts'
import type { SpawnCondition } from '../../../../../../net/minecraft/world/entity/variant/SpawnCondition.d.ts'
import type { SpawnContext } from '../../../../../../net/minecraft/world/entity/variant/SpawnContext.d.ts'
import type { SpawnPrioritySelectors } from '../../../../../../net/minecraft/world/entity/variant/SpawnPrioritySelectors.d.ts'
export class CowVariant extends Record implements PriorityProvider<SpawnContext, SpawnCondition> {
    static CODEC: Codec<Holder<CowVariant>>;
    static DIRECT_CODEC: Codec<CowVariant>;
    static NETWORK_CODEC: Codec<CowVariant>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<CowVariant>>;
    static alwaysTrue(parampriority: number): PriorityProvider$Selector<Object, any>[];
    static pick(paramentries: Stream<Object>, paramextractor: (param0: Object | null) => PriorityProvider<Object, any>, paramrandomSource: RandomSource, paramcontext: Object | null): Optional<Object>;
    static select(paramentries: Stream<Object>, paramextractor: (param0: Object | null) => PriorityProvider<Object, any>, paramcontext: Object | null): Stream<Object>;
    static single(paramcheck: Object | null, parampriority: number): PriorityProvider$Selector<Object, any>[];
    private constructor(assetInfo: ModelAndTexture<CowVariant$ModelType>, babyTexture: ClientAsset$ResourceTexture)
    constructor(modelAndTexture: ModelAndTexture<CowVariant$ModelType>, babyTexture: ClientAsset$ResourceTexture, spawnConditions: SpawnPrioritySelectors)
    // private babyTexture: ClientAsset$ResourceTexture;
    // private modelAndTexture: ModelAndTexture<CowVariant$ModelType>;
    // private spawnConditions: SpawnPrioritySelectors;
    babyTexture(): ClientAsset$ResourceTexture;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modelAndTexture(): ModelAndTexture<CowVariant$ModelType>;
    selectors(): PriorityProvider$Selector<SpawnContext, SpawnCondition>[];
    spawnConditions(): SpawnPrioritySelectors;
    toString(): string;
}
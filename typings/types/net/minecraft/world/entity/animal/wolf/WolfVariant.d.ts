import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WolfVariant$AssetInfo } from '../../../../../../net/minecraft/world/entity/animal/wolf/WolfVariant$AssetInfo.d.ts'
import type { PriorityProvider } from '../../../../../../net/minecraft/world/entity/variant/PriorityProvider.d.ts'
import type { PriorityProvider$Selector } from '../../../../../../net/minecraft/world/entity/variant/PriorityProvider$Selector.d.ts'
import type { SpawnCondition } from '../../../../../../net/minecraft/world/entity/variant/SpawnCondition.d.ts'
import type { SpawnContext } from '../../../../../../net/minecraft/world/entity/variant/SpawnContext.d.ts'
import type { SpawnPrioritySelectors } from '../../../../../../net/minecraft/world/entity/variant/SpawnPrioritySelectors.d.ts'
export class WolfVariant extends Record implements PriorityProvider<SpawnContext, SpawnCondition> {
    static CODEC: Codec<Holder<WolfVariant>>;
    static DIRECT_CODEC: Codec<WolfVariant>;
    static NETWORK_CODEC: Codec<WolfVariant>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<WolfVariant>>;
    static alwaysTrue(parampriority: number): PriorityProvider$Selector<Object, any>[];
    static pick(paramentries: Stream<Object>, paramextractor: (param0: Object | null) => PriorityProvider<Object, any>, paramrandomSource: RandomSource, paramcontext: Object | null): Optional<Object>;
    static select(paramentries: Stream<Object>, paramextractor: (param0: Object | null) => PriorityProvider<Object, any>, paramcontext: Object | null): Stream<Object>;
    static single(paramcheck: Object | null, parampriority: number): PriorityProvider$Selector<Object, any>[];
    private constructor(adultInfo: WolfVariant$AssetInfo, babyInfo: WolfVariant$AssetInfo)
    constructor(adultInfo: WolfVariant$AssetInfo, babyInfo: WolfVariant$AssetInfo, spawnConditions: SpawnPrioritySelectors)
    // private adultInfo: WolfVariant$AssetInfo;
    // private babyInfo: WolfVariant$AssetInfo;
    // private spawnConditions: SpawnPrioritySelectors;
    adultInfo(): WolfVariant$AssetInfo;
    babyInfo(): WolfVariant$AssetInfo;
    equals(o: Object | null): boolean;
    hashCode(): number;
    selectors(): PriorityProvider$Selector<SpawnContext, SpawnCondition>[];
    spawnConditions(): SpawnPrioritySelectors;
    toString(): string;
}
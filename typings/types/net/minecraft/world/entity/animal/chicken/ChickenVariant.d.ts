import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientAsset$ResourceTexture } from '../../../../../../net/minecraft/core/ClientAsset$ResourceTexture.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ChickenVariant$ModelType } from '../../../../../../net/minecraft/world/entity/animal/chicken/ChickenVariant$ModelType.d.ts'
import type { ModelAndTexture } from '../../../../../../net/minecraft/world/entity/variant/ModelAndTexture.d.ts'
import type { PriorityProvider } from '../../../../../../net/minecraft/world/entity/variant/PriorityProvider.d.ts'
import type { PriorityProvider$Selector } from '../../../../../../net/minecraft/world/entity/variant/PriorityProvider$Selector.d.ts'
import type { SpawnCondition } from '../../../../../../net/minecraft/world/entity/variant/SpawnCondition.d.ts'
import type { SpawnContext } from '../../../../../../net/minecraft/world/entity/variant/SpawnContext.d.ts'
import type { SpawnPrioritySelectors } from '../../../../../../net/minecraft/world/entity/variant/SpawnPrioritySelectors.d.ts'
export class ChickenVariant extends Record implements PriorityProvider<SpawnContext, SpawnCondition> {
    static CODEC: Codec<Holder<ChickenVariant>>;
    static DIRECT_CODEC: Codec<ChickenVariant>;
    static NETWORK_CODEC: Codec<ChickenVariant>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<ChickenVariant>>;
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
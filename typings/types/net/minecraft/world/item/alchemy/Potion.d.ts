import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MobEffectInstance } from '../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { FeatureElement } from '../../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { FeatureFlag } from '../../../../../net/minecraft/world/flag/FeatureFlag.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export class Potion extends Object implements FeatureElement {
    static CODEC: Codec<Holder<Potion>>;
    static FILTERED_REGISTRIES: ResourceKey<FeatureElement[]>[];
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<Potion>>;
    constructor(name: string, effects: MobEffectInstance[])
    readonly effects: MobEffectInstance[];
    // private name: string;
    // private requiredFeatures: FeatureFlagSet;
    getEffects(): MobEffectInstance[];
    hasInstantEffects(): boolean;
    isEnabled(enabledFeatures: FeatureFlagSet): boolean;
    name(): string;
    requiredFeatures(): FeatureFlagSet;
    requiredFeatures(flags: FeatureFlag[]): Potion;
}
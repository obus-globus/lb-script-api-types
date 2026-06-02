import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LayeredRegistryAccess } from '../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { RegistryAccess } from '../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RegistryLayer } from '../../../net/minecraft/server/RegistryLayer.d.ts'
import type { KnownPack } from '../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
export class RegistrySynchronization extends Object {
    static NETWORKABLE_REGISTRIES: (Object | null)[];
    static isNetworkable(paramkey: ResourceKey<Object>): boolean;
    static networkSafeRegistries(paramregistries: LayeredRegistryAccess<RegistryLayer>): Stream<Object>;
    static networkedRegistries(paramregistries: LayeredRegistryAccess<RegistryLayer>): Stream<Object>;
    static packRegistries(paramops: DynamicOps<Tag>, paramregistries: RegistryAccess, paramclientKnownPacks: KnownPack[], paramoutput: (param0: Object | null, param1: Object | null) => void): void;
    constructor()
}
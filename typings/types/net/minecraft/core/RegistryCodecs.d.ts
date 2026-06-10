import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistryCodecs extends Object {
    static homogeneousList(paramregistryKey: ResourceKey<(Object | null)[]>): Codec<Holder<Object>[]>;
    static homogeneousList(paramregistryKey: ResourceKey<(Object | null)[]>, paramalwaysUseList: boolean): Codec<Holder<Object>[]>;
    static homogeneousList(paramregistryKey: ResourceKey<(Object | null)[]>, paramelementCodec: Codec<Object>): Codec<Holder<Object>[]>;
    static homogeneousList(paramregistryKey: ResourceKey<(Object | null)[]>, paramelementCodec: Codec<Object>, paramalwaysUseList: boolean): Codec<Holder<Object>[]>;
    constructor()
}
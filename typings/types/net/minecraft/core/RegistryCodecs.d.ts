import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistryCodecs extends Object {
    static homogeneousList(paramregistryKey: ResourceKey<Object>): Codec<Object>;
    static homogeneousList(paramregistryKey: ResourceKey<Object>, paramalwaysUseList: boolean): Codec<Object>;
    static homogeneousList(paramregistryKey: ResourceKey<Object>, paramelementCodec: Codec<Object>): Codec<Object>;
    static homogeneousList(paramregistryKey: ResourceKey<Object>, paramelementCodec: Codec<Object>, paramalwaysUseList: boolean): Codec<Object>;
    constructor()
}
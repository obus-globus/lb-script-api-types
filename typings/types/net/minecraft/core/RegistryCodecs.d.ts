import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistryCodecs extends Object {
    static homogeneousList<E extends unknown>(paramregistryKey: ResourceKey<E[]>): Codec<Holder<E>[]>;
    static homogeneousList<E extends unknown>(paramregistryKey: ResourceKey<E[]>, paramalwaysUseList: boolean): Codec<Holder<E>[]>;
    static homogeneousList<E extends unknown>(paramregistryKey: ResourceKey<E[]>, paramelementCodec: Codec<E>): Codec<Holder<E>[]>;
    static homogeneousList<E extends unknown>(paramregistryKey: ResourceKey<E[]>, paramelementCodec: Codec<E>, paramalwaysUseList: boolean): Codec<Holder<E>[]>;
    constructor()
}
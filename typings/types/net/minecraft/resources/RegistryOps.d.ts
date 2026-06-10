import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { RecordCodecBuilder } from '../../../com/mojang/serialization/codecs/RecordCodecBuilder.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistryOpsAccessor } from '../../../net/fabricmc/fabric/mixin/resource/conditions/RegistryOpsAccessor.d.ts'
import type { Holder$Reference } from '../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderGetter } from '../../../net/minecraft/core/HolderGetter.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { HolderOwner } from '../../../net/minecraft/core/HolderOwner.d.ts'
import type { DelegatingOps } from '../../../net/minecraft/resources/DelegatingOps.d.ts'
import type { RegistryOps$RegistryInfoLookup } from '../../../net/minecraft/resources/RegistryOps$RegistryInfoLookup.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistryOps<T extends Object | number | string | boolean> extends DelegatingOps<T> implements RegistryOpsAccessor {
    static create(paramparent: DynamicOps<Object>, paramlookupProvider: HolderLookup$Provider): RegistryOps<Object>;
    static create(paramparent: DynamicOps<Object>, paramlookupProvider: RegistryOps$RegistryInfoLookup): RegistryOps<Object>;
    static injectRegistryContext(paramdynamic: Dynamic<Object>, paramlookupProvider: HolderLookup$Provider): Dynamic<Object>;
    static retrieveElement(paramkey: ResourceKey<Object>): RecordCodecBuilder<Object, Holder$Reference<Object>>;
    static retrieveGetter(paramregistryKey: ResourceKey<(Object | null)[]>): RecordCodecBuilder<Object, HolderGetter<Object>>;
    private constructor(parent: DynamicOps<T>, lookupProvider: RegistryOps$RegistryInfoLookup)
    lookupProvider: RegistryOps$RegistryInfoLookup;
    equals(obj: Object | null): boolean;
    getter<E extends Object | number | string | boolean>(registryKey: ResourceKey<E[]>): Optional<HolderGetter<E>>;
    hashCode(): number;
    owner<E extends Object | number | string | boolean>(registryKey: ResourceKey<E[]>): Optional<HolderOwner<E>>;
    withParent<U extends Object | number | string | boolean>(parent: DynamicOps<U>): RegistryOps<U>;
}
import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderGetter } from '../../../net/minecraft/core/HolderGetter.d.ts'
import type { RegistryAccess } from '../../../net/minecraft/core/RegistryAccess.d.ts'
import type { RegistrySetBuilder$RegisteredValue } from '../../../net/minecraft/core/RegistrySetBuilder$RegisteredValue.d.ts'
import type { RegistrySetBuilder$UniversalLookup } from '../../../net/minecraft/core/RegistrySetBuilder$UniversalLookup.d.ts'
import type { RegistrySetBuilder$UniversalOwner } from '../../../net/minecraft/core/RegistrySetBuilder$UniversalOwner.d.ts'
import type { BootstrapContext } from '../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistrySetBuilder$BuildState extends Record {
    static create(paramcontext: RegistryAccess, paramnewRegistries: Stream<ResourceKey<Object[]>>): RegistrySetBuilder$BuildState;
    private constructor(owner: RegistrySetBuilder$UniversalOwner, lookup: RegistrySetBuilder$UniversalLookup, registries: JavaMap<Identifier, HolderGetter<Object>>, registeredValues: JavaMap<ResourceKey<Object>, RegistrySetBuilder$RegisteredValue<Object>>, errors: RuntimeException[])
    // private errors: RuntimeException[];
    // private lookup: RegistrySetBuilder$UniversalLookup;
    // private owner: RegistrySetBuilder$UniversalOwner;
    // private registeredValues: JavaMap<ResourceKey<Object>, RegistrySetBuilder$RegisteredValue<Object>>;
    // private registries: JavaMap<Identifier, HolderGetter<Object>>;
    bootstrapContext<T extends unknown>(): BootstrapContext<T>;
    equals(o: Object | null): boolean;
    errors(): RuntimeException[];
    hashCode(): number;
    lookup(): RegistrySetBuilder$UniversalLookup;
    owner(): RegistrySetBuilder$UniversalOwner;
    registeredValues(): JavaMap<ResourceKey<Object>, RegistrySetBuilder$RegisteredValue<Object>>;
    registries(): JavaMap<Identifier, HolderGetter<Object>>;
    reportNotCollectedHolders(): void;
    reportUnclaimedRegisteredValues(): void;
    throwOnError(): void;
    toString(): string;
}
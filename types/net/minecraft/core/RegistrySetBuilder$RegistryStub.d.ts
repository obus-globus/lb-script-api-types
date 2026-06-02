import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistrySetBuilder$BuildState } from '../../../net/minecraft/core/RegistrySetBuilder$BuildState.d.ts'
import type { RegistrySetBuilder$RegistryBootstrap } from '../../../net/minecraft/core/RegistrySetBuilder$RegistryBootstrap.d.ts'
import type { RegistrySetBuilder$RegistryContents } from '../../../net/minecraft/core/RegistrySetBuilder$RegistryContents.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistrySetBuilder$RegistryStub<T extends Object | number | string | boolean> extends Record {
    constructor(key: ResourceKey<T[]>, lifecycle: Lifecycle, bootstrap: (param0: T) => void)
    // private bootstrap: (param0: T) => void;
    // private key: ResourceKey<T[]>;
    // private lifecycle: Lifecycle;
    // private apply(state: RegistrySetBuilder$BuildState): void;
    bootstrap(): (param0: T) => void;
    collectRegisteredValues(state: RegistrySetBuilder$BuildState): RegistrySetBuilder$RegistryContents<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    key(): ResourceKey<T[]>;
    lifecycle(): Lifecycle;
    toString(): string;
}
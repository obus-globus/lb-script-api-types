import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderGetter } from '../../../net/minecraft/core/HolderGetter.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { HolderOwner } from '../../../net/minecraft/core/HolderOwner.d.ts'
export class RegistryOps$RegistryInfo<T extends unknown> extends Record {
    static fromRegistryLookup<T extends unknown>(paramregistry: HolderLookup$RegistryLookup<T>): RegistryOps$RegistryInfo<T>;
    constructor(owner: HolderOwner<T>, getter: HolderGetter<T>, elementsLifecycle: Lifecycle)
    // private elementsLifecycle: Lifecycle;
    // private getter: HolderGetter<T>;
    // private owner: HolderOwner<T>;
    elementsLifecycle(): Lifecycle;
    equals(o: Object | null): boolean;
    getter(): HolderGetter<T>;
    hashCode(): number;
    owner(): HolderOwner<T>;
    toString(): string;
}
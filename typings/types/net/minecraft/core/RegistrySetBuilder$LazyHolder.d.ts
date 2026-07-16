import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderOwner } from '../../../net/minecraft/core/HolderOwner.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistrySetBuilder$LazyHolder<T extends unknown> extends Holder$Reference<T> {
    static createIntrusive<T extends unknown>(paramowner: HolderOwner<T>, paramvalue: T): Holder$Reference<T>;
    static createStandAlone<T extends unknown>(paramowner: HolderOwner<T>, paramkey: ResourceKey<T>): Holder$Reference<T>;
    constructor(owner: HolderOwner<T>, key: ResourceKey<T>)
    // private supplier: () => T;
    bindValue(value: T): void;
    value(): T;
}
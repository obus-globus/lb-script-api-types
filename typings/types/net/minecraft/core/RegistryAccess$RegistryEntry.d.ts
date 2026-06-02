import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistryAccess$RegistryEntry<T extends Object | number | string | boolean> extends Record {
    constructor(key: ResourceKey<T[]>, value: T[])
    // private key: ResourceKey<T[]>;
    // private value: T[];
    equals(o: Object | null): boolean;
    // private freeze(): RegistryAccess$RegistryEntry<T>;
    hashCode(): number;
    key(): ResourceKey<T[]>;
    toString(): string;
    value(): T[];
}
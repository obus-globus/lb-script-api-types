import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
export class RegistrySetBuilder$PatchedRegistries extends Record {
    constructor(full: HolderLookup$Provider, patches: HolderLookup$Provider)
    // private full: HolderLookup$Provider;
    // private patches: HolderLookup$Provider;
    equals(o: Object | null): boolean;
    full(): HolderLookup$Provider;
    hashCode(): number;
    patches(): HolderLookup$Provider;
    toString(): string;
}
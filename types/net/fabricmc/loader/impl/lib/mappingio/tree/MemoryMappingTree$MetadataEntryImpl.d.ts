import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTree$MetadataEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MetadataEntry.d.ts'
export class MemoryMappingTree$MetadataEntryImpl extends Object implements MappingTree$MetadataEntry {
    constructor(arg0: string, arg1: string)
    readonly key: string;
    readonly value: string;
    equals(arg0: Object | null): boolean;
    getKey(): string;
    getValue(): string;
    hashCode(): number;
    toString(): string;
}
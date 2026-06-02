import type { MappedElementKind } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappedElementKind.d.ts'
import type { MappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { MappingTree$FieldMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$FieldMapping.d.ts'
import type { MemoryMappingTree$ClassEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$ClassEntry.d.ts'
import type { MemoryMappingTree$MemberEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$MemberEntry.d.ts'
export class MemoryMappingTree$FieldEntry extends MemoryMappingTree$MemberEntry<MemoryMappingTree$FieldEntry> implements MappingTree$FieldMapping {
    constructor(arg0: MemoryMappingTree$ClassEntry, arg1: string, arg2: string)
    constructor(arg0: MemoryMappingTree$ClassEntry, arg1: MappingTree$FieldMapping, arg2: number)
    accept(arg0: MappingVisitor, arg1: boolean): void;
    getKind(): MappedElementKind;
    setSrcDescInternal(arg0: string): void;
    toString(): string;
}
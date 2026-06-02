import type { MappedElementKind } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappedElementKind.d.ts'
import type { MappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { MappingTree$ClassMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ClassMapping.d.ts'
import type { MappingTree$FieldMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$FieldMapping.d.ts'
import type { MappingTree$MethodMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodMapping.d.ts'
import type { MemoryMappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree.d.ts'
import type { MemoryMappingTree$Entry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$Entry.d.ts'
import type { MemoryMappingTree$FieldEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$FieldEntry.d.ts'
import type { MemoryMappingTree$MemberEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$MemberEntry.d.ts'
import type { MemoryMappingTree$MemberKey } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$MemberKey.d.ts'
import type { MemoryMappingTree$MethodEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$MethodEntry.d.ts'
import type { VisitOrder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/VisitOrder.d.ts'
export class MemoryMappingTree$ClassEntry extends MemoryMappingTree$Entry<MemoryMappingTree$ClassEntry> implements MappingTree$ClassMapping {
    constructor(arg0: MemoryMappingTree, arg1: string)
    readonly fields: Map<MemoryMappingTree$MemberKey, MemoryMappingTree$FieldEntry>;
    // private fieldsView: E[];
    // private flags: number;
    readonly methods: Map<MemoryMappingTree$MemberKey, MemoryMappingTree$MethodEntry>;
    // private methodsView: E[];
    accept(arg0: MappingVisitor, arg1: VisitOrder, arg2: boolean, arg3: boolean): void;
    addFieldInternal(arg0: MappingTree$FieldMapping): MemoryMappingTree$FieldEntry;
    // private addMember<T extends MemoryMappingTree$MemberEntry<T>>(arg0: T, arg1: Map<MemoryMappingTree$MemberKey, T>, arg2: number, arg3: number): T;
    addMethodInternal(arg0: MappingTree$MethodMapping): MemoryMappingTree$MethodEntry;
    copyFrom(arg0: MemoryMappingTree$ClassEntry, arg1: boolean): void;
    getField(arg0: string, arg1: string, arg2: number): MappingTree$FieldMapping;
    getField(arg0: string, arg1: string): MemoryMappingTree$FieldEntry;
    getField(arg0: string, arg1: string, arg2: number): MemoryMappingTree$FieldEntry;
    getFields(): E[];
    getKind(): MappedElementKind;
    getMethod(arg0: string, arg1: string, arg2: number): MappingTree$MethodMapping;
    getMethod(arg0: string, arg1: string): MemoryMappingTree$MethodEntry;
    getMethod(arg0: string, arg1: string, arg2: number): MemoryMappingTree$MethodEntry;
    getMethods(): E[];
    getTree(): MemoryMappingTree;
    setDstNameInternal(arg0: string, arg1: number): void;
    toString(): string;
}
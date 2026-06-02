import type { MappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { MappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MappingTree$MemberMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MemberMapping.d.ts'
import type { MemoryMappingTree$ClassEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$ClassEntry.d.ts'
import type { MemoryMappingTree$Entry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$Entry.d.ts'
import type { MemoryMappingTree$MemberKey } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$MemberKey.d.ts'
export abstract class MemoryMappingTree$MemberEntry<T extends MemoryMappingTree$MemberEntry<T>> extends MemoryMappingTree$Entry<T> implements MappingTree$MemberMapping {
    constructor(arg0: MemoryMappingTree$ClassEntry, arg1: string, arg2: string)
    constructor(arg0: MemoryMappingTree$ClassEntry, arg1: MappingTree$MemberMapping, arg2: number)
    // private key: MemoryMappingTree$MemberKey;
    owner: MemoryMappingTree$ClassEntry;
    srcDesc: string;
    acceptMember(arg0: MappingVisitor, arg1: boolean): boolean;
    getKey(): MemoryMappingTree$MemberKey;
    getOwner(): MemoryMappingTree$ClassEntry;
    getSrcDesc(): string;
    getTree(): MappingTree;
    setKey(arg0: MemoryMappingTree$MemberKey): void;
    setOwner(arg0: MemoryMappingTree$ClassEntry): void;
    setSrcDescInternal(arg0: string): void;
    setSrcName(arg0: string): void;
}
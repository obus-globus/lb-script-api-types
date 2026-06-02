import type { MappedElementKind } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappedElementKind.d.ts'
import type { MappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { MappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MappingTree$MethodArgMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodArgMapping.d.ts'
import type { MemoryMappingTree$Entry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$Entry.d.ts'
import type { MemoryMappingTree$MethodEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$MethodEntry.d.ts'
export class MemoryMappingTree$MethodArgEntry extends MemoryMappingTree$Entry<MemoryMappingTree$MethodArgEntry> implements MappingTree$MethodArgMapping {
    constructor(arg0: MemoryMappingTree$MethodEntry, arg1: number, arg2: number, arg3: string)
    constructor(arg0: MemoryMappingTree$MethodEntry, arg1: MappingTree$MethodArgMapping, arg2: number)
    readonly argPosition: number;
    readonly lvIndex: number;
    readonly method: MemoryMappingTree$MethodEntry;
    accept(arg0: MappingVisitor): void;
    copyFrom(arg0: MemoryMappingTree$MethodArgEntry, arg1: boolean): void;
    getArgPosition(): number;
    getKind(): MappedElementKind;
    getLvIndex(): number;
    getMethod(): MemoryMappingTree$MethodEntry;
    getTree(): MappingTree;
    setArgPositionInternal(arg0: number): void;
    setLvIndexInternal(arg0: number): void;
    toString(): string;
}
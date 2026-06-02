import type { MappedElementKind } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappedElementKind.d.ts'
import type { MappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { MappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MappingTree$MethodVarMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodVarMapping.d.ts'
import type { MemoryMappingTree$Entry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$Entry.d.ts'
import type { MemoryMappingTree$MethodEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$MethodEntry.d.ts'
export class MemoryMappingTree$MethodVarEntry extends MemoryMappingTree$Entry<MemoryMappingTree$MethodVarEntry> implements MappingTree$MethodVarMapping {
    constructor(arg0: MemoryMappingTree$MethodEntry, arg1: number, arg2: number, arg3: number, arg4: number, arg5: string)
    constructor(arg0: MemoryMappingTree$MethodEntry, arg1: MappingTree$MethodVarMapping, arg2: number)
    readonly endOpIdx: number;
    readonly lvIndex: number;
    readonly lvtRowIndex: number;
    readonly method: MemoryMappingTree$MethodEntry;
    readonly startOpIdx: number;
    accept(arg0: MappingVisitor): void;
    copyFrom(arg0: MemoryMappingTree$MethodVarEntry, arg1: boolean): void;
    getEndOpIdx(): number;
    getKind(): MappedElementKind;
    getLvIndex(): number;
    getLvtRowIndex(): number;
    getMethod(): MemoryMappingTree$MethodEntry;
    getStartOpIdx(): number;
    getTree(): MappingTree;
    setLvIndexInternal(arg0: number, arg1: number, arg2: number): void;
    setLvtRowIndexInternal(arg0: number): void;
    toString(): string;
}
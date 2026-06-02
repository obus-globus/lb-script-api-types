import type { MappedElementKind } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappedElementKind.d.ts'
import type { MappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { MappingTree$MethodArgMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodArgMapping.d.ts'
import type { MappingTree$MethodMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodMapping.d.ts'
import type { MappingTree$MethodVarMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodVarMapping.d.ts'
import type { MemoryMappingTree$ClassEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$ClassEntry.d.ts'
import type { MemoryMappingTree$MemberEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$MemberEntry.d.ts'
import type { MemoryMappingTree$MethodArgEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$MethodArgEntry.d.ts'
import type { MemoryMappingTree$MethodVarEntry } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree$MethodVarEntry.d.ts'
import type { VisitOrder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/VisitOrder.d.ts'
export class MemoryMappingTree$MethodEntry extends MemoryMappingTree$MemberEntry<MemoryMappingTree$MethodEntry> implements MappingTree$MethodMapping {
    constructor(arg0: MemoryMappingTree$ClassEntry, arg1: string, arg2: string)
    constructor(arg0: MemoryMappingTree$ClassEntry, arg1: MappingTree$MethodMapping, arg2: number)
    readonly args: MemoryMappingTree$MethodArgEntry[];
    // private argsView: MemoryMappingTree$MethodArgEntry[];
    readonly vars: MemoryMappingTree$MethodVarEntry[];
    // private varsView: MemoryMappingTree$MethodVarEntry[];
    accept(arg0: MappingVisitor, arg1: VisitOrder, arg2: boolean): void;
    addArgInternal(arg0: MappingTree$MethodArgMapping): MemoryMappingTree$MethodArgEntry;
    addVarInternal(arg0: MappingTree$MethodVarMapping): MemoryMappingTree$MethodVarEntry;
    copyFrom(arg0: MemoryMappingTree$MethodEntry, arg1: boolean): void;
    getArg(arg0: number, arg1: number, arg2: string): MemoryMappingTree$MethodArgEntry;
    getArgs(): E[];
    getKind(): MappedElementKind;
    getVar(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string): MemoryMappingTree$MethodVarEntry;
    getVars(): E[];
    setSrcDescInternal(arg0: string): void;
    toString(): string;
}
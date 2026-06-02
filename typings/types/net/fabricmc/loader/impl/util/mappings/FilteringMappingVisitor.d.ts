import type { MappedElementKind } from '../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappedElementKind.d.ts'
import type { MappingVisitor } from '../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { ForwardingMappingVisitor } from '../../../../../../net/fabricmc/loader/impl/lib/mappingio/adapter/ForwardingMappingVisitor.d.ts'
export class FilteringMappingVisitor extends ForwardingMappingVisitor {
    constructor(arg0: MappingVisitor)
    visitComment(arg0: MappedElementKind, arg1: string): void;
    visitMethodVar(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string): boolean;
}
import type { MappedElementKind } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappedElementKind.d.ts'
import type { MappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { ForwardingMappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/adapter/ForwardingMappingVisitor.d.ts'
export class MappingDstNsReorder extends ForwardingMappingVisitor {
    constructor(arg0: MappingVisitor, arg1: string[])
    constructor(arg0: MappingVisitor, arg1: string[])
    // private newDstNs: string[];
    // private nsMap: number[];
    visitDstDesc(arg0: MappedElementKind, arg1: number, arg2: string): void;
    visitDstName(arg0: MappedElementKind, arg1: number, arg2: string): void;
    visitNamespaces(arg0: string, arg1: string[]): void;
}
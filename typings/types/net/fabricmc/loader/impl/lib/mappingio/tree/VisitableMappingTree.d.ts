import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappedElementKind } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappedElementKind.d.ts'
import type { MappingFlag } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingFlag.d.ts'
import type { MappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { MappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MappingTree$ClassMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ClassMapping.d.ts'
import type { MappingTree$FieldMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$FieldMapping.d.ts'
import type { MappingTree$MethodMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodMapping.d.ts'
import type { MappingTreeView$ClassMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$ClassMappingView.d.ts'
import type { VisitOrder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/VisitOrder.d.ts'
export interface VisitableMappingTree extends Object, MappingVisitor, MappingTree{
    accept(arg0: MappingVisitor, arg1: VisitOrder): void;
    getClass(arg0: string): MappingTree$ClassMapping;
    getClass(arg0: string, arg1: number): MappingTree$ClassMapping;
    getClass(arg0: string): MappingTreeView$ClassMappingView;
    getField(arg0: string, arg1: string, arg2: string, arg3: number): MappingTree$FieldMapping;
    getFlags(): MappingFlag[];
    getMethod(arg0: string, arg1: string, arg2: string, arg3: number): MappingTree$MethodMapping;
    getSrcNamespace(): string;
    reset(): void;
    visitClass(arg0: string): boolean;
    visitComment(arg0: MappedElementKind, arg1: string): void;
    visitContent(): boolean;
    visitDstDesc(arg0: MappedElementKind, arg1: number, arg2: string): void;
    visitDstName(arg0: MappedElementKind, arg1: number, arg2: string): void;
    visitElementContent(arg0: MappedElementKind): boolean;
    visitEnd(): boolean;
    visitField(arg0: string, arg1: string): boolean;
    visitHeader(): boolean;
    visitMetadata(arg0: string, arg1: string): void;
    visitMethod(arg0: string, arg1: string): boolean;
    visitMethodArg(arg0: number, arg1: number, arg2: string): boolean;
    visitMethodVar(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string): boolean;
}
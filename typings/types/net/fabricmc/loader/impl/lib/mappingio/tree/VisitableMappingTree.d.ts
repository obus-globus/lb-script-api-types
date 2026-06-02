import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappedElementKind } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappedElementKind.d.ts'
import type { MappingFlag } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingFlag.d.ts'
import type { MappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { MappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MappingTree$ClassMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ClassMapping.d.ts'
import type { MappingTree$FieldMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$FieldMapping.d.ts'
import type { MappingTree$MethodMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodMapping.d.ts'
export interface VisitableMappingTree extends Object, MappingVisitor, MappingTree{
    getClass(arg0: string, arg1: number): MappingTree$ClassMapping;
    getField(arg0: string, arg1: string, arg2: string, arg3: number): MappingTree$FieldMapping;
    getFlags(): MappingFlag[];
    getMethod(arg0: string, arg1: string, arg2: string, arg3: number): MappingTree$MethodMapping;
    reset(): void;
    visitContent(): boolean;
    visitDstDesc(arg0: MappedElementKind, arg1: number, arg2: string): void;
    visitElementContent(arg0: MappedElementKind): boolean;
    visitEnd(): boolean;
    visitHeader(): boolean;
    visitMetadata(arg0: string, arg1: string): void;
}
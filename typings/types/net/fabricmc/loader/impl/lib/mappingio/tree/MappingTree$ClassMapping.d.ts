import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MappingTree$ElementMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ElementMapping.d.ts'
import type { MappingTree$FieldMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$FieldMapping.d.ts'
import type { MappingTree$MethodMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodMapping.d.ts'
import type { MappingTreeView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView.d.ts'
import type { MappingTreeView$ClassMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$ClassMappingView.d.ts'
import type { MappingTreeView$FieldMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$FieldMappingView.d.ts'
import type { MappingTreeView$MethodMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MethodMappingView.d.ts'
export interface MappingTree$ClassMapping extends Object, MappingTree$ElementMapping, MappingTreeView$ClassMappingView{
    getComment(): string;
    getDstName(arg0: number): string;
    getField(arg0: string, arg1: string): MappingTree$FieldMapping;
    getField(arg0: string, arg1: string, arg2: number): MappingTree$FieldMapping;
    getField(arg0: string, arg1: string, arg2: number): MappingTreeView$FieldMappingView;
    getFields(): MappingTree$FieldMapping[];
    getMethod(arg0: string, arg1: string): MappingTree$MethodMapping;
    getMethod(arg0: string, arg1: string, arg2: number): MappingTree$MethodMapping;
    getMethod(arg0: string, arg1: string, arg2: number): MappingTreeView$MethodMappingView;
    getMethods(): MappingTree$MethodMapping[];
    getSrcName(): string;
    getTree(): MappingTree;
    getTree(): MappingTreeView;
    setDstName(arg0: string, arg1: number): void;
}
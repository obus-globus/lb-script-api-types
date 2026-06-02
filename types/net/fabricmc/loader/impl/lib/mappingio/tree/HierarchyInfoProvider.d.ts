import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MappingTreeView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView.d.ts'
import type { MappingTreeView$MethodMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MethodMappingView.d.ts'
export interface HierarchyInfoProvider<T extends Object | number | string | boolean> extends Object{
    getHierarchyMethods(arg0: T, arg1: MappingTree): E[];
    getHierarchyMethods(arg0: T, arg1: MappingTreeView): E[];
    getHierarchySize(arg0: T): number;
    getMethodHierarchy(arg0: string, arg1: string, arg2: string): T;
    getMethodHierarchy(arg0: MappingTreeView$MethodMappingView): T;
    getNamespace(): string;
}
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MappingTree$ClassMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ClassMapping.d.ts'
import type { MappingTree$MemberMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MemberMapping.d.ts'
import type { MappingTree$MethodArgMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodArgMapping.d.ts'
import type { MappingTree$MethodVarMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodVarMapping.d.ts'
import type { MappingTreeView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView.d.ts'
import type { MappingTreeView$ClassMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$ClassMappingView.d.ts'
import type { MappingTreeView$MethodMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MethodMappingView.d.ts'
export interface MappingTree$MethodMapping extends Object, MappingTree$MemberMapping, MappingTreeView$MethodMappingView{
    getArgs(): MappingTree$MethodArgMapping[];
    getComment(): string;
    getDstName(arg0: number): string;
    getOwner(): MappingTree$ClassMapping;
    getOwner(): MappingTreeView$ClassMappingView;
    getSrcDesc(): string;
    getSrcName(): string;
    getTree(): MappingTree;
    getTree(): MappingTreeView;
    getVars(): MappingTree$MethodVarMapping[];
    setDstName(arg0: string, arg1: number): void;
}
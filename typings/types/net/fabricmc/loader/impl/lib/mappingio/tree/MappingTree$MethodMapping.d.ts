import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTree$MemberMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MemberMapping.d.ts'
import type { MappingTree$MethodArgMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodArgMapping.d.ts'
import type { MappingTree$MethodVarMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodVarMapping.d.ts'
import type { MappingTreeView$MethodMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MethodMappingView.d.ts'
export interface MappingTree$MethodMapping extends Object, MappingTree$MemberMapping, MappingTreeView$MethodMappingView{
    getArgs(): MappingTree$MethodArgMapping[];
    getVars(): MappingTree$MethodVarMapping[];
}
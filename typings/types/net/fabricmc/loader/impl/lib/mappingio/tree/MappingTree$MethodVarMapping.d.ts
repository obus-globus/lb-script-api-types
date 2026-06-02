import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTree$ElementMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ElementMapping.d.ts'
import type { MappingTree$MethodMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodMapping.d.ts'
import type { MappingTreeView$MethodVarMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MethodVarMappingView.d.ts'
export interface MappingTree$MethodVarMapping extends Object, MappingTree$ElementMapping, MappingTreeView$MethodVarMappingView{
    getMethod(): MappingTree$MethodMapping;
}
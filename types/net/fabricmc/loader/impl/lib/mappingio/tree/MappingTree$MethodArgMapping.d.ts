import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTree$ElementMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ElementMapping.d.ts'
import type { MappingTree$MethodMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodMapping.d.ts'
import type { MappingTreeView$MethodArgMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MethodArgMappingView.d.ts'
export interface MappingTree$MethodArgMapping extends Object, MappingTree$ElementMapping, MappingTreeView$MethodArgMappingView{
    getMethod(): MappingTree$MethodMapping;
}
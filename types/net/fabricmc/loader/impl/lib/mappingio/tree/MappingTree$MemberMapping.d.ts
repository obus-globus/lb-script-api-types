import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTree$ClassMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ClassMapping.d.ts'
import type { MappingTree$ElementMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ElementMapping.d.ts'
import type { MappingTreeView$MemberMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MemberMappingView.d.ts'
export interface MappingTree$MemberMapping extends Object, MappingTree$ElementMapping, MappingTreeView$MemberMappingView{
    getDesc(arg0: number): string;
    getOwner(): MappingTree$ClassMapping;
}
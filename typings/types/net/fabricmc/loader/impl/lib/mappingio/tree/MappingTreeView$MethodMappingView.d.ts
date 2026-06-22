import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTreeView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView.d.ts'
import type { MappingTreeView$ClassMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$ClassMappingView.d.ts'
import type { MappingTreeView$MemberMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MemberMappingView.d.ts'
export interface MappingTreeView$MethodMappingView extends Object, MappingTreeView$MemberMappingView{
    getComment(): string;
    getDesc(arg0: number): string;
    getDstName(arg0: number): string;
    getOwner(): MappingTreeView$ClassMappingView;
    getSrcDesc(): string;
    getSrcName(): string;
    getTree(): MappingTreeView;
}
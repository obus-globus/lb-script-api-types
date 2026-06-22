import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTreeView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView.d.ts'
import type { MappingTreeView$ClassMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$ClassMappingView.d.ts'
import type { MappingTreeView$ElementMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$ElementMappingView.d.ts'
export interface MappingTreeView$MemberMappingView extends Object, MappingTreeView$ElementMappingView{
    getComment(): string;
    getDesc(arg0: number): string;
    getDstName(arg0: number): string;
    getName(arg0: number): string;
    getName(arg0: string): string;
    getOwner(): MappingTreeView$ClassMappingView;
    getSrcDesc(): string;
    getSrcName(): string;
    getTree(): MappingTreeView;
}
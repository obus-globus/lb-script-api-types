import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MappingTree$ClassMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ClassMapping.d.ts'
import type { MappingTree$ElementMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ElementMapping.d.ts'
import type { MappingTreeView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView.d.ts'
import type { MappingTreeView$MemberMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MemberMappingView.d.ts'
export interface MappingTree$MemberMapping extends Object, MappingTree$ElementMapping, MappingTreeView$MemberMappingView{
    getComment(): string;
    getDesc(arg0: number): string;
    getDstName(arg0: number): string;
    getOwner(): MappingTree$ClassMapping;
    getSrcDesc(): string;
    getSrcName(): string;
    getTree(): MappingTree;
    getTree(): MappingTreeView;
    setDstName(arg0: string, arg1: number): void;
}
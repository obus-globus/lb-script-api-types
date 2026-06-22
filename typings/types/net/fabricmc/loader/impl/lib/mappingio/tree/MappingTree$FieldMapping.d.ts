import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MappingTree$ClassMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ClassMapping.d.ts'
import type { MappingTree$MemberMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MemberMapping.d.ts'
import type { MappingTreeView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView.d.ts'
import type { MappingTreeView$ClassMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$ClassMappingView.d.ts'
import type { MappingTreeView$FieldMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$FieldMappingView.d.ts'
export interface MappingTree$FieldMapping extends Object, MappingTree$MemberMapping, MappingTreeView$FieldMappingView{
    getComment(): string;
    getDstName(arg0: number): string;
    getOwner(): MappingTree$ClassMapping;
    getOwner(): MappingTreeView$ClassMappingView;
    getSrcDesc(): string;
    getSrcName(): string;
    getTree(): MappingTree;
    getTree(): MappingTreeView;
    setDstName(arg0: string, arg1: number): void;
}
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MappingTreeView$ElementMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$ElementMappingView.d.ts'
export interface MappingTree$ElementMapping extends Object, MappingTreeView$ElementMappingView{
    getName(arg0: number): string;
    getName(arg0: string): string;
    getTree(): MappingTree;
    setDstName(arg0: string, arg1: number): void;
}
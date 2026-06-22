import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTree } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MappingTree$ElementMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$ElementMapping.d.ts'
import type { MappingTree$MethodMapping } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree$MethodMapping.d.ts'
import type { MappingTreeView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView.d.ts'
import type { MappingTreeView$MethodArgMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MethodArgMappingView.d.ts'
export interface MappingTree$MethodArgMapping extends Object, MappingTree$ElementMapping, MappingTreeView$MethodArgMappingView{
    getArgPosition(): number;
    getComment(): string;
    getDstName(arg0: number): string;
    getLvIndex(): number;
    getMethod(): MappingTree$MethodMapping;
    getSrcName(): string;
    getTree(): MappingTree;
    getTree(): MappingTreeView;
    setDstName(arg0: string, arg1: number): void;
}
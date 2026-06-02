import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTreeView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView.d.ts'
export interface MappingTreeView$ElementMappingView extends Object{
    getComment(): string;
    getDstName(arg0: number): string;
    getName(arg0: number): string;
    getName(arg0: string): string;
    getSrcName(): string;
    getTree(): MappingTreeView;
}
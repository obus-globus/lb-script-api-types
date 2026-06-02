import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTreeView$ElementMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$ElementMappingView.d.ts'
export interface MappingTreeView$MethodVarMappingView extends Object, MappingTreeView$ElementMappingView{
    getEndOpIdx(): number;
    getLvIndex(): number;
    getLvtRowIndex(): number;
    getName(arg0: number): string;
    getName(arg0: string): string;
    getStartOpIdx(): number;
}
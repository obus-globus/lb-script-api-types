import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTreeView$ElementMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$ElementMappingView.d.ts'
import type { MappingTreeView$FieldMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$FieldMappingView.d.ts'
import type { MappingTreeView$MethodMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MethodMappingView.d.ts'
export interface MappingTreeView$ClassMappingView extends Object, MappingTreeView$ElementMappingView{
    getField(arg0: string, arg1: string): MappingTreeView$FieldMappingView;
    getField(arg0: string, arg1: string, arg2: number): MappingTreeView$FieldMappingView;
    getFields(): MappingTreeView$FieldMappingView[];
    getMethod(arg0: string, arg1: string): MappingTreeView$MethodMappingView;
    getMethod(arg0: string, arg1: string, arg2: number): MappingTreeView$MethodMappingView;
    getMethods(): MappingTreeView$MethodMappingView[];
    getName(arg0: number): string;
    getName(arg0: string): string;
}
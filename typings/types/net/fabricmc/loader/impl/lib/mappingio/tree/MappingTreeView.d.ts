import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { MappingVisitor } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/MappingVisitor.d.ts'
import type { MappingTreeView$ClassMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$ClassMappingView.d.ts'
import type { MappingTreeView$FieldMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$FieldMappingView.d.ts'
import type { MappingTreeView$MethodMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MethodMappingView.d.ts'
import type { VisitOrder } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/VisitOrder.d.ts'
export interface MappingTreeView extends Object{
    accept(arg0: MappingVisitor): void;
    accept(arg0: MappingVisitor, arg1: VisitOrder): void;
    getClass(arg0: string): MappingTreeView$ClassMappingView;
    getClass(arg0: string, arg1: number): MappingTreeView$ClassMappingView;
    getClasses(): MappingTreeView$ClassMappingView[];
    getDstNamespaces(): string[];
    getField(arg0: string, arg1: string, arg2: string, arg3: number): MappingTreeView$FieldMappingView;
    getMethod(arg0: string, arg1: string, arg2: string, arg3: number): MappingTreeView$MethodMappingView;
    getNamespaceId(arg0: string): number;
    getSrcNamespace(): string;
    mapClassName(arg0: string, arg1: number, arg2: number): string;
    mapDesc(arg0: CharSequence, arg1: number): string;
    mapDesc(arg0: CharSequence, arg1: number, arg2: number): string;
    mapDesc(arg0: CharSequence, arg1: number, arg2: number, arg3: number, arg4: number): string;
}
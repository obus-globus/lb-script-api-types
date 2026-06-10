import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MappingTreeView$ClassMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$ClassMappingView.d.ts'
import type { MappingTreeView$FieldMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$FieldMappingView.d.ts'
import type { MappingTreeView$MethodArgMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MethodArgMappingView.d.ts'
import type { MappingTreeView$MethodMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MethodMappingView.d.ts'
import type { MappingTreeView$MethodVarMappingView } from '../../../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTreeView$MethodVarMappingView.d.ts'
export class VisitOrder extends Object {
    static createByInputOrder(): VisitOrder;
    private constructor()
    // private classComparator: (param0: Object) => boolean;
    // private fieldComparator: (param0: Object) => boolean;
    // private methodArgComparator: (param0: Object) => boolean;
    // private methodComparator: (param0: Object) => boolean;
    // private methodVarComparator: (param0: Object) => boolean;
    readonly methodVarsFirst: boolean;
    readonly methodsFirst: boolean;
    isMethodVarsFirst(): boolean;
    isMethodsFirst(): boolean;
    sortClasses<T extends MappingTreeView$ClassMappingView>(arg0: T[]): T[];
    sortFields<T extends MappingTreeView$FieldMappingView>(arg0: T[]): T[];
    sortMethodArgs<T extends MappingTreeView$MethodArgMappingView>(arg0: T[]): T[];
    sortMethodVars<T extends MappingTreeView$MethodVarMappingView>(arg0: T[]): T[];
    sortMethods<T extends MappingTreeView$MethodMappingView>(arg0: T[]): T[];
}
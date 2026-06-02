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
    // private classComparator: (param0: MappingTreeView$ClassMappingView) => kotlin.Boolean;
    // private fieldComparator: (param0: MappingTreeView$FieldMappingView) => kotlin.Boolean;
    // private methodArgComparator: (param0: MappingTreeView$MethodArgMappingView) => kotlin.Boolean;
    // private methodComparator: (param0: MappingTreeView$MethodMappingView) => kotlin.Boolean;
    // private methodVarComparator: (param0: MappingTreeView$MethodVarMappingView) => kotlin.Boolean;
    readonly methodVarsFirst: boolean;
    readonly methodsFirst: boolean;
    isMethodVarsFirst(): boolean;
    isMethodsFirst(): boolean;
    sortClasses(arg0: E[]): E[];
    sortFields(arg0: E[]): E[];
    sortMethodArgs(arg0: E[]): E[];
    sortMethodVars(arg0: E[]): E[];
    sortMethods(arg0: E[]): E[];
}
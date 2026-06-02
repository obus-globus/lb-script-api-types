import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Assignment<D extends Expression> extends Object{
    getAssignmentDest(): D;
    getAssignmentSource(): Expression;
}
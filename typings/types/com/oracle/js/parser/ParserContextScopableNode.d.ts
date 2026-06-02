import type { ParserContextNode } from '../../../../com/oracle/js/parser/ParserContextNode.d.ts'
import type { Scope } from '../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ParserContextScopableNode extends ParserContextNode, Object{
    getScope(): Scope;
}
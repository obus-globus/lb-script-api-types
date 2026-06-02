import type { ParserContextBaseNode } from '../../../../com/oracle/js/parser/ParserContextBaseNode.d.ts'
import type { ParserContextBreakableNode } from '../../../../com/oracle/js/parser/ParserContextBreakableNode.d.ts'
import type { ParserContextScopableNode } from '../../../../com/oracle/js/parser/ParserContextScopableNode.d.ts'
import type { Scope } from '../../../../com/oracle/js/parser/ir/Scope.d.ts'
export class ParserContextBlockNode extends ParserContextBaseNode implements ParserContextBreakableNode, ParserContextScopableNode {
    constructor(token: number, scope: Scope)
    readonly scope: Scope;
    readonly token: number;
    getScope(): Scope;
    getToken(): number;
    isBreakableWithoutLabel(): boolean;
    setScope(scope: Scope): void;
}
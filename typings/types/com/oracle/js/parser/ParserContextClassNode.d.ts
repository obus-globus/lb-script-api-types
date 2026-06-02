import type { ParserContext } from '../../../../com/oracle/js/parser/ParserContext.d.ts'
import type { ParserContextBaseNode } from '../../../../com/oracle/js/parser/ParserContextBaseNode.d.ts'
import type { ParserContextScopableNode } from '../../../../com/oracle/js/parser/ParserContextScopableNode.d.ts'
import type { IdentNode } from '../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { Scope } from '../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { EconomicMap } from '../../../../org/graalvm/collections/EconomicMap.d.ts'
export class ParserContextClassNode extends ParserContextBaseNode implements ParserContextScopableNode {
    constructor(scope: Scope)
    readonly scope: Scope;
    // private unresolvedPrivateIdentifiers: EconomicMap<string, IdentNode>;
    getScope(): Scope;
    setScope(scope: Scope): void;
    usePrivateName(ident: IdentNode): void;
    verifyAllPrivateIdentifiersValid(lc: ParserContext): IdentNode;
}
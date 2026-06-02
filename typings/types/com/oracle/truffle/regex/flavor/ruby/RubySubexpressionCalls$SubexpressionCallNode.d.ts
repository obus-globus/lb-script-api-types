import type { RubySubexpressionCalls$CallGraphNode } from '../../../../../../com/oracle/truffle/regex/flavor/ruby/RubySubexpressionCalls$CallGraphNode.d.ts'
import type { SubexpressionCall } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/SubexpressionCall.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RubySubexpressionCalls$SubexpressionCallNode extends RubySubexpressionCalls$CallGraphNode {
    constructor(subexpressionCall: SubexpressionCall)
    // private subexpressionCall: SubexpressionCall;
    equals(obj: Object | null): boolean;
    hashCode(): number;
}
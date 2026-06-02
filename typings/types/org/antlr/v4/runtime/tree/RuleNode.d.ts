import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RuleContext } from '../../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { ParseTree } from '../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
export interface RuleNode extends Object, ParseTree{
    getRuleContext(): RuleContext;
}
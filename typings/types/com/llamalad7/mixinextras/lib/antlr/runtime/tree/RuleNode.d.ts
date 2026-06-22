import type { RuleContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { ParseTree } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ParseTree.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface RuleNode extends ParseTree, Object{
    getText(): string;
    setParent(arg0: RuleContext): void;
}
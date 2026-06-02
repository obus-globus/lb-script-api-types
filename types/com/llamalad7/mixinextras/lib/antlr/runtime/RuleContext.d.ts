import type { ParseTree } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ParseTree.d.ts'
import type { RuleNode } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/RuleNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RuleContext extends Object implements RuleNode {
    constructor()
    constructor(arg0: RuleContext, arg1: number)
    invokingState: number;
    parent: RuleContext;
    getChild(arg0: number): ParseTree;
    getChildCount(): number;
    getRuleIndex(): number;
    getText(): string;
    isEmpty(): boolean;
    setAltNumber(arg0: number): void;
    setParent(arg0: RuleContext): void;
    toString(): string;
    toString(arg0: string[], arg1: RuleContext): string;
}
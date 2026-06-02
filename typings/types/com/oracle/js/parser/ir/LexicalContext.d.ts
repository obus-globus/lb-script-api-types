import type { Block } from '../../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { ClassNode } from '../../../../../com/oracle/js/parser/ir/ClassNode.d.ts'
import type { FunctionNode } from '../../../../../com/oracle/js/parser/ir/FunctionNode.d.ts'
import type { LexicalContextNode } from '../../../../../com/oracle/js/parser/ir/LexicalContextNode.d.ts'
import type { Scope } from '../../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class LexicalContext extends Object {
    constructor()
    private constructor(from: LexicalContext)
    // private sp: number;
    // private stack: LexicalContextNode[];
    contains(node: LexicalContextNode): boolean;
    copy(): LexicalContext;
    getAllNodes(): Iterator<LexicalContextNode>;
    getBlocks(): Iterator<Block>;
    getCurrentBlock(): Block;
    getCurrentClass(): ClassNode;
    getCurrentFunction(): FunctionNode;
    getCurrentNonArrowFunction(): FunctionNode;
    getCurrentScope(): Scope;
    getFunctions(): Iterator<FunctionNode>;
    inModule(): boolean;
    isEmpty(): boolean;
    pop<T extends LexicalContextNode>(node: T): T;
    push<T extends LexicalContextNode>(node: T): T;
    replace(oldNode: LexicalContextNode, newNode: LexicalContextNode): LexicalContextNode;
    toString(): string;
}
import type { ParserContextBlockNode } from '../../../../com/oracle/js/parser/ParserContextBlockNode.d.ts'
import type { ParserContextBreakableNode } from '../../../../com/oracle/js/parser/ParserContextBreakableNode.d.ts'
import type { ParserContextClassNode } from '../../../../com/oracle/js/parser/ParserContextClassNode.d.ts'
import type { ParserContextFunctionNode } from '../../../../com/oracle/js/parser/ParserContextFunctionNode.d.ts'
import type { ParserContextLabelNode } from '../../../../com/oracle/js/parser/ParserContextLabelNode.d.ts'
import type { ParserContextLoopNode } from '../../../../com/oracle/js/parser/ParserContextLoopNode.d.ts'
import type { ParserContextNode } from '../../../../com/oracle/js/parser/ParserContextNode.d.ts'
import type { Scope } from '../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { Statement } from '../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ParserContext extends Object {
    constructor()
    // private sp: number;
    // private stack: ParserContextNode[];
    appendStatementToCurrentNode(statement: Statement): void;
    contains(node: ParserContextNode): boolean;
    findLabel(name: string): ParserContextLabelNode;
    // private findLabelledItem<T extends ParserContextBreakableNode>(labelName: string, breakableType: Class<T>): T;
    getAllNodes(): Iterator<ParserContextNode>;
    getBlocks(): Iterator<ParserContextBlockNode>;
    // private getBreakable(): ParserContextBreakableNode;
    getBreakable(labelName: string): ParserContextBreakableNode;
    getClasses(): Iterator<ParserContextClassNode>;
    // private getContinueTo(): ParserContextLoopNode;
    getContinueTo(labelName: string): ParserContextLoopNode;
    getCurrentBlock(): ParserContextBlockNode;
    getCurrentClass(): ParserContextClassNode;
    getCurrentFunction(): ParserContextFunctionNode;
    getCurrentLoop(): ParserContextLoopNode;
    getCurrentNonArrowFunction(): ParserContextFunctionNode;
    getCurrentScope(): Scope;
    getFunctions(): Iterator<ParserContextFunctionNode>;
    getLastStatement(): Statement;
    peek(): ParserContextNode;
    pop(node: ParserContextNode): void;
    prependStatementToCurrentNode(statement: Statement): void;
    propagateFunctionFlags(): void;
    push<T extends ParserContextNode>(node: T): T;
    setCurrentFunctionFlag(flag: number): ParserContextFunctionNode;
}
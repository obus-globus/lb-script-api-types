import type { BreakableNode } from '../../../../../com/oracle/js/parser/ir/BreakableNode.d.ts'
import type { Flags } from '../../../../../com/oracle/js/parser/ir/Flags.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LexicalContextScope } from '../../../../../com/oracle/js/parser/ir/LexicalContextScope.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { Scope } from '../../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { Statement } from '../../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { Symbol } from '../../../../../com/oracle/js/parser/ir/Symbol.d.ts'
import type { Terminal } from '../../../../../com/oracle/js/parser/ir/Terminal.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Block extends Node implements BreakableNode, Flags<Block>, LexicalContextScope, Terminal {
    static IS_BODY: number;
    static IS_EXPRESSION_BLOCK: number;
    static IS_GLOBAL_SCOPE: number;
    static IS_MODULE_BODY: number;
    static IS_PARAMETER_BLOCK: number;
    static IS_SWITCH_BLOCK: number;
    static IS_SYNTHETIC: number;
    static IS_TERMINAL: number;
    static NEEDS_SCOPE: number;
    private constructor(block: Block, finish: number, statements: Statement[], flags: number)
    constructor(token: number, finish: number, flags: number, scope: Scope, statements: Statement[])
    readonly flags: number;
    readonly scope: Scope;
    readonly statements: Statement[];
    accept(lc: LexicalContext, visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(lc: LexicalContext, visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getExistingSymbol(name: string): Symbol;
    getFirstStatement(): Statement;
    getFirstStatementLineNumber(): number;
    getFlag(flag: number): boolean;
    getFlags(): number;
    getLastStatement(): Statement;
    getScope(): Scope;
    getStatementCount(): number;
    getStatements(): Statement[];
    getSymbolCount(): number;
    getSymbols(): Symbol[];
    hasSymbol(name: string): boolean;
    isBreakableWithoutLabel(): boolean;
    isCatchBlock(): boolean;
    isExpressionBlock(): boolean;
    isFunctionBody(): boolean;
    isGlobalScope(): boolean;
    isModuleBody(): boolean;
    isParameterBlock(): boolean;
    isSwitchBlock(): boolean;
    isSynthetic(): boolean;
    isTerminal(): boolean;
    needsScope(): boolean;
    setFlag(lc: LexicalContext, flag: number): Block;
    setFlags(lc: LexicalContext, flags: number): Block;
    setStatements(lc: LexicalContext, statements: Statement[]): Block;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}
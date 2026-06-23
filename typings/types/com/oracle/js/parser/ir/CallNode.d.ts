import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { IdentNode } from '../../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Module$ImportPhase } from '../../../../../com/oracle/js/parser/ir/Module$ImportPhase.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { OptionalExpression } from '../../../../../com/oracle/js/parser/ir/OptionalExpression.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CallNode extends OptionalExpression {
    static forCall(paramlineNumber: number, paramtoken: number, paramstart: number, paramfinish: number, paramfunction: Expression, paramargs: Expression[]): Expression;
    static forCall(paramlineNumber: number, paramtoken: number, paramstart: number, paramfinish: number, paramfunction: Expression, paramargs: Expression[], paramoptional: boolean, paramoptionalChain: boolean): Expression;
    static forCall(paramlineNumber: number, paramtoken: number, paramstart: number, paramfinish: number, paramfunction: Expression, paramargs: Expression[], paramoptional: boolean, paramoptionalChain: boolean, paramisEval: boolean, paramisApplyArguments: boolean, paramisDefaultDerivedConstructorSuperCall: boolean): Expression;
    static forImport(paramlineNumber: number, paramtoken: number, paramstart: number, paramfinish: number, paramimportIdent: IdentNode, paramargs: Expression[], paramphase: Module$ImportPhase): Expression;
    static forNew(paramlineNumber: number, paramtoken: number, paramstart: number, paramfinish: number, paramfunction: Expression, paramargs: Expression[]): Expression;
    static forTaggedTemplateLiteral(paramlineNumber: number, paramtoken: number, paramstart: number, paramfinish: number, paramfunction: Expression, paramargs: Expression[]): Expression;
    private constructor(callNode: CallNode, function_: Expression, args: Expression[], flags: number)
    private constructor(lineNumber: number, token: number, start: number, finish: number, function_: Expression, args: Expression[], flags: number)
    readonly args: Expression[];
    // private flags: number;
    readonly function: Expression;
    readonly lineNumber: number;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getArgs(): Expression[];
    getFunction(): Expression;
    getLineNumber(): number;
    isApplyArguments(): boolean;
    isDefaultDerivedConstructorSuperCall(): boolean;
    isEval(): boolean;
    isImport(): boolean;
    isImportDefer(): boolean;
    isImportSource(): boolean;
    isNew(): boolean;
    isOptional(): boolean;
    isOptionalChain(): boolean;
    isTaggedTemplateLiteral(): boolean;
    setArgs(args: Expression[]): CallNode;
    setFunction(function_: Expression): CallNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}
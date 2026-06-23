import type { Identifier } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { Expression$ExpressionType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression$ExpressionType.d.ts'
import type { TerminalExpression } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/TerminalExpression.d.ts'
import type { FunctionCallExpression$FunctionReferenceType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/FunctionCallExpression$FunctionReferenceType.d.ts'
import type { TypeSpecifier } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/TypeSpecifier.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class FunctionCallExpression extends TerminalExpression {
    static clone(paramarg0: ASTNode | null): ASTNode | null;
    static clone(paramarg0: (ASTNode | null)[]): Stream<ASTNode>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: Identifier)
    private constructor(arg0: Identifier, arg1: TypeSpecifier, arg2: FunctionCallExpression$FunctionReferenceType, arg3: Stream<Expression>)
    constructor(arg0: Identifier, arg1: Stream<Expression>)
    constructor(arg0: TypeSpecifier)
    constructor(arg0: TypeSpecifier, arg1: Stream<Expression>)
    functionName: Identifier;
    functionSpecifier: TypeSpecifier;
    parameters: Expression[];
    referenceType: FunctionCallExpression$FunctionReferenceType;
    clone(): FunctionCallExpression;
    cloneInto(arg0: Root): FunctionCallExpression;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    expressionAccept<R extends unknown>(arg0: ASTVisitor<R>): R;
    getExpressionType(): Expression$ExpressionType;
    getFunctionName(): Identifier;
    getFunctionSpecifier(): TypeSpecifier;
    getParameters(): Expression[];
    getReference(): ASTNode;
    getReferenceType(): FunctionCallExpression$FunctionReferenceType;
    setFunctionName(arg0: Identifier): void;
    setFunctionSpecifier(arg0: TypeSpecifier): void;
    useFunctionName(arg0: Identifier): void;
    useFunctionSpecifier(arg0: TypeSpecifier): void;
}
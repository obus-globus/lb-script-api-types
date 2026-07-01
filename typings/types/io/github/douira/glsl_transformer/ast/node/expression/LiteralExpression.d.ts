import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression$ExpressionType } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression$ExpressionType.d.ts'
import type { LiteralExpression$IntegerFormat } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/LiteralExpression$IntegerFormat.d.ts'
import type { TerminalExpression } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/TerminalExpression.d.ts'
import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Type } from '../../../../../../../io/github/douira/glsl_transformer/util/Type.d.ts'
import type { Type$NumberType } from '../../../../../../../io/github/douira/glsl_transformer/util/Type$NumberType.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
export class LiteralExpression extends TerminalExpression {
    static clone(paramarg0: ASTNode | null): ASTNode | null;
    static clone(paramarg0: (ASTNode | null)[]): Stream<ASTNode>;
    static getDefaultValue(paramarg0: Type$NumberType): LiteralExpression;
    static getDefaultValue(paramarg0: Type): LiteralExpression;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: Type, arg1: number)
    constructor(arg0: Type, arg1: number)
    constructor(arg0: Type, arg1: number, arg2: LiteralExpression$IntegerFormat)
    constructor(arg0: boolean)
    constructor(arg0: string)
    // private booleanValue: boolean;
    // private floatingValue: number;
    readonly integerFormat: LiteralExpression$IntegerFormat;
    // private integerValue: number;
    // private literalType: Type;
    // private stringValue: string;
    changeBoolean(arg0: boolean): void;
    changeFloating(arg0: number): void;
    changeInteger(arg0: number): void;
    changeString(arg0: string): void;
    clone(): LiteralExpression;
    cloneInto(arg0: Root): LiteralExpression;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    expressionAccept<R extends unknown>(arg0: ASTVisitor<R>): R;
    getBoolean(): boolean;
    getExpressionType(): Expression$ExpressionType;
    getFloating(): number;
    getInteger(): number;
    getIntegerFormat(): LiteralExpression$IntegerFormat;
    getIntegerRadix(): number;
    getNumber(): Number;
    getNumberType(): Type$NumberType;
    getString(): string;
    getType(): Type;
    isBoolean(): boolean;
    isFloatingPoint(): boolean;
    isInteger(): boolean;
    isNonZero(): boolean;
    isPositive(): boolean;
    isString(): boolean;
    setBoolean(arg0: boolean): void;
    setFloating(arg0: Type, arg1: number): void;
    setFloating(arg0: number): void;
    setInteger(arg0: Type, arg1: number): void;
    setInteger(arg0: Type, arg1: number, arg2: LiteralExpression$IntegerFormat): void;
    setInteger(arg0: number): void;
    setIntegerFormat(arg0: LiteralExpression$IntegerFormat): void;
    setString(arg0: string): void;
    // private validateLiteralType(arg0: Type): void;
}
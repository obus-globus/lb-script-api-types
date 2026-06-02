import type { ExpressionSource } from '../../../../../com/llamalad7/mixinextras/expression/impl/ExpressionSource.d.ts'
import type { ArrayAccessExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/ArrayAccessExpression.d.ts'
import type { ArrayLiteralExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/ArrayLiteralExpression.d.ts'
import type { ArrayStoreExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/ArrayStoreExpression.d.ts'
import type { BinaryExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/BinaryExpression.d.ts'
import type { BooleanLiteralExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/BooleanLiteralExpression.d.ts'
import type { BoundMethodReferenceExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/BoundMethodReferenceExpression.d.ts'
import type { CapturingExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/CapturingExpression.d.ts'
import type { CastExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/CastExpression.d.ts'
import type { ClassConstantExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/ClassConstantExpression.d.ts'
import type { ComparisonExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/ComparisonExpression.d.ts'
import type { ConstructorReferenceExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/ConstructorReferenceExpression.d.ts'
import type { DecimalLiteralExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/DecimalLiteralExpression.d.ts'
import type { Expression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/Expression.d.ts'
import type { FreeMethodReferenceExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/FreeMethodReferenceExpression.d.ts'
import type { IdentifierAssignmentExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/IdentifierAssignmentExpression.d.ts'
import type { IdentifierExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/IdentifierExpression.d.ts'
import type { InstanceofExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/InstanceofExpression.d.ts'
import type { InstantiationExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/InstantiationExpression.d.ts'
import type { IntLiteralExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/IntLiteralExpression.d.ts'
import type { MemberAccessExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/MemberAccessExpression.d.ts'
import type { MemberAssignmentExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/MemberAssignmentExpression.d.ts'
import type { MethodCallExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/MethodCallExpression.d.ts'
import type { NewArrayExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/NewArrayExpression.d.ts'
import type { NullLiteralExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/NullLiteralExpression.d.ts'
import type { ReturnExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/ReturnExpression.d.ts'
import type { StaticMethodCallExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/StaticMethodCallExpression.d.ts'
import type { StringLiteralExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/StringLiteralExpression.d.ts'
import type { SuperCallExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/SuperCallExpression.d.ts'
import type { ThisExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/ThisExpression.d.ts'
import type { ThrowExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/ThrowExpression.d.ts'
import type { UnaryExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/UnaryExpression.d.ts'
import type { WildcardExpression } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/expressions/WildcardExpression.d.ts'
import type { MemberIdentifier } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/identifiers/MemberIdentifier.d.ts'
import type { TypeIdentifier } from '../../../../../com/llamalad7/mixinextras/expression/impl/ast/identifiers/TypeIdentifier.d.ts'
import type { ParserRuleContext } from '../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ParserRuleContext.d.ts'
import type { ExpressionParser$AdditiveExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$AdditiveExpressionContext.d.ts'
import type { ExpressionParser$ArgumentsContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ArgumentsContext.d.ts'
import type { ExpressionParser$ArrayAccessExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ArrayAccessExpressionContext.d.ts'
import type { ExpressionParser$ArrayLitExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ArrayLitExpressionContext.d.ts'
import type { ExpressionParser$ArrayStoreStatementContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ArrayStoreStatementContext.d.ts'
import type { ExpressionParser$BitwiseAndExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$BitwiseAndExpressionContext.d.ts'
import type { ExpressionParser$BitwiseOrExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$BitwiseOrExpressionContext.d.ts'
import type { ExpressionParser$BitwiseXorExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$BitwiseXorExpressionContext.d.ts'
import type { ExpressionParser$BoolLitExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$BoolLitExpressionContext.d.ts'
import type { ExpressionParser$BoundMethodReferenceExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$BoundMethodReferenceExpressionContext.d.ts'
import type { ExpressionParser$CapturingExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$CapturingExpressionContext.d.ts'
import type { ExpressionParser$CastExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$CastExpressionContext.d.ts'
import type { ExpressionParser$ClassConstantExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ClassConstantExpressionContext.d.ts'
import type { ExpressionParser$ComparisonExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ComparisonExpressionContext.d.ts'
import type { ExpressionParser$ConstructorReferenceExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ConstructorReferenceExpressionContext.d.ts'
import type { ExpressionParser$DecimalLitExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$DecimalLitExpressionContext.d.ts'
import type { ExpressionParser$EqualityExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$EqualityExpressionContext.d.ts'
import type { ExpressionParser$ExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ExpressionContext.d.ts'
import type { ExpressionParser$ExpressionStatementContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ExpressionStatementContext.d.ts'
import type { ExpressionParser$FreeMethodReferenceExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$FreeMethodReferenceExpressionContext.d.ts'
import type { ExpressionParser$IdentifierAssignmentStatementContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$IdentifierAssignmentStatementContext.d.ts'
import type { ExpressionParser$IdentifierExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$IdentifierExpressionContext.d.ts'
import type { ExpressionParser$InstanceofExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$InstanceofExpressionContext.d.ts'
import type { ExpressionParser$InstantiationExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$InstantiationExpressionContext.d.ts'
import type { ExpressionParser$IntLitExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$IntLitExpressionContext.d.ts'
import type { ExpressionParser$MemberAccessExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$MemberAccessExpressionContext.d.ts'
import type { ExpressionParser$MemberAssignmentStatementContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$MemberAssignmentStatementContext.d.ts'
import type { ExpressionParser$MethodCallExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$MethodCallExpressionContext.d.ts'
import type { ExpressionParser$MultiplicativeExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$MultiplicativeExpressionContext.d.ts'
import type { ExpressionParser$NameContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NameContext.d.ts'
import type { ExpressionParser$NameWithDimsContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NameWithDimsContext.d.ts'
import type { ExpressionParser$NewArrayExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NewArrayExpressionContext.d.ts'
import type { ExpressionParser$NonEmptyArgumentsContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NonEmptyArgumentsContext.d.ts'
import type { ExpressionParser$NullExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NullExpressionContext.d.ts'
import type { ExpressionParser$ParenthesizedExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ParenthesizedExpressionContext.d.ts'
import type { ExpressionParser$ReturnStatementContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ReturnStatementContext.d.ts'
import type { ExpressionParser$ShiftExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ShiftExpressionContext.d.ts'
import type { ExpressionParser$StatementContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$StatementContext.d.ts'
import type { ExpressionParser$StaticMethodCallExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$StaticMethodCallExpressionContext.d.ts'
import type { ExpressionParser$StringLitExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$StringLitExpressionContext.d.ts'
import type { ExpressionParser$SuperCallExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$SuperCallExpressionContext.d.ts'
import type { ExpressionParser$ThisExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ThisExpressionContext.d.ts'
import type { ExpressionParser$ThrowStatementContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ThrowStatementContext.d.ts'
import type { ExpressionParser$UnaryExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$UnaryExpressionContext.d.ts'
import type { ExpressionParser$WildcardExpressionContext } from '../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$WildcardExpressionContext.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExpressionParserFacade extends Object {
    static parse(paramarg0: string): Expression;
    constructor(arg0: string)
    // private expression: string;
    // private hasExplicitCapture: boolean;
    // private getSource(arg0: ParserRuleContext): ExpressionSource;
    // private parse(arg0: ExpressionParser$AdditiveExpressionContext): BinaryExpression;
    // private parse(arg0: ExpressionParser$ArgumentsContext): Expression[];
    // private parse(arg0: ExpressionParser$ArrayAccessExpressionContext): ArrayAccessExpression;
    // private parse(arg0: ExpressionParser$ArrayLitExpressionContext): ArrayLiteralExpression;
    // private parse(arg0: ExpressionParser$ArrayStoreStatementContext): ArrayStoreExpression;
    // private parse(arg0: ExpressionParser$BitwiseAndExpressionContext): BinaryExpression;
    // private parse(arg0: ExpressionParser$BitwiseOrExpressionContext): BinaryExpression;
    // private parse(arg0: ExpressionParser$BitwiseXorExpressionContext): BinaryExpression;
    // private parse(arg0: ExpressionParser$BoolLitExpressionContext): BooleanLiteralExpression;
    // private parse(arg0: ExpressionParser$BoundMethodReferenceExpressionContext): BoundMethodReferenceExpression;
    // private parse(arg0: ExpressionParser$CapturingExpressionContext): CapturingExpression;
    // private parse(arg0: ExpressionParser$CastExpressionContext): CastExpression;
    // private parse(arg0: ExpressionParser$ClassConstantExpressionContext): ClassConstantExpression;
    // private parse(arg0: ExpressionParser$ComparisonExpressionContext): ComparisonExpression;
    // private parse(arg0: ExpressionParser$ConstructorReferenceExpressionContext): ConstructorReferenceExpression;
    // private parse(arg0: ExpressionParser$DecimalLitExpressionContext): DecimalLiteralExpression;
    // private parse(arg0: ExpressionParser$EqualityExpressionContext): ComparisonExpression;
    // private parse(arg0: ExpressionParser$ExpressionContext): Expression;
    // private parse(arg0: ExpressionParser$ExpressionStatementContext): Expression;
    // private parse(arg0: ExpressionParser$FreeMethodReferenceExpressionContext): FreeMethodReferenceExpression;
    // private parse(arg0: ExpressionParser$IdentifierAssignmentStatementContext): IdentifierAssignmentExpression;
    // private parse(arg0: ExpressionParser$IdentifierExpressionContext): IdentifierExpression;
    // private parse(arg0: ExpressionParser$InstanceofExpressionContext): InstanceofExpression;
    // private parse(arg0: ExpressionParser$InstantiationExpressionContext): InstantiationExpression;
    // private parse(arg0: ExpressionParser$IntLitExpressionContext): IntLiteralExpression;
    // private parse(arg0: ExpressionParser$MemberAccessExpressionContext): MemberAccessExpression;
    // private parse(arg0: ExpressionParser$MemberAssignmentStatementContext): MemberAssignmentExpression;
    // private parse(arg0: ExpressionParser$MethodCallExpressionContext): MethodCallExpression;
    // private parse(arg0: ExpressionParser$MultiplicativeExpressionContext): BinaryExpression;
    // private parse(arg0: ExpressionParser$NewArrayExpressionContext): NewArrayExpression;
    // private parse(arg0: ExpressionParser$NonEmptyArgumentsContext): Expression[];
    // private parse(arg0: ExpressionParser$NullExpressionContext): NullLiteralExpression;
    // private parse(arg0: ExpressionParser$ParenthesizedExpressionContext): Expression;
    // private parse(arg0: ExpressionParser$ReturnStatementContext): ReturnExpression;
    // private parse(arg0: ExpressionParser$ShiftExpressionContext): BinaryExpression;
    // private parse(arg0: ExpressionParser$StatementContext): Expression;
    // private parse(arg0: ExpressionParser$StaticMethodCallExpressionContext): StaticMethodCallExpression;
    // private parse(arg0: ExpressionParser$StringLitExpressionContext): StringLiteralExpression;
    // private parse(arg0: ExpressionParser$SuperCallExpressionContext): SuperCallExpression;
    // private parse(arg0: ExpressionParser$ThisExpressionContext): ThisExpression;
    // private parse(arg0: ExpressionParser$ThrowStatementContext): ThrowExpression;
    // private parse(arg0: ExpressionParser$UnaryExpressionContext): UnaryExpression;
    // private parse(arg0: ExpressionParser$WildcardExpressionContext): WildcardExpression;
    // private parse(arg0: ExpressionParser$ExpressionContext[]): Expression[];
    // private parseMemberId(arg0: ExpressionParser$NameContext): MemberIdentifier;
    // private parseTypeId(arg0: ExpressionParser$NameContext): TypeIdentifier;
    // private parseTypeId(arg0: ExpressionParser$NameWithDimsContext): TypeIdentifier;
    // private unimplemented(): RuntimeException;
}
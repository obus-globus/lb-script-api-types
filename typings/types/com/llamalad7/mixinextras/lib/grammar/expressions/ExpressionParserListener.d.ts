import type { ParserRuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ParserRuleContext.d.ts'
import type { ErrorNode } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ErrorNode.d.ts'
import type { ParseTreeListener } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ParseTreeListener.d.ts'
import type { TerminalNode } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/TerminalNode.d.ts'
import type { ExpressionParser$AdditiveExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$AdditiveExpressionContext.d.ts'
import type { ExpressionParser$ArgumentsContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ArgumentsContext.d.ts'
import type { ExpressionParser$ArrayAccessExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ArrayAccessExpressionContext.d.ts'
import type { ExpressionParser$ArrayLitExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ArrayLitExpressionContext.d.ts'
import type { ExpressionParser$ArrayStoreStatementContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ArrayStoreStatementContext.d.ts'
import type { ExpressionParser$BitwiseAndExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$BitwiseAndExpressionContext.d.ts'
import type { ExpressionParser$BitwiseOrExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$BitwiseOrExpressionContext.d.ts'
import type { ExpressionParser$BitwiseXorExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$BitwiseXorExpressionContext.d.ts'
import type { ExpressionParser$BoolLitExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$BoolLitExpressionContext.d.ts'
import type { ExpressionParser$BoundMethodReferenceExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$BoundMethodReferenceExpressionContext.d.ts'
import type { ExpressionParser$CapturingExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$CapturingExpressionContext.d.ts'
import type { ExpressionParser$CastExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$CastExpressionContext.d.ts'
import type { ExpressionParser$ClassConstantExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ClassConstantExpressionContext.d.ts'
import type { ExpressionParser$ComparisonExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ComparisonExpressionContext.d.ts'
import type { ExpressionParser$ConstructorReferenceExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ConstructorReferenceExpressionContext.d.ts'
import type { ExpressionParser$DecimalLitExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$DecimalLitExpressionContext.d.ts'
import type { ExpressionParser$EqualityExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$EqualityExpressionContext.d.ts'
import type { ExpressionParser$ExpressionStatementContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ExpressionStatementContext.d.ts'
import type { ExpressionParser$FreeMethodReferenceExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$FreeMethodReferenceExpressionContext.d.ts'
import type { ExpressionParser$IdentifierAssignmentStatementContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$IdentifierAssignmentStatementContext.d.ts'
import type { ExpressionParser$IdentifierExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$IdentifierExpressionContext.d.ts'
import type { ExpressionParser$IdentifierNameContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$IdentifierNameContext.d.ts'
import type { ExpressionParser$InstanceofExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$InstanceofExpressionContext.d.ts'
import type { ExpressionParser$InstantiationExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$InstantiationExpressionContext.d.ts'
import type { ExpressionParser$IntLitExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$IntLitExpressionContext.d.ts'
import type { ExpressionParser$MemberAccessExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$MemberAccessExpressionContext.d.ts'
import type { ExpressionParser$MemberAssignmentStatementContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$MemberAssignmentStatementContext.d.ts'
import type { ExpressionParser$MethodCallExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$MethodCallExpressionContext.d.ts'
import type { ExpressionParser$MultiplicativeExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$MultiplicativeExpressionContext.d.ts'
import type { ExpressionParser$NameWithDimsContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NameWithDimsContext.d.ts'
import type { ExpressionParser$NewArrayExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NewArrayExpressionContext.d.ts'
import type { ExpressionParser$NonEmptyArgumentsContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NonEmptyArgumentsContext.d.ts'
import type { ExpressionParser$NullExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$NullExpressionContext.d.ts'
import type { ExpressionParser$ParenthesizedExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ParenthesizedExpressionContext.d.ts'
import type { ExpressionParser$ReturnStatementContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ReturnStatementContext.d.ts'
import type { ExpressionParser$RootContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$RootContext.d.ts'
import type { ExpressionParser$ShiftExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ShiftExpressionContext.d.ts'
import type { ExpressionParser$StaticMethodCallExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$StaticMethodCallExpressionContext.d.ts'
import type { ExpressionParser$StringLitExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$StringLitExpressionContext.d.ts'
import type { ExpressionParser$SuperCallExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$SuperCallExpressionContext.d.ts'
import type { ExpressionParser$ThisExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ThisExpressionContext.d.ts'
import type { ExpressionParser$ThrowStatementContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$ThrowStatementContext.d.ts'
import type { ExpressionParser$UnaryExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$UnaryExpressionContext.d.ts'
import type { ExpressionParser$WildcardExpressionContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$WildcardExpressionContext.d.ts'
import type { ExpressionParser$WildcardNameContext } from '../../../../../../com/llamalad7/mixinextras/lib/grammar/expressions/ExpressionParser$WildcardNameContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ExpressionParserListener extends ParseTreeListener, Object{
    enterAdditiveExpression(arg0: ExpressionParser$AdditiveExpressionContext): void;
    enterArguments(arg0: ExpressionParser$ArgumentsContext): void;
    enterArrayAccessExpression(arg0: ExpressionParser$ArrayAccessExpressionContext): void;
    enterArrayLitExpression(arg0: ExpressionParser$ArrayLitExpressionContext): void;
    enterArrayStoreStatement(arg0: ExpressionParser$ArrayStoreStatementContext): void;
    enterBitwiseAndExpression(arg0: ExpressionParser$BitwiseAndExpressionContext): void;
    enterBitwiseOrExpression(arg0: ExpressionParser$BitwiseOrExpressionContext): void;
    enterBitwiseXorExpression(arg0: ExpressionParser$BitwiseXorExpressionContext): void;
    enterBoolLitExpression(arg0: ExpressionParser$BoolLitExpressionContext): void;
    enterBoundMethodReferenceExpression(arg0: ExpressionParser$BoundMethodReferenceExpressionContext): void;
    enterCapturingExpression(arg0: ExpressionParser$CapturingExpressionContext): void;
    enterCastExpression(arg0: ExpressionParser$CastExpressionContext): void;
    enterClassConstantExpression(arg0: ExpressionParser$ClassConstantExpressionContext): void;
    enterComparisonExpression(arg0: ExpressionParser$ComparisonExpressionContext): void;
    enterConstructorReferenceExpression(arg0: ExpressionParser$ConstructorReferenceExpressionContext): void;
    enterDecimalLitExpression(arg0: ExpressionParser$DecimalLitExpressionContext): void;
    enterEqualityExpression(arg0: ExpressionParser$EqualityExpressionContext): void;
    enterEveryRule(arg0: ParserRuleContext): void;
    enterExpressionStatement(arg0: ExpressionParser$ExpressionStatementContext): void;
    enterFreeMethodReferenceExpression(arg0: ExpressionParser$FreeMethodReferenceExpressionContext): void;
    enterIdentifierAssignmentStatement(arg0: ExpressionParser$IdentifierAssignmentStatementContext): void;
    enterIdentifierExpression(arg0: ExpressionParser$IdentifierExpressionContext): void;
    enterIdentifierName(arg0: ExpressionParser$IdentifierNameContext): void;
    enterInstanceofExpression(arg0: ExpressionParser$InstanceofExpressionContext): void;
    enterInstantiationExpression(arg0: ExpressionParser$InstantiationExpressionContext): void;
    enterIntLitExpression(arg0: ExpressionParser$IntLitExpressionContext): void;
    enterMemberAccessExpression(arg0: ExpressionParser$MemberAccessExpressionContext): void;
    enterMemberAssignmentStatement(arg0: ExpressionParser$MemberAssignmentStatementContext): void;
    enterMethodCallExpression(arg0: ExpressionParser$MethodCallExpressionContext): void;
    enterMultiplicativeExpression(arg0: ExpressionParser$MultiplicativeExpressionContext): void;
    enterNameWithDims(arg0: ExpressionParser$NameWithDimsContext): void;
    enterNewArrayExpression(arg0: ExpressionParser$NewArrayExpressionContext): void;
    enterNonEmptyArguments(arg0: ExpressionParser$NonEmptyArgumentsContext): void;
    enterNullExpression(arg0: ExpressionParser$NullExpressionContext): void;
    enterParenthesizedExpression(arg0: ExpressionParser$ParenthesizedExpressionContext): void;
    enterReturnStatement(arg0: ExpressionParser$ReturnStatementContext): void;
    enterRoot(arg0: ExpressionParser$RootContext): void;
    enterShiftExpression(arg0: ExpressionParser$ShiftExpressionContext): void;
    enterStaticMethodCallExpression(arg0: ExpressionParser$StaticMethodCallExpressionContext): void;
    enterStringLitExpression(arg0: ExpressionParser$StringLitExpressionContext): void;
    enterSuperCallExpression(arg0: ExpressionParser$SuperCallExpressionContext): void;
    enterThisExpression(arg0: ExpressionParser$ThisExpressionContext): void;
    enterThrowStatement(arg0: ExpressionParser$ThrowStatementContext): void;
    enterUnaryExpression(arg0: ExpressionParser$UnaryExpressionContext): void;
    enterWildcardExpression(arg0: ExpressionParser$WildcardExpressionContext): void;
    enterWildcardName(arg0: ExpressionParser$WildcardNameContext): void;
    exitAdditiveExpression(arg0: ExpressionParser$AdditiveExpressionContext): void;
    exitArguments(arg0: ExpressionParser$ArgumentsContext): void;
    exitArrayAccessExpression(arg0: ExpressionParser$ArrayAccessExpressionContext): void;
    exitArrayLitExpression(arg0: ExpressionParser$ArrayLitExpressionContext): void;
    exitArrayStoreStatement(arg0: ExpressionParser$ArrayStoreStatementContext): void;
    exitBitwiseAndExpression(arg0: ExpressionParser$BitwiseAndExpressionContext): void;
    exitBitwiseOrExpression(arg0: ExpressionParser$BitwiseOrExpressionContext): void;
    exitBitwiseXorExpression(arg0: ExpressionParser$BitwiseXorExpressionContext): void;
    exitBoolLitExpression(arg0: ExpressionParser$BoolLitExpressionContext): void;
    exitBoundMethodReferenceExpression(arg0: ExpressionParser$BoundMethodReferenceExpressionContext): void;
    exitCapturingExpression(arg0: ExpressionParser$CapturingExpressionContext): void;
    exitCastExpression(arg0: ExpressionParser$CastExpressionContext): void;
    exitClassConstantExpression(arg0: ExpressionParser$ClassConstantExpressionContext): void;
    exitComparisonExpression(arg0: ExpressionParser$ComparisonExpressionContext): void;
    exitConstructorReferenceExpression(arg0: ExpressionParser$ConstructorReferenceExpressionContext): void;
    exitDecimalLitExpression(arg0: ExpressionParser$DecimalLitExpressionContext): void;
    exitEqualityExpression(arg0: ExpressionParser$EqualityExpressionContext): void;
    exitEveryRule(arg0: ParserRuleContext): void;
    exitExpressionStatement(arg0: ExpressionParser$ExpressionStatementContext): void;
    exitFreeMethodReferenceExpression(arg0: ExpressionParser$FreeMethodReferenceExpressionContext): void;
    exitIdentifierAssignmentStatement(arg0: ExpressionParser$IdentifierAssignmentStatementContext): void;
    exitIdentifierExpression(arg0: ExpressionParser$IdentifierExpressionContext): void;
    exitIdentifierName(arg0: ExpressionParser$IdentifierNameContext): void;
    exitInstanceofExpression(arg0: ExpressionParser$InstanceofExpressionContext): void;
    exitInstantiationExpression(arg0: ExpressionParser$InstantiationExpressionContext): void;
    exitIntLitExpression(arg0: ExpressionParser$IntLitExpressionContext): void;
    exitMemberAccessExpression(arg0: ExpressionParser$MemberAccessExpressionContext): void;
    exitMemberAssignmentStatement(arg0: ExpressionParser$MemberAssignmentStatementContext): void;
    exitMethodCallExpression(arg0: ExpressionParser$MethodCallExpressionContext): void;
    exitMultiplicativeExpression(arg0: ExpressionParser$MultiplicativeExpressionContext): void;
    exitNameWithDims(arg0: ExpressionParser$NameWithDimsContext): void;
    exitNewArrayExpression(arg0: ExpressionParser$NewArrayExpressionContext): void;
    exitNonEmptyArguments(arg0: ExpressionParser$NonEmptyArgumentsContext): void;
    exitNullExpression(arg0: ExpressionParser$NullExpressionContext): void;
    exitParenthesizedExpression(arg0: ExpressionParser$ParenthesizedExpressionContext): void;
    exitReturnStatement(arg0: ExpressionParser$ReturnStatementContext): void;
    exitRoot(arg0: ExpressionParser$RootContext): void;
    exitShiftExpression(arg0: ExpressionParser$ShiftExpressionContext): void;
    exitStaticMethodCallExpression(arg0: ExpressionParser$StaticMethodCallExpressionContext): void;
    exitStringLitExpression(arg0: ExpressionParser$StringLitExpressionContext): void;
    exitSuperCallExpression(arg0: ExpressionParser$SuperCallExpressionContext): void;
    exitThisExpression(arg0: ExpressionParser$ThisExpressionContext): void;
    exitThrowStatement(arg0: ExpressionParser$ThrowStatementContext): void;
    exitUnaryExpression(arg0: ExpressionParser$UnaryExpressionContext): void;
    exitWildcardExpression(arg0: ExpressionParser$WildcardExpressionContext): void;
    exitWildcardName(arg0: ExpressionParser$WildcardNameContext): void;
    visitErrorNode(arg0: ErrorNode): void;
    visitTerminal(arg0: TerminalNode): void;
}
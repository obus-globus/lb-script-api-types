import type { IterationConditionInitializer } from '../../../../../../io/github/douira/glsl_transformer/ast/node/IterationConditionInitializer.d.ts'
import type { TranslationUnit } from '../../../../../../io/github/douira/glsl_transformer/ast/node/TranslationUnit.d.ts'
import type { InnerASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/InnerASTNode.d.ts'
import type { Declaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/Declaration.d.ts'
import type { DeclarationMember } from '../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/DeclarationMember.d.ts'
import type { FunctionDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/FunctionDeclaration.d.ts'
import type { FunctionParameter } from '../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/FunctionParameter.d.ts'
import type { InterfaceBlockDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/InterfaceBlockDeclaration.d.ts'
import type { PrecisionDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/PrecisionDeclaration.d.ts'
import type { TypeAndInitDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/TypeAndInitDeclaration.d.ts'
import type { VariableDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/VariableDeclaration.d.ts'
import type { ConditionExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/ConditionExpression.d.ts'
import type { Expression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { LiteralExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/LiteralExpression.d.ts'
import type { ManyExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/ManyExpression.d.ts'
import type { ReferenceExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/ReferenceExpression.d.ts'
import type { SequenceExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/SequenceExpression.d.ts'
import type { TernaryExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/TernaryExpression.d.ts'
import type { AdditionAssignmentExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/AdditionAssignmentExpression.d.ts'
import type { AdditionExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/AdditionExpression.d.ts'
import type { ArrayAccessExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/ArrayAccessExpression.d.ts'
import type { AssignmentExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/AssignmentExpression.d.ts'
import type { BinaryExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/BinaryExpression.d.ts'
import type { BitwiseAndAssignmentExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/BitwiseAndAssignmentExpression.d.ts'
import type { BitwiseAndExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/BitwiseAndExpression.d.ts'
import type { BitwiseOrAssignmentExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/BitwiseOrAssignmentExpression.d.ts'
import type { BitwiseOrExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/BitwiseOrExpression.d.ts'
import type { BitwiseXorAssignmentExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/BitwiseXorAssignmentExpression.d.ts'
import type { BitwiseXorExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/BitwiseXorExpression.d.ts'
import type { BooleanAndExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/BooleanAndExpression.d.ts'
import type { BooleanOrExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/BooleanOrExpression.d.ts'
import type { BooleanXorExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/BooleanXorExpression.d.ts'
import type { DivisionAssignmentExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/DivisionAssignmentExpression.d.ts'
import type { DivisionExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/DivisionExpression.d.ts'
import type { EqualityExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/EqualityExpression.d.ts'
import type { GreaterThanEqualExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/GreaterThanEqualExpression.d.ts'
import type { GreaterThanExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/GreaterThanExpression.d.ts'
import type { InequalityExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/InequalityExpression.d.ts'
import type { LeftShiftAssignmentExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/LeftShiftAssignmentExpression.d.ts'
import type { LeftShiftExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/LeftShiftExpression.d.ts'
import type { LessThanEqualExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/LessThanEqualExpression.d.ts'
import type { LessThanExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/LessThanExpression.d.ts'
import type { ModuloAssignmentExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/ModuloAssignmentExpression.d.ts'
import type { ModuloExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/ModuloExpression.d.ts'
import type { MultiplicationAssignmentExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/MultiplicationAssignmentExpression.d.ts'
import type { MultiplicationExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/MultiplicationExpression.d.ts'
import type { RightShiftAssignmentExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/RightShiftAssignmentExpression.d.ts'
import type { RightShiftExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/RightShiftExpression.d.ts'
import type { SubtractionAssignmentExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/SubtractionAssignmentExpression.d.ts'
import type { SubtractionExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/binary/SubtractionExpression.d.ts'
import type { BitwiseNotExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/BitwiseNotExpression.d.ts'
import type { BooleanNotExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/BooleanNotExpression.d.ts'
import type { DecrementPostfixExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/DecrementPostfixExpression.d.ts'
import type { DecrementPrefixExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/DecrementPrefixExpression.d.ts'
import type { FunctionCallExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/FunctionCallExpression.d.ts'
import type { GroupingExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/GroupingExpression.d.ts'
import type { IdentityExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/IdentityExpression.d.ts'
import type { IncrementPostfixExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/IncrementPostfixExpression.d.ts'
import type { IncrementPrefixExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/IncrementPrefixExpression.d.ts'
import type { LengthAccessExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/LengthAccessExpression.d.ts'
import type { MemberAccessExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/MemberAccessExpression.d.ts'
import type { NegationExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/NegationExpression.d.ts'
import type { UnaryExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/unary/UnaryExpression.d.ts'
import type { DeclarationExternalDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/DeclarationExternalDeclaration.d.ts'
import type { ExternalDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { FunctionDefinition } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/FunctionDefinition.d.ts'
import type { LayoutDefaults } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/LayoutDefaults.d.ts'
import type { CompoundStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/CompoundStatement.d.ts'
import type { ManyStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/ManyStatement.d.ts'
import type { Statement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement.d.ts'
import type { DoWhileLoopStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/loop/DoWhileLoopStatement.d.ts'
import type { ForLoopStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/loop/ForLoopStatement.d.ts'
import type { LoopStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/loop/LoopStatement.d.ts'
import type { WhileLoopStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/loop/WhileLoopStatement.d.ts'
import type { SelectionStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/selection/SelectionStatement.d.ts'
import type { SwitchStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/selection/SwitchStatement.d.ts'
import type { CaseLabelStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/CaseLabelStatement.d.ts'
import type { CaseStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/CaseStatement.d.ts'
import type { DeclarationStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/DeclarationStatement.d.ts'
import type { ExpressionStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/ExpressionStatement.d.ts'
import type { SemiTerminalStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/SemiTerminalStatement.d.ts'
import type { FullySpecifiedType } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/FullySpecifiedType.d.ts'
import type { ExpressionInitializer } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/initializer/ExpressionInitializer.d.ts'
import type { Initializer } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/initializer/Initializer.d.ts'
import type { NestedInitializer } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/initializer/NestedInitializer.d.ts'
import type { LayoutQualifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/LayoutQualifier.d.ts'
import type { LayoutQualifierPart } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/LayoutQualifierPart.d.ts'
import type { NamedLayoutQualifierPart } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/NamedLayoutQualifierPart.d.ts'
import type { StorageQualifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/StorageQualifier.d.ts'
import type { TypeQualifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/TypeQualifier.d.ts'
import type { TypeQualifierPart } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/TypeQualifierPart.d.ts'
import type { ArraySpecifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/ArraySpecifier.d.ts'
import type { FunctionPrototype } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/FunctionPrototype.d.ts'
import type { TypeReference } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/TypeReference.d.ts'
import type { TypeSpecifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/TypeSpecifier.d.ts'
import type { StructBody } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/struct/StructBody.d.ts'
import type { StructDeclarator } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/struct/StructDeclarator.d.ts'
import type { StructMember } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/struct/StructMember.d.ts'
import type { StructSpecifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/struct/StructSpecifier.d.ts'
import type { GeneralASTListener } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/GeneralASTListener.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ASTListener extends GeneralASTListener, Object{
    afterEnterEveryNode(arg0: InnerASTNode): void;
    beforeExitEveryNode(arg0: InnerASTNode): void;
    enterAdditionAssignmentExpression(arg0: AdditionAssignmentExpression): void;
    enterAdditionExpression(arg0: AdditionExpression): void;
    enterArrayAccessExpression(arg0: ArrayAccessExpression): void;
    enterArraySpecifier(arg0: ArraySpecifier): void;
    enterAssignmentExpression(arg0: AssignmentExpression): void;
    enterBinaryExpression(arg0: BinaryExpression): void;
    enterBitwiseAndAssignmentExpression(arg0: BitwiseAndAssignmentExpression): void;
    enterBitwiseAndExpression(arg0: BitwiseAndExpression): void;
    enterBitwiseNotExpression(arg0: BitwiseNotExpression): void;
    enterBitwiseOrAssignmentExpression(arg0: BitwiseOrAssignmentExpression): void;
    enterBitwiseOrExpression(arg0: BitwiseOrExpression): void;
    enterBitwiseXorAssignmentExpression(arg0: BitwiseXorAssignmentExpression): void;
    enterBitwiseXorExpression(arg0: BitwiseXorExpression): void;
    enterBooleanAndExpression(arg0: BooleanAndExpression): void;
    enterBooleanNotExpression(arg0: BooleanNotExpression): void;
    enterBooleanOrExpression(arg0: BooleanOrExpression): void;
    enterBooleanXorExpression(arg0: BooleanXorExpression): void;
    enterCaseLabelStatement(arg0: CaseLabelStatement): void;
    enterCaseStatement(arg0: CaseStatement): void;
    enterCompoundStatement(arg0: CompoundStatement): void;
    enterConditionExpression(arg0: ConditionExpression): void;
    enterDeclaration(arg0: Declaration): void;
    enterDeclarationExternalDeclaration(arg0: DeclarationExternalDeclaration): void;
    enterDeclarationMember(arg0: DeclarationMember): void;
    enterDeclarationStatement(arg0: DeclarationStatement): void;
    enterDecrementPostfixExpression(arg0: DecrementPostfixExpression): void;
    enterDecrementPrefixExpression(arg0: DecrementPrefixExpression): void;
    enterDivisionAssignmentExpression(arg0: DivisionAssignmentExpression): void;
    enterDivisionExpression(arg0: DivisionExpression): void;
    enterDoWhileLoopStatement(arg0: DoWhileLoopStatement): void;
    enterEqualityExpression(arg0: EqualityExpression): void;
    enterEveryNode(arg0: InnerASTNode): void;
    enterExpression(arg0: Expression): void;
    enterExpressionInitializer(arg0: ExpressionInitializer): void;
    enterExpressionStatement(arg0: ExpressionStatement): void;
    enterExternalDeclaration(arg0: ExternalDeclaration): void;
    enterForLoopStatement(arg0: ForLoopStatement): void;
    enterFullySpecifiedType(arg0: FullySpecifiedType): void;
    enterFunctionCallExpression(arg0: FunctionCallExpression): void;
    enterFunctionDeclaration(arg0: FunctionDeclaration): void;
    enterFunctionDefinition(arg0: FunctionDefinition): void;
    enterFunctionParameter(arg0: FunctionParameter): void;
    enterFunctionPrototype(arg0: FunctionPrototype): void;
    enterGreaterThanEqualExpression(arg0: GreaterThanEqualExpression): void;
    enterGreaterThanExpression(arg0: GreaterThanExpression): void;
    enterGroupingExpression(arg0: GroupingExpression): void;
    enterIdentityExpression(arg0: IdentityExpression): void;
    enterIncrementPostfixExpression(arg0: IncrementPostfixExpression): void;
    enterIncrementPrefixExpression(arg0: IncrementPrefixExpression): void;
    enterInequalityExpression(arg0: InequalityExpression): void;
    enterInitializer(arg0: Initializer): void;
    enterInterfaceBlockDeclaration(arg0: InterfaceBlockDeclaration): void;
    enterIterationConditionInitializer(arg0: IterationConditionInitializer): void;
    enterLayoutDefaults(arg0: LayoutDefaults): void;
    enterLayoutQualifier(arg0: LayoutQualifier): void;
    enterLayoutQualifierPart(arg0: LayoutQualifierPart): void;
    enterLeftShiftAssignmentExpression(arg0: LeftShiftAssignmentExpression): void;
    enterLeftShiftExpression(arg0: LeftShiftExpression): void;
    enterLengthAccessExpression(arg0: LengthAccessExpression): void;
    enterLessThanEqualExpression(arg0: LessThanEqualExpression): void;
    enterLessThanExpression(arg0: LessThanExpression): void;
    enterLiteralExpression(arg0: LiteralExpression): void;
    enterLoopStatement(arg0: LoopStatement): void;
    enterManyExpression(arg0: ManyExpression): void;
    enterManyStatement(arg0: ManyStatement): void;
    enterMemberAccessExpression(arg0: MemberAccessExpression): void;
    enterModuloAssignmentExpression(arg0: ModuloAssignmentExpression): void;
    enterModuloExpression(arg0: ModuloExpression): void;
    enterMultiplicationAssignmentExpression(arg0: MultiplicationAssignmentExpression): void;
    enterMultiplicationExpression(arg0: MultiplicationExpression): void;
    enterNamedLayoutQualifierPart(arg0: NamedLayoutQualifierPart): void;
    enterNegationExpression(arg0: NegationExpression): void;
    enterNestedInitializer(arg0: NestedInitializer): void;
    enterPrecisionDeclaration(arg0: PrecisionDeclaration): void;
    enterReferenceExpression(arg0: ReferenceExpression): void;
    enterRightShiftAssignmentExpression(arg0: RightShiftAssignmentExpression): void;
    enterRightShiftExpression(arg0: RightShiftExpression): void;
    enterSelectionStatement(arg0: SelectionStatement): void;
    enterSemiTerminalStatement(arg0: SemiTerminalStatement): void;
    enterSequenceExpression(arg0: SequenceExpression): void;
    enterStatement(arg0: Statement): void;
    enterStorageQualifier(arg0: StorageQualifier): void;
    enterStructBody(arg0: StructBody): void;
    enterStructDeclarator(arg0: StructDeclarator): void;
    enterStructMember(arg0: StructMember): void;
    enterStructSpecifier(arg0: StructSpecifier): void;
    enterSubtractionAssignmentExpression(arg0: SubtractionAssignmentExpression): void;
    enterSubtractionExpression(arg0: SubtractionExpression): void;
    enterSwitchStatement(arg0: SwitchStatement): void;
    enterTernaryExpression(arg0: TernaryExpression): void;
    enterTranslationUnit(arg0: TranslationUnit): void;
    enterTypeAndInitDeclaration(arg0: TypeAndInitDeclaration): void;
    enterTypeQualifier(arg0: TypeQualifier): void;
    enterTypeQualifierPart(arg0: TypeQualifierPart): void;
    enterTypeReference(arg0: TypeReference): void;
    enterTypeSpecifier(arg0: TypeSpecifier): void;
    enterUnaryExpression(arg0: UnaryExpression): void;
    enterVariableDeclaration(arg0: VariableDeclaration): void;
    enterWhileLoopStatement(arg0: WhileLoopStatement): void;
    exitAdditionAssignmentExpression(arg0: AdditionAssignmentExpression): void;
    exitAdditionExpression(arg0: AdditionExpression): void;
    exitArrayAccessExpression(arg0: ArrayAccessExpression): void;
    exitArraySpecifier(arg0: ArraySpecifier): void;
    exitAssignmentExpression(arg0: AssignmentExpression): void;
    exitBinaryExpression(arg0: BinaryExpression): void;
    exitBitwiseAndAssignmentExpression(arg0: BitwiseAndAssignmentExpression): void;
    exitBitwiseAndExpression(arg0: BitwiseAndExpression): void;
    exitBitwiseNotExpression(arg0: BitwiseNotExpression): void;
    exitBitwiseOrAssignmentExpression(arg0: BitwiseOrAssignmentExpression): void;
    exitBitwiseOrExpression(arg0: BitwiseOrExpression): void;
    exitBitwiseXorAssignmentExpression(arg0: BitwiseXorAssignmentExpression): void;
    exitBitwiseXorExpression(arg0: BitwiseXorExpression): void;
    exitBooleanAndExpression(arg0: BooleanAndExpression): void;
    exitBooleanNotExpression(arg0: BooleanNotExpression): void;
    exitBooleanOrExpression(arg0: BooleanOrExpression): void;
    exitBooleanXorExpression(arg0: BooleanXorExpression): void;
    exitCaseLabelStatement(arg0: CaseLabelStatement): void;
    exitCaseStatement(arg0: CaseStatement): void;
    exitCompoundStatement(arg0: CompoundStatement): void;
    exitConditionExpression(arg0: ConditionExpression): void;
    exitDeclaration(arg0: Declaration): void;
    exitDeclarationExternalDeclaration(arg0: DeclarationExternalDeclaration): void;
    exitDeclarationMember(arg0: DeclarationMember): void;
    exitDeclarationStatement(arg0: DeclarationStatement): void;
    exitDecrementPostfixExpression(arg0: DecrementPostfixExpression): void;
    exitDecrementPrefixExpression(arg0: DecrementPrefixExpression): void;
    exitDivisionAssignmentExpression(arg0: DivisionAssignmentExpression): void;
    exitDivisionExpression(arg0: DivisionExpression): void;
    exitDoWhileLoopStatement(arg0: DoWhileLoopStatement): void;
    exitEqualityExpression(arg0: EqualityExpression): void;
    exitEveryNode(arg0: InnerASTNode): void;
    exitExpression(arg0: Expression): void;
    exitExpressionInitializer(arg0: ExpressionInitializer): void;
    exitExpressionStatement(arg0: ExpressionStatement): void;
    exitExternalDeclaration(arg0: ExternalDeclaration): void;
    exitForLoopStatement(arg0: ForLoopStatement): void;
    exitFullySpecifiedType(arg0: FullySpecifiedType): void;
    exitFunctionCallExpression(arg0: FunctionCallExpression): void;
    exitFunctionDeclaration(arg0: FunctionDeclaration): void;
    exitFunctionDefinition(arg0: FunctionDefinition): void;
    exitFunctionParameter(arg0: FunctionParameter): void;
    exitFunctionPrototype(arg0: FunctionPrototype): void;
    exitGreaterThanEqualExpression(arg0: GreaterThanEqualExpression): void;
    exitGreaterThanExpression(arg0: GreaterThanExpression): void;
    exitGroupingExpression(arg0: GroupingExpression): void;
    exitIdentityExpression(arg0: IdentityExpression): void;
    exitIncrementPostfixExpression(arg0: IncrementPostfixExpression): void;
    exitIncrementPrefixExpression(arg0: IncrementPrefixExpression): void;
    exitInequalityExpression(arg0: InequalityExpression): void;
    exitInitializer(arg0: Initializer): void;
    exitInterfaceBlockDeclaration(arg0: InterfaceBlockDeclaration): void;
    exitIterationConditionInitializer(arg0: IterationConditionInitializer): void;
    exitLayoutDefaults(arg0: LayoutDefaults): void;
    exitLayoutQualifier(arg0: LayoutQualifier): void;
    exitLayoutQualifierPart(arg0: LayoutQualifierPart): void;
    exitLeftShiftAssignmentExpression(arg0: LeftShiftAssignmentExpression): void;
    exitLeftShiftExpression(arg0: LeftShiftExpression): void;
    exitLengthAccessExpression(arg0: LengthAccessExpression): void;
    exitLessThanEqualExpression(arg0: LessThanEqualExpression): void;
    exitLessThanExpression(arg0: LessThanExpression): void;
    exitLiteralExpression(arg0: LiteralExpression): void;
    exitLoopStatement(arg0: LoopStatement): void;
    exitManyExpression(arg0: ManyExpression): void;
    exitManyStatement(arg0: ManyStatement): void;
    exitMemberAccessExpression(arg0: MemberAccessExpression): void;
    exitModuloAssignmentExpression(arg0: ModuloAssignmentExpression): void;
    exitModuloExpression(arg0: ModuloExpression): void;
    exitMultiplicationAssignmentExpression(arg0: MultiplicationAssignmentExpression): void;
    exitMultiplicationExpression(arg0: MultiplicationExpression): void;
    exitNamedLayoutQualifierPart(arg0: NamedLayoutQualifierPart): void;
    exitNegationExpression(arg0: NegationExpression): void;
    exitNestedInitializer(arg0: NestedInitializer): void;
    exitPrecisionDeclaration(arg0: PrecisionDeclaration): void;
    exitReferenceExpression(arg0: ReferenceExpression): void;
    exitRightShiftAssignmentExpression(arg0: RightShiftAssignmentExpression): void;
    exitRightShiftExpression(arg0: RightShiftExpression): void;
    exitSelectionStatement(arg0: SelectionStatement): void;
    exitSemiTerminalStatement(arg0: SemiTerminalStatement): void;
    exitSequenceExpression(arg0: SequenceExpression): void;
    exitStatement(arg0: Statement): void;
    exitStorageQualifier(arg0: StorageQualifier): void;
    exitStructBody(arg0: StructBody): void;
    exitStructDeclarator(arg0: StructDeclarator): void;
    exitStructMember(arg0: StructMember): void;
    exitStructSpecifier(arg0: StructSpecifier): void;
    exitSubtractionAssignmentExpression(arg0: SubtractionAssignmentExpression): void;
    exitSubtractionExpression(arg0: SubtractionExpression): void;
    exitSwitchStatement(arg0: SwitchStatement): void;
    exitTernaryExpression(arg0: TernaryExpression): void;
    exitTranslationUnit(arg0: TranslationUnit): void;
    exitTypeAndInitDeclaration(arg0: TypeAndInitDeclaration): void;
    exitTypeQualifier(arg0: TypeQualifier): void;
    exitTypeQualifierPart(arg0: TypeQualifierPart): void;
    exitTypeReference(arg0: TypeReference): void;
    exitTypeSpecifier(arg0: TypeSpecifier): void;
    exitUnaryExpression(arg0: UnaryExpression): void;
    exitVariableDeclaration(arg0: VariableDeclaration): void;
    exitWhileLoopStatement(arg0: WhileLoopStatement): void;
}
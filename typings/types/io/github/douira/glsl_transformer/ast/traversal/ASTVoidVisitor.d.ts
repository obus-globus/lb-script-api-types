import type { Identifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { IterationConditionInitializer } from '../../../../../../io/github/douira/glsl_transformer/ast/node/IterationConditionInitializer.d.ts'
import type { TranslationUnit } from '../../../../../../io/github/douira/glsl_transformer/ast/node/TranslationUnit.d.ts'
import type { VersionStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/VersionStatement.d.ts'
import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ListNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ListNode.d.ts'
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
import type { TerminalExpression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/TerminalExpression.d.ts'
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
import type { CustomDirective } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/CustomDirective.d.ts'
import type { DeclarationExternalDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/DeclarationExternalDeclaration.d.ts'
import type { EmptyDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/EmptyDeclaration.d.ts'
import type { ExtensionDirective } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExtensionDirective.d.ts'
import type { ExternalDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { FunctionDefinition } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/FunctionDefinition.d.ts'
import type { IncludeDirective } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/IncludeDirective.d.ts'
import type { LayoutDefaults } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/LayoutDefaults.d.ts'
import type { PragmaDirective } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/PragmaDirective.d.ts'
import type { CompoundStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/CompoundStatement.d.ts'
import type { ManyStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/ManyStatement.d.ts'
import type { Statement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement.d.ts'
import type { DoWhileLoopStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/loop/DoWhileLoopStatement.d.ts'
import type { ForLoopStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/loop/ForLoopStatement.d.ts'
import type { LoopStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/loop/LoopStatement.d.ts'
import type { WhileLoopStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/loop/WhileLoopStatement.d.ts'
import type { SelectionStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/selection/SelectionStatement.d.ts'
import type { SwitchStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/selection/SwitchStatement.d.ts'
import type { BreakStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/BreakStatement.d.ts'
import type { CaseLabelStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/CaseLabelStatement.d.ts'
import type { CaseStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/CaseStatement.d.ts'
import type { ContinueStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/ContinueStatement.d.ts'
import type { DeclarationStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/DeclarationStatement.d.ts'
import type { DefaultStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/DefaultStatement.d.ts'
import type { DemoteStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/DemoteStatement.d.ts'
import type { DiscardStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/DiscardStatement.d.ts'
import type { EmptyStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/EmptyStatement.d.ts'
import type { ExpressionStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/ExpressionStatement.d.ts'
import type { IgnoreIntersectionStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/IgnoreIntersectionStatement.d.ts'
import type { ReturnStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/ReturnStatement.d.ts'
import type { SemiTerminalStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/SemiTerminalStatement.d.ts'
import type { TerminalStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/TerminalStatement.d.ts'
import type { TerminateRayStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/TerminateRayStatement.d.ts'
import type { FullySpecifiedType } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/FullySpecifiedType.d.ts'
import type { ExpressionInitializer } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/initializer/ExpressionInitializer.d.ts'
import type { Initializer } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/initializer/Initializer.d.ts'
import type { NestedInitializer } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/initializer/NestedInitializer.d.ts'
import type { InterpolationQualifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/InterpolationQualifier.d.ts'
import type { InvariantQualifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/InvariantQualifier.d.ts'
import type { LayoutQualifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/LayoutQualifier.d.ts'
import type { LayoutQualifierPart } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/LayoutQualifierPart.d.ts'
import type { NamedLayoutQualifierPart } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/NamedLayoutQualifierPart.d.ts'
import type { PreciseQualifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/PreciseQualifier.d.ts'
import type { PrecisionQualifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/PrecisionQualifier.d.ts'
import type { SharedLayoutQualifierPart } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/SharedLayoutQualifierPart.d.ts'
import type { StorageQualifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/StorageQualifier.d.ts'
import type { TypeQualifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/TypeQualifier.d.ts'
import type { TypeQualifierPart } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/TypeQualifierPart.d.ts'
import type { ArraySpecifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/ArraySpecifier.d.ts'
import type { BuiltinFixedTypeSpecifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/BuiltinFixedTypeSpecifier.d.ts'
import type { BuiltinNumericTypeSpecifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/BuiltinNumericTypeSpecifier.d.ts'
import type { FunctionPrototype } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/FunctionPrototype.d.ts'
import type { TypeReference } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/TypeReference.d.ts'
import type { TypeSpecifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/TypeSpecifier.d.ts'
import type { StructBody } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/struct/StructBody.d.ts'
import type { StructDeclarator } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/struct/StructDeclarator.d.ts'
import type { StructMember } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/struct/StructMember.d.ts'
import type { StructSpecifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/struct/StructSpecifier.d.ts'
import type { ASTVisitor } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ASTVoidVisitor extends Object implements ASTVisitor<void> {
    constructor()
    aggregateResult(arg0: void, arg1: void): void;
    aggregateResult(arg0: void, arg1: void, arg2: void): void;
    defaultResult(): void;
    initialResult(): void;
    superNodeTypeResult(): void;
    visit(arg0: ASTNode): void;
    visit(arg0: void, arg1: ASTNode): void;
    visitAdditionAssignmentExpression(arg0: AdditionAssignmentExpression): void;
    visitAdditionExpression(arg0: AdditionExpression): void;
    visitArrayAccessExpression(arg0: ArrayAccessExpression): void;
    visitArraySpecifier(arg0: ArraySpecifier): void;
    visitAssignmentExpression(arg0: AssignmentExpression): void;
    visitBinaryExpression(arg0: BinaryExpression): void;
    visitBitwiseAndAssignmentExpression(arg0: BitwiseAndAssignmentExpression): void;
    visitBitwiseAndExpression(arg0: BitwiseAndExpression): void;
    visitBitwiseNotExpression(arg0: BitwiseNotExpression): void;
    visitBitwiseOrAssignmentExpression(arg0: BitwiseOrAssignmentExpression): void;
    visitBitwiseOrExpression(arg0: BitwiseOrExpression): void;
    visitBitwiseXorAssignmentExpression(arg0: BitwiseXorAssignmentExpression): void;
    visitBitwiseXorExpression(arg0: BitwiseXorExpression): void;
    visitBooleanAndExpression(arg0: BooleanAndExpression): void;
    visitBooleanNotExpression(arg0: BooleanNotExpression): void;
    visitBooleanOrExpression(arg0: BooleanOrExpression): void;
    visitBooleanXorExpression(arg0: BooleanXorExpression): void;
    visitBreakStatement(arg0: BreakStatement): void;
    visitBuiltinFixedTypeSpecifier(arg0: BuiltinFixedTypeSpecifier): void;
    visitBuiltinNumericTypeSpecifier(arg0: BuiltinNumericTypeSpecifier): void;
    visitCaseLabelStatement(arg0: CaseLabelStatement): void;
    visitCaseStatement(arg0: CaseStatement): void;
    visitChildren(arg0: ASTNode[]): void;
    visitChildren(arg0: ListNode<ASTNode>): void;
    visitChildren(arg0: void, arg1: ASTNode[]): void;
    visitChildren(arg0: void, arg1: ListNode<ASTNode>): void;
    visitCompoundStatement(arg0: CompoundStatement): void;
    visitConditionExpression(arg0: ConditionExpression): void;
    visitContinueStatement(arg0: ContinueStatement): void;
    visitCustomDirective(arg0: CustomDirective): void;
    visitData(arg0: void, arg1: Object): void;
    visitData(arg0: Object): void;
    visitDeclaration(arg0: Declaration): void;
    visitDeclarationExternalDeclaration(arg0: DeclarationExternalDeclaration): void;
    visitDeclarationMember(arg0: DeclarationMember): void;
    visitDeclarationStatement(arg0: DeclarationStatement): void;
    visitDecrementPostfixExpression(arg0: DecrementPostfixExpression): void;
    visitDecrementPrefixExpression(arg0: DecrementPrefixExpression): void;
    visitDefaultStatement(arg0: DefaultStatement): void;
    visitDemoteStatement(arg0: DemoteStatement): void;
    visitDiscardStatement(arg0: DiscardStatement): void;
    visitDivisionAssignmentExpression(arg0: DivisionAssignmentExpression): void;
    visitDivisionExpression(arg0: DivisionExpression): void;
    visitDoWhileLoopStatement(arg0: DoWhileLoopStatement): void;
    visitEmptyDeclaration(arg0: EmptyDeclaration): void;
    visitEmptyStatement(arg0: EmptyStatement): void;
    visitEqualityExpression(arg0: EqualityExpression): void;
    visitExpression(arg0: Expression): void;
    visitExpressionInitializer(arg0: ExpressionInitializer): void;
    visitExpressionStatement(arg0: ExpressionStatement): void;
    visitExtensionDirective(arg0: ExtensionDirective): void;
    visitExternalDeclaration(arg0: ExternalDeclaration): void;
    visitForLoopStatement(arg0: ForLoopStatement): void;
    visitFullySpecifiedType(arg0: FullySpecifiedType): void;
    visitFunctionCallExpression(arg0: FunctionCallExpression): void;
    visitFunctionDeclaration(arg0: FunctionDeclaration): void;
    visitFunctionDefinition(arg0: FunctionDefinition): void;
    visitFunctionParameter(arg0: FunctionParameter): void;
    visitFunctionPrototype(arg0: FunctionPrototype): void;
    visitGreaterThanEqualExpression(arg0: GreaterThanEqualExpression): void;
    visitGreaterThanExpression(arg0: GreaterThanExpression): void;
    visitGroupingExpression(arg0: GroupingExpression): void;
    visitIdentifier(arg0: Identifier): void;
    visitIdentityExpression(arg0: IdentityExpression): void;
    visitIgnoreIntersectionStatement(arg0: IgnoreIntersectionStatement): void;
    visitIncludeDirective(arg0: IncludeDirective): void;
    visitIncrementPostfixExpression(arg0: IncrementPostfixExpression): void;
    visitIncrementPrefixExpression(arg0: IncrementPrefixExpression): void;
    visitInequalityExpression(arg0: InequalityExpression): void;
    visitInitializer(arg0: Initializer): void;
    visitInterfaceBlockDeclaration(arg0: InterfaceBlockDeclaration): void;
    visitInterpolationQualifier(arg0: InterpolationQualifier): void;
    visitInvariantQualifier(arg0: InvariantQualifier): void;
    visitIterationConditionInitializer(arg0: IterationConditionInitializer): void;
    visitLayoutDefaults(arg0: LayoutDefaults): void;
    visitLayoutQualifier(arg0: LayoutQualifier): void;
    visitLayoutQualifierPart(arg0: LayoutQualifierPart): void;
    visitLeftShiftAssignmentExpression(arg0: LeftShiftAssignmentExpression): void;
    visitLeftShiftExpression(arg0: LeftShiftExpression): void;
    visitLengthAccessExpression(arg0: LengthAccessExpression): void;
    visitLessThanEqualExpression(arg0: LessThanEqualExpression): void;
    visitLessThanExpression(arg0: LessThanExpression): void;
    visitLiteralExpression(arg0: LiteralExpression): void;
    visitLoopStatement(arg0: LoopStatement): void;
    visitManyExpression(arg0: ManyExpression): void;
    visitManyStatement(arg0: ManyStatement): void;
    visitMemberAccessExpression(arg0: MemberAccessExpression): void;
    visitModuloAssignmentExpression(arg0: ModuloAssignmentExpression): void;
    visitModuloExpression(arg0: ModuloExpression): void;
    visitMultiplicationAssignmentExpression(arg0: MultiplicationAssignmentExpression): void;
    visitMultiplicationExpression(arg0: MultiplicationExpression): void;
    visitNamedLayoutQualifierPart(arg0: NamedLayoutQualifierPart): void;
    visitNegationExpression(arg0: NegationExpression): void;
    visitNestedInitializer(arg0: NestedInitializer): void;
    visitPragmaDirective(arg0: PragmaDirective): void;
    visitPreciseQualifier(arg0: PreciseQualifier): void;
    visitPrecisionDeclaration(arg0: PrecisionDeclaration): void;
    visitPrecisionQualifier(arg0: PrecisionQualifier): void;
    visitReferenceExpression(arg0: ReferenceExpression): void;
    visitReturnStatement(arg0: ReturnStatement): void;
    visitRightShiftAssignmentExpression(arg0: RightShiftAssignmentExpression): void;
    visitRightShiftExpression(arg0: RightShiftExpression): void;
    visitSafe(arg0: void, arg1: ASTNode): void;
    visitSelectionStatement(arg0: SelectionStatement): void;
    visitSemiTerminalStatement(arg0: SemiTerminalStatement): void;
    visitSequenceExpression(arg0: SequenceExpression): void;
    visitSharedLayoutQualifierPart(arg0: SharedLayoutQualifierPart): void;
    visitStatement(arg0: Statement): void;
    visitStorageQualifier(arg0: StorageQualifier): void;
    visitStructBody(arg0: StructBody): void;
    visitStructDeclarator(arg0: StructDeclarator): void;
    visitStructMember(arg0: StructMember): void;
    visitStructSpecifier(arg0: StructSpecifier): void;
    visitSubtractionAssignmentExpression(arg0: SubtractionAssignmentExpression): void;
    visitSubtractionExpression(arg0: SubtractionExpression): void;
    visitSwitchStatement(arg0: SwitchStatement): void;
    visitTerminalExpression(arg0: TerminalExpression): void;
    visitTerminalStatement(arg0: TerminalStatement): void;
    visitTerminateRayStatement(arg0: TerminateRayStatement): void;
    visitTernaryExpression(arg0: TernaryExpression): void;
    visitTranslationUnit(arg0: TranslationUnit): void;
    visitTypeAndInitDeclaration(arg0: TypeAndInitDeclaration): void;
    visitTypeQualifier(arg0: TypeQualifier): void;
    visitTypeQualifierPart(arg0: TypeQualifierPart): void;
    visitTypeReference(arg0: TypeReference): void;
    visitTypeSpecifier(arg0: TypeSpecifier): void;
    visitUnaryExpression(arg0: UnaryExpression): void;
    visitVariableDeclaration(arg0: VariableDeclaration): void;
    visitVersionStatement(arg0: VersionStatement): void;
    visitVoid(arg0: ASTNode): void;
    visitVoidData(arg0: Object): void;
    visitWhileLoopStatement(arg0: WhileLoopStatement): void;
}
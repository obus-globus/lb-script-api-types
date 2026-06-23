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
import type { GeneralASTVisitor } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/GeneralASTVisitor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ASTVisitor<R extends unknown> extends GeneralASTVisitor<R>, Object{
    aggregateResult(arg0: R, arg1: R, arg2: R): R;
    startVisit(arg0: ASTNode): R;
    visit(arg0: R, arg1: ASTNode): R;
    visitAdditionAssignmentExpression(arg0: AdditionAssignmentExpression): R;
    visitAdditionExpression(arg0: AdditionExpression): R;
    visitArrayAccessExpression(arg0: ArrayAccessExpression): R;
    visitArraySpecifier(arg0: ArraySpecifier): R;
    visitAssignmentExpression(arg0: AssignmentExpression): R;
    visitBinaryExpression(arg0: BinaryExpression): R;
    visitBitwiseAndAssignmentExpression(arg0: BitwiseAndAssignmentExpression): R;
    visitBitwiseAndExpression(arg0: BitwiseAndExpression): R;
    visitBitwiseNotExpression(arg0: BitwiseNotExpression): R;
    visitBitwiseOrAssignmentExpression(arg0: BitwiseOrAssignmentExpression): R;
    visitBitwiseOrExpression(arg0: BitwiseOrExpression): R;
    visitBitwiseXorAssignmentExpression(arg0: BitwiseXorAssignmentExpression): R;
    visitBitwiseXorExpression(arg0: BitwiseXorExpression): R;
    visitBooleanAndExpression(arg0: BooleanAndExpression): R;
    visitBooleanNotExpression(arg0: BooleanNotExpression): R;
    visitBooleanOrExpression(arg0: BooleanOrExpression): R;
    visitBooleanXorExpression(arg0: BooleanXorExpression): R;
    visitBreakStatement(arg0: BreakStatement): R;
    visitBuiltinFixedTypeSpecifier(arg0: BuiltinFixedTypeSpecifier): R;
    visitBuiltinNumericTypeSpecifier(arg0: BuiltinNumericTypeSpecifier): R;
    visitCaseLabelStatement(arg0: CaseLabelStatement): R;
    visitCaseStatement(arg0: CaseStatement): R;
    visitChildren(arg0: ASTNode[]): R;
    visitChildren(arg0: R, arg1: ASTNode[]): R;
    visitChildren(arg0: R, arg1: ListNode<ASTNode>): R;
    visitChildren(arg0: ListNode<ASTNode>): R;
    visitCompoundStatement(arg0: CompoundStatement): R;
    visitConditionExpression(arg0: ConditionExpression): R;
    visitContinueStatement(arg0: ContinueStatement): R;
    visitCustomDirective(arg0: CustomDirective): R;
    visitData(arg0: R, arg1: Object): R;
    visitData(arg0: Object): R;
    visitDeclaration(arg0: Declaration): R;
    visitDeclarationExternalDeclaration(arg0: DeclarationExternalDeclaration): R;
    visitDeclarationMember(arg0: DeclarationMember): R;
    visitDeclarationStatement(arg0: DeclarationStatement): R;
    visitDecrementPostfixExpression(arg0: DecrementPostfixExpression): R;
    visitDecrementPrefixExpression(arg0: DecrementPrefixExpression): R;
    visitDefaultStatement(arg0: DefaultStatement): R;
    visitDemoteStatement(arg0: DemoteStatement): R;
    visitDiscardStatement(arg0: DiscardStatement): R;
    visitDivisionAssignmentExpression(arg0: DivisionAssignmentExpression): R;
    visitDivisionExpression(arg0: DivisionExpression): R;
    visitDoWhileLoopStatement(arg0: DoWhileLoopStatement): R;
    visitEmptyDeclaration(arg0: EmptyDeclaration): R;
    visitEmptyStatement(arg0: EmptyStatement): R;
    visitEqualityExpression(arg0: EqualityExpression): R;
    visitExpression(arg0: Expression): R;
    visitExpressionInitializer(arg0: ExpressionInitializer): R;
    visitExpressionStatement(arg0: ExpressionStatement): R;
    visitExtensionDirective(arg0: ExtensionDirective): R;
    visitExternalDeclaration(arg0: ExternalDeclaration): R;
    visitForLoopStatement(arg0: ForLoopStatement): R;
    visitFullySpecifiedType(arg0: FullySpecifiedType): R;
    visitFunctionCallExpression(arg0: FunctionCallExpression): R;
    visitFunctionDeclaration(arg0: FunctionDeclaration): R;
    visitFunctionDefinition(arg0: FunctionDefinition): R;
    visitFunctionParameter(arg0: FunctionParameter): R;
    visitFunctionPrototype(arg0: FunctionPrototype): R;
    visitGreaterThanEqualExpression(arg0: GreaterThanEqualExpression): R;
    visitGreaterThanExpression(arg0: GreaterThanExpression): R;
    visitGroupingExpression(arg0: GroupingExpression): R;
    visitIdentifier(arg0: Identifier): R;
    visitIdentityExpression(arg0: IdentityExpression): R;
    visitIgnoreIntersectionStatement(arg0: IgnoreIntersectionStatement): R;
    visitIncludeDirective(arg0: IncludeDirective): R;
    visitIncrementPostfixExpression(arg0: IncrementPostfixExpression): R;
    visitIncrementPrefixExpression(arg0: IncrementPrefixExpression): R;
    visitInequalityExpression(arg0: InequalityExpression): R;
    visitInitializer(arg0: Initializer): R;
    visitInterfaceBlockDeclaration(arg0: InterfaceBlockDeclaration): R;
    visitInterpolationQualifier(arg0: InterpolationQualifier): R;
    visitInvariantQualifier(arg0: InvariantQualifier): R;
    visitIterationConditionInitializer(arg0: IterationConditionInitializer): R;
    visitLayoutDefaults(arg0: LayoutDefaults): R;
    visitLayoutQualifier(arg0: LayoutQualifier): R;
    visitLayoutQualifierPart(arg0: LayoutQualifierPart): R;
    visitLeftShiftAssignmentExpression(arg0: LeftShiftAssignmentExpression): R;
    visitLeftShiftExpression(arg0: LeftShiftExpression): R;
    visitLengthAccessExpression(arg0: LengthAccessExpression): R;
    visitLessThanEqualExpression(arg0: LessThanEqualExpression): R;
    visitLessThanExpression(arg0: LessThanExpression): R;
    visitLiteralExpression(arg0: LiteralExpression): R;
    visitLoopStatement(arg0: LoopStatement): R;
    visitManyExpression(arg0: ManyExpression): R;
    visitManyStatement(arg0: ManyStatement): R;
    visitMemberAccessExpression(arg0: MemberAccessExpression): R;
    visitModuloAssignmentExpression(arg0: ModuloAssignmentExpression): R;
    visitModuloExpression(arg0: ModuloExpression): R;
    visitMultiplicationAssignmentExpression(arg0: MultiplicationAssignmentExpression): R;
    visitMultiplicationExpression(arg0: MultiplicationExpression): R;
    visitNamedLayoutQualifierPart(arg0: NamedLayoutQualifierPart): R;
    visitNegationExpression(arg0: NegationExpression): R;
    visitNestedInitializer(arg0: NestedInitializer): R;
    visitPragmaDirective(arg0: PragmaDirective): R;
    visitPreciseQualifier(arg0: PreciseQualifier): R;
    visitPrecisionDeclaration(arg0: PrecisionDeclaration): R;
    visitPrecisionQualifier(arg0: PrecisionQualifier): R;
    visitReferenceExpression(arg0: ReferenceExpression): R;
    visitReturnStatement(arg0: ReturnStatement): R;
    visitRightShiftAssignmentExpression(arg0: RightShiftAssignmentExpression): R;
    visitRightShiftExpression(arg0: RightShiftExpression): R;
    visitSafe(arg0: R, arg1: ASTNode): R;
    visitSelectionStatement(arg0: SelectionStatement): R;
    visitSemiTerminalStatement(arg0: SemiTerminalStatement): R;
    visitSequenceExpression(arg0: SequenceExpression): R;
    visitSharedLayoutQualifierPart(arg0: SharedLayoutQualifierPart): R;
    visitStatement(arg0: Statement): R;
    visitStorageQualifier(arg0: StorageQualifier): R;
    visitStructBody(arg0: StructBody): R;
    visitStructDeclarator(arg0: StructDeclarator): R;
    visitStructMember(arg0: StructMember): R;
    visitStructSpecifier(arg0: StructSpecifier): R;
    visitSubtractionAssignmentExpression(arg0: SubtractionAssignmentExpression): R;
    visitSubtractionExpression(arg0: SubtractionExpression): R;
    visitSwitchStatement(arg0: SwitchStatement): R;
    visitTerminalExpression(arg0: TerminalExpression): R;
    visitTerminalStatement(arg0: TerminalStatement): R;
    visitTerminateRayStatement(arg0: TerminateRayStatement): R;
    visitTernaryExpression(arg0: TernaryExpression): R;
    visitThreeChildren(arg0: ASTNode, arg1: ASTNode, arg2: ASTNode): R;
    visitTranslationUnit(arg0: TranslationUnit): R;
    visitTwoChildren(arg0: ASTNode, arg1: ASTNode): R;
    visitTypeAndInitDeclaration(arg0: TypeAndInitDeclaration): R;
    visitTypeQualifier(arg0: TypeQualifier): R;
    visitTypeQualifierPart(arg0: TypeQualifierPart): R;
    visitTypeReference(arg0: TypeReference): R;
    visitTypeSpecifier(arg0: TypeSpecifier): R;
    visitUnaryExpression(arg0: UnaryExpression): R;
    visitVariableDeclaration(arg0: VariableDeclaration): R;
    visitVersionStatement(arg0: VersionStatement): R;
    visitWhileLoopStatement(arg0: WhileLoopStatement): R;
}
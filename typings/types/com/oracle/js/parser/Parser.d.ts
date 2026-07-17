import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractParser } from '../../../../com/oracle/js/parser/AbstractParser.d.ts'
import type { CoverExpressionError } from '../../../../com/oracle/js/parser/CoverExpressionError.d.ts'
import type { ErrorManager } from '../../../../com/oracle/js/parser/ErrorManager.d.ts'
import type { Lexer$LineInfoReceiver } from '../../../../com/oracle/js/parser/Lexer$LineInfoReceiver.d.ts'
import type { Parser$ForVariableDeclarationListResult } from '../../../../com/oracle/js/parser/Parser$ForVariableDeclarationListResult.d.ts'
import type { Parser$PropertyFunction } from '../../../../com/oracle/js/parser/Parser$PropertyFunction.d.ts'
import type { ParserContext } from '../../../../com/oracle/js/parser/ParserContext.d.ts'
import type { ParserContextBlockNode } from '../../../../com/oracle/js/parser/ParserContextBlockNode.d.ts'
import type { ParserContextFunctionNode } from '../../../../com/oracle/js/parser/ParserContextFunctionNode.d.ts'
import type { ParserContextModuleNode } from '../../../../com/oracle/js/parser/ParserContextModuleNode.d.ts'
import type { ParserException } from '../../../../com/oracle/js/parser/ParserException.d.ts'
import type { RecompilableScriptFunctionData } from '../../../../com/oracle/js/parser/RecompilableScriptFunctionData.d.ts'
import type { ScriptEnvironment } from '../../../../com/oracle/js/parser/ScriptEnvironment.d.ts'
import type { Source } from '../../../../com/oracle/js/parser/Source.d.ts'
import type { TokenType } from '../../../../com/oracle/js/parser/TokenType.d.ts'
import type { Block } from '../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { CatchNode } from '../../../../com/oracle/js/parser/ir/CatchNode.d.ts'
import type { ClassElement } from '../../../../com/oracle/js/parser/ir/ClassElement.d.ts'
import type { ClassNode } from '../../../../com/oracle/js/parser/ir/ClassNode.d.ts'
import type { Expression } from '../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { FunctionNode } from '../../../../com/oracle/js/parser/ir/FunctionNode.d.ts'
import type { IdentNode } from '../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { JoinPredecessorExpression } from '../../../../com/oracle/js/parser/ir/JoinPredecessorExpression.d.ts'
import type { LiteralNode } from '../../../../com/oracle/js/parser/ir/LiteralNode.d.ts'
import type { Module$ImportEntry } from '../../../../com/oracle/js/parser/ir/Module$ImportEntry.d.ts'
import type { Module$ImportPhase } from '../../../../com/oracle/js/parser/ir/Module$ImportPhase.d.ts'
import type { NameSpaceImportNode } from '../../../../com/oracle/js/parser/ir/NameSpaceImportNode.d.ts'
import type { NamedExportsNode } from '../../../../com/oracle/js/parser/ir/NamedExportsNode.d.ts'
import type { NamedImportsNode } from '../../../../com/oracle/js/parser/ir/NamedImportsNode.d.ts'
import type { Node } from '../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { ObjectNode } from '../../../../com/oracle/js/parser/ir/ObjectNode.d.ts'
import type { PropertyKey } from '../../../../com/oracle/js/parser/ir/PropertyKey.d.ts'
import type { PropertyNode } from '../../../../com/oracle/js/parser/ir/PropertyNode.d.ts'
import type { Scope } from '../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { Statement } from '../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { VarNode } from '../../../../com/oracle/js/parser/ir/VarNode.d.ts'
import type { TruffleString } from '../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../org/graalvm/collections/Pair.d.ts'
export class Parser extends AbstractParser {
    constructor(env: ScriptEnvironment, source: Source, errors: ErrorManager)
    constructor(env: ScriptEnvironment, source: Source, errors: ErrorManager, strict: boolean)
    constructor(env: ScriptEnvironment, source: Source, errors: ErrorManager, strict: boolean, lineOffset: number)
    // private allowBigInt: boolean;
    // private coverArrowFunction: ParserContextFunctionNode;
    // private defaultNames: Object[];
    // private env: ScriptEnvironment;
    // private functionDeclarations: Statement[];
    // private isModule: boolean;
    // private lc: ParserContext;
    // private lineInfoReceiver: Lexer$LineInfoReceiver;
    readonly reparsedFunction: RecompilableScriptFunctionData;
    // private scripting: boolean;
    // private shebang: boolean;
    // private addDestructuringParameter(paramToken: number, paramFinish: number, paramLine: number, target: Expression, initializer: Expression, function_: ParserContextFunctionNode, isRest: boolean): void;
    // private addFunctionDeclarations(functionNode: ParserContextFunctionNode): void;
    // private addIdentifierReference(name: string): void;
    // private addPropertyFunctionStatement(propertyFunction: Parser$PropertyFunction): void;
    // private addTemplateLiteralString(rawStrings: Expression[], cookedStrings: Expression[]): void;
    // private appendStatement(statement: Statement): void;
    // private applyArgumentsToScope(scope: Scope, argumentNames: string[]): Scope;
    // private argumentList(yield_: boolean, await_: boolean): Expression[];
    // private argumentList(yield_: boolean, await_: boolean, coverAsyncArrow: boolean, startToken: number, startLine: number): Expression[];
    // private arrayLiteral(yield_: boolean, await_: boolean, coverExpression: CoverExpressionError): LiteralNode<Expression[]>;
    // private arrowFunction(startToken: number, functionLine: number, paramListExpr: Expression, async: boolean): Expression;
    // private arrowFunctionRestParameter(paramListExpr: Expression, commaToken: number, yield_: boolean, await_: boolean): Expression;
    // private assignmentExpression(in_: boolean, yield_: boolean, await_: boolean): Expression;
    // private assignmentExpression(in_: boolean, yield_: boolean, await_: boolean, coverExpression: CoverExpressionError): Expression;
    // private asyncFunctionDeclaration(isStatement: boolean, topLevel: boolean, yield_: boolean, await_: boolean, isDefault: boolean): Expression;
    // private asyncFunctionExpression(): Expression;
    // private awaitExpression(yield_: boolean): Expression;
    // private bindingIdentifier(yield_: boolean, await_: boolean, contextString: string): IdentNode;
    // private bindingIdentifierOrPattern(yield_: boolean, await_: boolean, contextString: string): Expression;
    // private bindingPattern(yield_: boolean, await_: boolean): Expression;
    // private block(yield_: boolean, await_: boolean): void;
    // private breakStatement(yield_: boolean, await_: boolean): void;
    // private caseStatementList(yield_: boolean, await_: boolean): Statement[];
    // private catchBody(yield_: boolean, await_: boolean, catchToken: number, catchLine: number, exception: IdentNode, pattern: Expression, ifExpression: Expression): CatchNode;
    // private checkES5PropertyDefinition(property: PropertyNode, map: JavaMap<string, PropertyNode>): void;
    // private checkPropertyRedefinition(property: PropertyNode, value: Expression, getter: FunctionNode, setter: FunctionNode, prevValue: Expression, prevGetter: FunctionNode, prevSetter: FunctionNode): void;
    // private checkValidLValue(init: Expression, contextString: string): boolean;
    // private classDeclaration(yield_: boolean, await_: boolean, defaultExport: boolean): ClassNode;
    // private classElementName(yield_: boolean, await_: boolean, allowPrivate: boolean): Expression;
    // private classExpression(yield_: boolean, await_: boolean): ClassNode;
    // private classTail(classLineNumber: number, classToken: number, className: IdentNode, yield_: boolean, await_: boolean, classDecorators: Expression[]): ClassNode;
    // private commitArrowHead(cover: ParserContextFunctionNode): void;
    // private computedPropertyName(yield_: boolean, await_: boolean): Expression;
    // private conditionalExpression(in_: boolean, yield_: boolean, await_: boolean, coverExpression: CoverExpressionError): Expression;
    // private continueStatement(yield_: boolean, await_: boolean): void;
    // private convertArrowFunctionParameterList(paramList: Expression, function_: ParserContextFunctionNode): void;
    // private convertArrowParameter(param: Expression, index: number, paramLine: number, currentFunction: ParserContextFunctionNode): void;
    // private createDefaultClassConstructor(classLineNumber: number, classToken: number, lastToken: number, className: IdentNode, derived: boolean): ClassElement;
    // private createEvalScope(parseFlags: number, parentScope: Scope): Scope;
    // private createFunctionNode(function_: ParserContextFunctionNode, startToken: number, ident: IdentNode, functionLine: number, body: Block): FunctionNode;
    // private createFunctionNodeParameters(argumentNames: string[]): IdentNode[];
    // private createMethodNameIdent(propertyKey: Expression, prefix: string): IdentNode;
    // private createParserContextArrowFunctionNode(startToken: number, startLine: number, async: boolean, cover: boolean): ParserContextFunctionNode;
    // private createParserContextFunctionNode(ident: IdentNode, functionToken: number, functionFlags: number, functionLine: number): ParserContextFunctionNode;
    // private createParserContextFunctionNode(ident: IdentNode, functionToken: number, functionFlags: number, functionLine: number, parameters: IdentNode[], functionLength: number): ParserContextFunctionNode;
    // private createParserContextFunctionNode(ident: IdentNode, functionToken: number, functionFlags: number, functionLine: number, parameters: IdentNode[], functionLength: number, functionTopScope: Scope): ParserContextFunctionNode;
    // private debuggerStatement(): void;
    // private declareImportBinding(ident: IdentNode): void;
    // private declareImportBinding(ident: IdentNode, star: boolean): void;
    // private declareImportStarBinding(ident: IdentNode): void;
    // private declarePrivateName(classScope: Scope, classElement: ClassElement): void;
    // private declareVar(scope: Scope, varNode: VarNode): void;
    decoratorList(yield_: boolean, await_: boolean): Expression[];
    // private detectSpecialProperty(ident: IdentNode): IdentNode;
    // private detectVarNameConflict(scope: Scope, varNode: VarNode): boolean;
    // private doStatement(yield_: boolean, await_: boolean): void;
    // private emptyStatement(): void;
    // private endOfLine(): void;
    // private expectAsyncFunction(): number;
    // private exportDeclaration(module: ParserContextModuleNode): void;
    // private expression(exprLhs: Expression, minPrecedence: number, in_: boolean, yield_: boolean, await_: boolean): Expression;
    // private expression(yield_: boolean, await_: boolean): Expression;
    // private expression(in_: boolean, yield_: boolean, await_: boolean): Expression;
    // private expression(in_: boolean, yield_: boolean, await_: boolean, coverExpression: CoverExpressionError): Expression;
    // private expression(minPrecedence: number, in_: boolean, yield_: boolean, await_: boolean, coverExpression: CoverExpressionError): Expression;
    // private expressionStatement(yield_: boolean, await_: boolean): void;
    // private fieldDefinition(propertyName: Expression, isStatic: boolean, isAutoAccessor: boolean, startToken: number, computed: boolean, classElementDecorators: Expression[]): ClassElement;
    // private fieldInitializer(lineNumber: number, fieldToken: number, propertyName: Expression, computed: boolean): Pair<FunctionNode, boolean>;
    // private forStatement(yield_: boolean, await_: boolean): void;
    // private formalParameter(yield_: boolean, await_: boolean): void;
    // private formalParameterList(endType: TokenType, yield_: boolean, await_: boolean): void;
    // private formalParameterList(yield_: boolean, async: boolean): void;
    // private fromClause(): LiteralNode<TruffleString>;
    // private functionBody(functionNode: ParserContextFunctionNode): Block;
    // private functionDeclaration(isStatement: boolean, topLevel: boolean, expressionStatement: boolean, yield_: boolean, await_: boolean, isDefault: boolean): Expression;
    // private functionDeclarationOrExpression(functionToken: number, isStatement: boolean, topLevel: boolean, async: boolean, expressionStatement: boolean, isDeclaration: boolean, isYield: boolean, isAwait: boolean, isDefault: boolean): Expression;
    // private functionExpression(): Expression;
    // private functionRestParameter(endType: TokenType, yield_: boolean, await_: boolean): void;
    // private getBlock(yield_: boolean, await_: boolean, needsBraces: boolean): Block;
    // private getDefaultFunctionName(): TruffleString;
    // private getStatement(yield_: boolean, await_: boolean): Block;
    // private getStatement(yield_: boolean, await_: boolean, labelledStatement: boolean, mayBeFunctionDeclaration: boolean): Block;
    // private getStatement(yield_: boolean, await_: boolean, labelledStatement: boolean, mayBeFunctionDeclaration: boolean, mayBeLabeledFunctionDeclaration: boolean): Block;
    // private handleParseException(e: ParserException): void;
    // private hideDefaultName(): void;
    // private identifier(yield_: boolean, await_: boolean, contextString: string, bindingIdentifier: boolean): IdentNode;
    // private identifierReference(yield_: boolean, await_: boolean): IdentNode;
    // private ifStatement(yield_: boolean, await_: boolean): void;
    // private importCall(yield_: boolean, await_: boolean, importToken: number, importStart: number, importLine: number, importName: TruffleString, phase: Module$ImportPhase): Expression;
    // private importDeclaration(module: ParserContextModuleNode): void;
    // private importExpression(yield_: boolean, await_: boolean): Expression;
    // private importedBindingIdentifier(): IdentNode;
    // private inFormalParameterList(): boolean;
    // private invalidLHSError(lhs: Expression): ParserException;
    // private isAnnexB(): boolean;
    // private isAsync(): boolean;
    // private isAwait(): boolean;
    // private isBindingIdentifier(): boolean;
    // private isBindingIdentifierToken(tokenType: TokenType): boolean;
    // private isClassDecorators(): boolean;
    // private isClassFieldDefinition(nameTokenType: TokenType): boolean;
    // private isClassFields(): boolean;
    // private isDestructuringLhs(lhs: Expression): boolean;
    // private isES2017(): boolean;
    // private isES2020(): boolean;
    // private isES2021(): boolean;
    // private isES2022(): boolean;
    // private isES6(): boolean;
    // private isExplicitResourceManagement(): boolean;
    // private isIdentifier(): boolean;
    // private isImportDefer(): boolean;
    // private isImportExpression(): boolean;
    // private isPrivateFieldsIn(): boolean;
    // private isPropertyName(currentToken: number): boolean;
    // private isStartOfAssignmentPattern(): boolean;
    // private isTopLevelAwait(): boolean;
    // private isUseStrictDirective(stmt: Node): boolean;
    // private isUsingDeclarationDisallowedHere(singleStatement: boolean): boolean;
    // private isV8Intrinsics(): boolean;
    // private joinPredecessorExpression(yield_: boolean, await_: boolean): JoinPredecessorExpression;
    // private labelIdentifier(yield_: boolean, await_: boolean): IdentNode;
    // private labelStatement(yield_: boolean, await_: boolean, mayBeFunctionDeclaration: boolean): void;
    // private leftHandSideExpression(yield_: boolean, await_: boolean, coverExpression: CoverExpressionError): Expression;
    // private literalPropertyName(): PropertyKey;
    // private lookahead(): TokenType;
    // private lookaheadIsArrow(): boolean;
    // private lookaheadIsAsyncArrowParameterListStart(): boolean;
    // private lookaheadIsAsyncFunction(): boolean;
    // private lookaheadIsAsyncMethod(allowPrivate: boolean): boolean;
    // private lookaheadIsAwaitUsingDeclaration(forHeader: boolean): boolean;
    // private lookaheadIsIdentAndLParen(): boolean;
    // private lookaheadIsImportCall(): boolean;
    // private lookaheadIsLetDeclaration(): boolean;
    // private lookaheadIsOf(): boolean;
    // private lookaheadIsUsingDeclaration(forHeader: boolean): boolean;
    // private lookaheadNoLineTerminator(): TokenType;
    // private lookaheadOfLetDeclaration(): TokenType;
    // private lookaheadOfUsingDeclaration(startIndex: number, awaitUsing: boolean, forHeader: boolean): boolean;
    // private lookbehindIsTrailingCommaInArrowParameters(): boolean;
    // private lookbehindNoLineTerminatorAfterAsync(): boolean;
    // private lookbehindNoLineTerminatorBeforeArrow(): boolean;
    // private markArguments(ident: IdentNode): IdentNode;
    // private markDefaultNameUsed(): void;
    // private markEval(): void;
    // private markNewTarget(): void;
    // private markSuperCall(): void;
    // private markSuperProperty(): void;
    // private markThis(): void;
    // private memberExpression(yield_: boolean, await_: boolean, coverExpression: CoverExpressionError): Expression;
    // private methodDefinition(propertyName: Expression, isStatic: boolean, derived: boolean, generator: boolean, async: boolean, startToken: number, methodLine: number, yield_: boolean, await_: boolean, nameTokenType: TokenType, computed: boolean, classElementDecorators: Expression[]): ClassElement;
    // private module(moduleName: string): FunctionNode;
    // private moduleBody(module: ParserContextModuleNode): void;
    // private moduleExportName(): PropertyKey;
    // private nameSpaceImport(): NameSpaceImportNode;
    // private namedExports(): NamedExportsNode;
    // private namedImports(importEntries: Module$ImportEntry[]): NamedImportsNode;
    // private newBinaryExpression(op: number, lhs: Expression, rhs: Expression): Expression;
    // private newBlock(scope: Scope): ParserContextBlockNode;
    // private newBlockScope(): Scope;
    // private newExpression(yield_: boolean, await_: boolean): Expression;
    // private nextTokenIndexNoLineTerminator(index: number): number;
    // private nextTokenType(index: number): TokenType;
    // private objectLiteral(yield_: boolean, await_: boolean, coverExpression: CoverExpressionError): ObjectNode;
    // private parenthesizedExpressionAndArrowParameterList(yield_: boolean, await_: boolean): Expression;
    parse(): FunctionNode;
    parse(scriptName: TruffleString, startPos: number, len: number, reparseFlags: number, parentScope: Scope, argumentNames: string[]): FunctionNode;
    parseEval(functionContext: boolean, parentScope: Scope): FunctionNode;
    parseExpression(): Expression;
    parseFormalParameterList(): void;
    parseFunctionBody(generator: boolean, async: boolean): FunctionNode;
    parseModule(moduleName: string): FunctionNode;
    parseModule(moduleName: string, startPos: number, len: number): FunctionNode;
    // private parsePrivateIdentifier(): IdentNode;
    parseWithArguments(argumentNames: string[]): FunctionNode;
    // private popDefaultName(): Object;
    // private prepareLexer(startPos: number, len: number): void;
    // private prependStatement(statement: Statement): void;
    // private primaryExpression(yield_: boolean, await_: boolean, coverExpression: CoverExpressionError): Expression;
    // private privateIdentifierDeclaration(): IdentNode;
    // private privateIdentifierUse(): IdentNode;
    // private program(scriptName: TruffleString, parseFlags: number, parentScope: Scope, argumentNames: string[]): FunctionNode;
    // private propertyDefinition(yield_: boolean, await_: boolean, coverExpression: CoverExpressionError): PropertyNode;
    // private propertyGetterFunction(getSetToken: number, functionLine: number, yield_: boolean, await_: boolean, allowPrivate: boolean): Parser$PropertyFunction;
    // private propertyMethodFunction(key: Expression, methodToken: number, methodLine: number, generator: boolean, flags: number, computed: boolean, async: boolean): Parser$PropertyFunction;
    // private propertyName(yield_: boolean, await_: boolean): Expression;
    // private propertySetterFunction(getSetToken: number, functionLine: number, yield_: boolean, await_: boolean, allowPrivate: boolean): Parser$PropertyFunction;
    // private pushDefaultName(nameExpr: Expression): void;
    // private recordOrThrowExpressionError(msgId: string, assignToken: number, coverExpression: CoverExpressionError): void;
    // private recordYieldOrAwait(): void;
    // private recordYieldOrAwait(ident: IdentNode): void;
    // private recordYieldOrAwait(yieldOrAwaitToken: number, ident: boolean): void;
    // private recover(e: ParserException): void;
    // private reparseFunctionStatement(reparseFlags: number): boolean;
    // private reportIllegalES5BlockLevelFunctionDeclaration(functionToken: number): void;
    // private restoreBlock(block: ParserContextBlockNode): void;
    // private returnStatement(yield_: boolean, await_: boolean): void;
    // private revertArrowHead(cover: ParserContextFunctionNode): void;
    // private scanFirstToken(): void;
    // private setAnonymousFunctionName(expression: Expression, functionName: TruffleString): Expression;
    setReparsedFunction(reparsedFunction: RecompilableScriptFunctionData): void;
    // private setupStrictEvalScope(): void;
    // private skipFunctionBody(functionNode: ParserContextFunctionNode): boolean;
    // private sourceElements(yield_: boolean, await_: boolean, parseFlags: number): void;
    // private statement(yield_: boolean, await_: boolean): void;
    // private statement(yield_: boolean, await_: boolean, topLevel: boolean, reparseFlags: number, singleStatement: boolean, labelledStatement: boolean, mayBeFunctionDeclaration: boolean): void;
    // private statement(yield_: boolean, await_: boolean, topLevel: boolean, reparseFlags: number, singleStatement: boolean, labelledStatement: boolean, mayBeFunctionDeclaration: boolean, mayBeLabeledFunctionDeclaration: boolean): void;
    // private statementList(yield_: boolean, await_: boolean): void;
    // private staticInitializer(lineNumber: number, staticToken: number): ClassElement;
    // private switchStatement(yield_: boolean, await_: boolean): void;
    // private templateLiteral(yield_: boolean, await_: boolean): Expression;
    // private templateLiteralArgumentList(yield_: boolean, await_: boolean): Expression[];
    // private templateLiteralExpression(yield_: boolean, await_: boolean): Expression;
    // private templateLiteralOrExecString(yield_: boolean, await_: boolean, primaryToken: number): Expression;
    // private throwExpressionError(coverExpression: CoverExpressionError): void;
    // private throwStatement(yield_: boolean, await_: boolean): void;
    toString(): string;
    // private tryStatement(yield_: boolean, await_: boolean): void;
    // private unaryExpression(yield_: boolean, await_: boolean, coverExpression: CoverExpressionError): Expression;
    // private useBlockScope(): boolean;
    // private usingDeclarationList(awaitUsing: boolean, isStatement: boolean, yield_: boolean, await_: boolean, sourceOrder: number): Parser$ForVariableDeclarationListResult;
    // private usingStatement(awaitUsing: boolean, yield_: boolean, await_: boolean): void;
    // private variableDeclarationList(varType: TokenType, isStatement: boolean, yield_: boolean, await_: boolean, sourceOrder: number): Parser$ForVariableDeclarationListResult;
    // private variableStatement(varType: TokenType, yield_: boolean, await_: boolean): void;
    // private verifyAllowedMethodName(key: Expression, isStatic: boolean, computed: boolean, generator: boolean, accessor: boolean, async: boolean): void;
    // private verifyAssignment(op: number, lhs: Expression, rhs: Expression, inPatternPosition: boolean): Expression;
    // private verifyDeleteExpression(unaryToken: number, expr: Expression): Expression;
    // private verifyDestructuringAssignmentPattern(pattern: Expression, contextString: string): void;
    // private verifyDestructuringBindingPattern(pattern: Expression, identifierCallback: (param0: IdentNode) => void): void;
    // private verifyDestructuringParameterBindingPattern(pattern: Expression, paramToken: number, paramLine: number): void;
    // private verifyExpression(coverExpression: CoverExpressionError): void;
    // private verifyIdent(ident: IdentNode, yield_: boolean, await_: boolean): void;
    // private verifyIncDecExpression(unaryToken: number, opType: TokenType, lhs: Expression, isPostfix: boolean): Expression;
    // private verifyParameterList(functionNode: ParserContextFunctionNode): void;
    // private verifyPrimaryExpression(lhs: Expression, coverExpression: CoverExpressionError): void;
    // private verifyStrictIdent(ident: IdentNode, contextString: string): void;
    // private verifyStrictIdent(ident: IdentNode, contextString: string, bindingIdentifier: boolean): void;
    // private verifyUseStrict(function_: ParserContextFunctionNode, parseFlags: number): void;
    // private whileStatement(yield_: boolean, await_: boolean): void;
    // private withClause(): JavaMap<TruffleString, TruffleString>;
    // private withEntries(): JavaMap<TruffleString, TruffleString>;
    // private withStatement(yield_: boolean, await_: boolean): void;
    // private yieldExpression(in_: boolean, await_: boolean): Expression;
}
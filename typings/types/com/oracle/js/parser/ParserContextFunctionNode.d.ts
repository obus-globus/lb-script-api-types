import type { ParserContextBaseNode } from '../../../../com/oracle/js/parser/ParserContextBaseNode.d.ts'
import type { ParserContextBlockNode } from '../../../../com/oracle/js/parser/ParserContextBlockNode.d.ts'
import type { StringPool } from '../../../../com/oracle/js/parser/StringPool.d.ts'
import type { Expression } from '../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { IdentNode } from '../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { Module } from '../../../../com/oracle/js/parser/ir/Module.d.ts'
import type { Scope } from '../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { VarNode } from '../../../../com/oracle/js/parser/ir/VarNode.d.ts'
import type { TruffleString } from '../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ParserContextFunctionNode extends ParserContextBaseNode {
    constructor(token: number, ident: IdentNode, name: TruffleString, line: number, flags: number, parameters: IdentNode[], length: number, parentScope: Scope, functionScope: Scope)
    readonly bodyScope: Scope;
    // private containsDefaultParameter: boolean;
    readonly coverArrowHead: boolean;
    readonly duplicateParameterBinding: IdentNode;
    readonly endParserState: Object;
    // private hasParameterExpressions: boolean;
    // private hoistableBlockFunctionDeclarations: Map$Entry<VarNode, Scope>[];
    // private hoistedVarDeclarations: Map$Entry<VarNode, Scope>[];
    readonly ident: IdentNode;
    readonly internalName: TruffleString;
    readonly lastToken: number;
    readonly length: number;
    // private line: number;
    readonly module: Module;
    readonly name: TruffleString;
    readonly parameterBlock: ParserContextBlockNode;
    readonly parameterCount: number;
    readonly parameters: IdentNode[];
    // private parentScope: Scope;
    readonly simpleParameterList: boolean;
    // private token: number;
    readonly yieldOrAwaitInParameters: number;
    addDefaultParameter(varNode: VarNode): void;
    addParameter(param: IdentNode): void;
    // private addParameterBinding(bindingIdentifier: IdentNode): boolean;
    addParameterBindingDeclaration(varNode: VarNode): void;
    // private addParameterInit(param: IdentNode, index: number): void;
    addParameterInitialization(lineNumber: number, assignment: Expression, isDefault: boolean, isRest: boolean): void;
    createBodyScope(): Scope;
    createParameterBlock(): ParserContextBlockNode;
    declareHoistedBlockFunctionDeclarations(): void;
    // private ensureParameterBlock(): void;
    finishBodyScope(strings: StringPool): void;
    getBodyScope(): Scope;
    getDuplicateParameterBinding(): IdentNode;
    getEndParserState(): Object;
    getFirstToken(): number;
    getId(): number;
    getIdent(): IdentNode;
    getInternalName(): string;
    getInternalNameTS(): TruffleString;
    getLastToken(): number;
    getLength(): number;
    getLineNumber(): number;
    getModule(): Module;
    getName(): string;
    getNameTS(): TruffleString;
    getParameterBlock(): ParserContextBlockNode;
    getParameterCount(): number;
    getParameterScope(): Scope;
    getParameters(): IdentNode[];
    getYieldOrAwaitInParameters(): number;
    hasArrowEval(): boolean;
    hasEval(): boolean;
    // private hasFunctionSelf(): boolean;
    hasHoistedVarDeclarations(): boolean;
    hasNestedEval(): boolean;
    hasParameterExpressions(): boolean;
    hasScopeBlock(): boolean;
    // private initBodyScope(scope: Scope): Scope;
    // private initParameterBlock(): void;
    isArrow(): boolean;
    isAsync(): boolean;
    isClassConstructor(): boolean;
    isClassStaticBlock(): boolean;
    isCoverArrowHead(): boolean;
    isDerivedConstructor(): boolean;
    isGenerator(): boolean;
    isMethod(): boolean;
    isModule(): boolean;
    isProgram(): boolean;
    isScriptOrModule(): boolean;
    isSimpleParameterList(): boolean;
    isStrict(): boolean;
    // private needsArguments(): boolean;
    propagateFlagsToParent(parent: ParserContextFunctionNode): void;
    // private putFunctionSymbolIfAbsent(bindingName: string, bindingNameTS: TruffleString, symbolFlags: number): void;
    recordHoistableBlockFunctionDeclaration(functionDeclaration: VarNode, scope: Scope): void;
    recordHoistedVarDeclaration(varDecl: VarNode, scope: Scope): void;
    // private recordNonSimpleParameterList(): void;
    // private recordParameter(isDefault: boolean, isRest: boolean, isPattern: boolean): void;
    replaceBodyScope(scope: Scope): void;
    setCoverArrowHead(coverArrowHead: boolean): void;
    setEndParserState(endParserState: Object): void;
    setInternalName(internalName: TruffleString): void;
    setLastToken(token: number): void;
    setModule(module: Module): void;
    setParameters(parameters: IdentNode[]): void;
    setYieldOrAwaitInParameters(yieldOrAwaitInParameters: number): void;
    usesNewTarget(): boolean;
    usesSuper(): boolean;
    usesThis(): boolean;
    verifyHoistedVarDeclarations(): VarNode;
}
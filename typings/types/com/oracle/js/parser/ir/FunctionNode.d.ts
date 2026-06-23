import type { Source } from '../../../../../com/oracle/js/parser/Source.d.ts'
import type { Block } from '../../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { Flags } from '../../../../../com/oracle/js/parser/ir/Flags.d.ts'
import type { IdentNode } from '../../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LexicalContextExpression } from '../../../../../com/oracle/js/parser/ir/LexicalContextExpression.d.ts'
import type { Module } from '../../../../../com/oracle/js/parser/ir/Module.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FunctionNode extends LexicalContextExpression implements Flags<FunctionNode> {
    static ARROW_HEAD_FLAGS: number;
    static DEFINES_ARGUMENTS: number;
    static HAS_APPLY_ARGUMENTS_CALL: number;
    static HAS_ARROW_EVAL: number;
    static HAS_CLOSURES: number;
    static HAS_DIRECT_SUPER: number;
    static HAS_EVAL: number;
    static HAS_FUNCTION_DECLARATIONS: number;
    static HAS_NESTED_EVAL: number;
    static HAS_NON_SIMPLE_PARAMETER_LIST: number;
    static HAS_SCOPE_BLOCK: number;
    static IS_ANONYMOUS: number;
    static IS_ARROW: number;
    static IS_ASYNC: number;
    static IS_CLASS_CONSTRUCTOR: number;
    static IS_CLASS_FIELD_INITIALIZER: number;
    static IS_DECLARED: number;
    static IS_DERIVED_CONSTRUCTOR: number;
    static IS_GENERATOR: number;
    static IS_GETTER: number;
    static IS_METHOD: number;
    static IS_MODULE: number;
    static IS_PROGRAM: number;
    static IS_SCRIPT: number;
    static IS_SETTER: number;
    static IS_STATEMENT: number;
    static IS_STRICT: number;
    static NEEDS_PARENT_SCOPE: number;
    static NO_FUNCTION_SELF: number;
    static USES_ANCESTOR_SCOPE: number;
    static USES_ARGUMENTS: number;
    static USES_NEW_TARGET: number;
    static USES_SUPER: number;
    static USES_THIS: number;
    static getSourceName(paramsource: Source): string;
    constructor(source: Source, lineNumber: number, token: number, finish: number, firstToken: number, lastToken: number, ident: IdentNode, name: TruffleString, length: number, numOfParams: number, parameters: IdentNode[], flags: number, body: Block, endParserState: Object, module: Module, internalName: TruffleString)
    private constructor(functionNode: FunctionNode, lastToken: number, endParserState: Object, flags: number, name: TruffleString, body: Block, parameters: IdentNode[], source: Source)
    readonly body: Block;
    readonly endParserState: Object;
    readonly firstToken: number;
    readonly flags: number;
    readonly ident: IdentNode;
    readonly internalName: TruffleString;
    readonly lastToken: number;
    readonly length: number;
    readonly lineNumber: number;
    readonly module: Module;
    readonly name: TruffleString;
    readonly numOfParams: number;
    readonly parameters: IdentNode[];
    readonly source: Source;
    accept(lc: LexicalContext, visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(lc: LexicalContext, visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getBody(): Block;
    getEndParserState(): Object;
    getFirstToken(): number;
    getFlag(flag: number): boolean;
    getFlags(): number;
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
    getNumOfParams(): number;
    getParameters(): IdentNode[];
    getSource(): Source;
    getSourceName(): string;
    getVarDeclarationBlock(): Block;
    hasApplyArgumentsCall(): boolean;
    hasArrowEval(): boolean;
    hasClosures(): boolean;
    hasDirectSuper(): boolean;
    hasEval(): boolean;
    hasSimpleParameterList(): boolean;
    isAnonymous(): boolean;
    isArrow(): boolean;
    isAsync(): boolean;
    isClassConstructor(): boolean;
    isClassFieldInitializer(): boolean;
    isDeclared(): boolean;
    isDerivedConstructor(): boolean;
    isFunctionDeclaration(): boolean;
    isGenerator(): boolean;
    isGetter(): boolean;
    isMethod(): boolean;
    isModule(): boolean;
    isNamedFunctionExpression(): boolean;
    isNormal(): boolean;
    isProgram(): boolean;
    isScript(): boolean;
    isSetter(): boolean;
    isStatement(): boolean;
    isStrict(): boolean;
    needsArguments(): boolean;
    needsDynamicScope(): boolean;
    needsNewTarget(): boolean;
    needsSuper(): boolean;
    needsThis(): boolean;
    setBody(lc: LexicalContext, body: Block): FunctionNode;
    setFlag(lc: LexicalContext, flag: number): FunctionNode;
    setFlags(lc: LexicalContext, flags: number): FunctionNode;
    setName(lc: LexicalContext, name: TruffleString): FunctionNode;
    setUsesAncestorScope(usesAncestorScope: boolean): void;
    toString(): string;
    toString(sb: StringBuilder, printTypes: boolean): void;
    toString(includeTypeInfo: boolean): string;
    toStringTail(sb: StringBuilder, printTypes: boolean): void;
    usesAncestorScope(): boolean;
    usesNewTarget(): boolean;
    usesSuper(): boolean;
    usesThis(): boolean;
}
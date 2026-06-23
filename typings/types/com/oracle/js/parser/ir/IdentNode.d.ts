import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { FunctionCall } from '../../../../../com/oracle/js/parser/ir/FunctionCall.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { PropertyKey } from '../../../../../com/oracle/js/parser/ir/PropertyKey.d.ts'
import type { Symbol } from '../../../../../com/oracle/js/parser/ir/Symbol.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IdentNode extends Expression implements FunctionCall, PropertyKey {
    private constructor(identNode: IdentNode, name: string, nameTS: TruffleString, flags: number)
    constructor(token: number, finish: number, name: TruffleString)
    // private flags: number;
    readonly name: string;
    readonly nameTS: TruffleString;
    readonly symbol: Symbol;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getName(): string;
    getNameTS(): TruffleString;
    getPropertyName(): string;
    getPropertyNameTS(): TruffleString;
    getSymbol(): Symbol;
    isApplyArguments(): boolean;
    isArguments(): boolean;
    isCatchParameter(): boolean;
    isDeclaredHere(): boolean;
    isDirectSuper(): boolean;
    isFunction(): boolean;
    isIgnoredParameter(): boolean;
    isImportMeta(): boolean;
    isInitializedHere(): boolean;
    isInternal(): boolean;
    isMetaProperty(): boolean;
    isNewTarget(): boolean;
    isPrivate(): boolean;
    isPrivateInCheck(): boolean;
    isPropertyName(): boolean;
    isRestParameter(): boolean;
    isSuper(): boolean;
    isThis(): boolean;
    setIsApplyArguments(): IdentNode;
    setIsArguments(): IdentNode;
    setIsCatchParameter(): IdentNode;
    setIsDeclaredHere(): IdentNode;
    setIsDirectSuper(): IdentNode;
    setIsIgnoredParameter(): IdentNode;
    setIsImportMeta(): IdentNode;
    setIsInitializedHere(): IdentNode;
    setIsNewTarget(): IdentNode;
    setIsPrivate(): IdentNode;
    setIsPrivateInCheck(): IdentNode;
    setIsPropertyName(): IdentNode;
    setIsRestParameter(): IdentNode;
    setIsSuper(): IdentNode;
    setIsThis(): IdentNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}
import type { BaseNode } from '../../../../../com/oracle/js/parser/ir/BaseNode.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AccessNode extends BaseNode {
    private constructor(accessNode: AccessNode, base: Expression, property: TruffleString, isSuper: boolean)
    constructor(token: number, finish: number, base: Expression, property: TruffleString)
    constructor(token: number, finish: number, base: Expression, property: TruffleString, isSuper: boolean, isPrivate: boolean, optional: boolean, optionalChain: boolean)
    // private isPrivate: boolean;
    readonly property: TruffleString;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getPrivateName(): string;
    getPrivateNameTS(): TruffleString;
    getProperty(): string;
    getPropertyTS(): TruffleString;
    isPrivate(): boolean;
    // private setBase(base: Expression): AccessNode;
    setIsSuper(): AccessNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}
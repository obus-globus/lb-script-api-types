import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { FunctionNode } from '../../../../../com/oracle/js/parser/ir/FunctionNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PropertyNode extends Node {
    private constructor(propertyNode: PropertyNode, key: Expression, value: Expression, getter: FunctionNode, setter: FunctionNode, isStatic: boolean, computed: boolean, coverInitializedName: boolean, proto: boolean)
    constructor(token: number, finish: number, key: Expression, value: Expression, getter: FunctionNode, setter: FunctionNode, isStatic: boolean, computed: boolean, isAnonymousFunctionDefinition: boolean)
    constructor(token: number, finish: number, key: Expression, value: Expression, getter: FunctionNode, setter: FunctionNode, isStatic: boolean, computed: boolean, coverInitializedName: boolean, proto: boolean)
    constructor(token: number, finish: number, key: Expression, value: Expression, getter: FunctionNode, setter: FunctionNode, isStatic: boolean, computed: boolean, coverInitializedName: boolean, proto: boolean, classField: boolean, isAnonymousFunctionDefinition: boolean)
    readonly classField: boolean;
    readonly computed: boolean;
    readonly coverInitializedName: boolean;
    readonly getter: FunctionNode;
    // private isAnonymousFunctionDefinition: boolean;
    // private isStatic: boolean;
    readonly key: Expression;
    readonly proto: boolean;
    readonly setter: FunctionNode;
    readonly value: Expression;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getGetter(): FunctionNode;
    getKey(): Expression;
    getKeyName(): string;
    getKeyNameTS(): TruffleString;
    getPrivateName(): string;
    getPrivateNameTS(): TruffleString;
    getSetter(): FunctionNode;
    getValue(): Expression;
    isAccessor(): boolean;
    isAnonymousFunctionDefinition(): boolean;
    isClassField(): boolean;
    isClassStaticBlock(): boolean;
    isComputed(): boolean;
    isCoverInitializedName(): boolean;
    isPrivate(): boolean;
    isProto(): boolean;
    isRest(): boolean;
    isStatic(): boolean;
    setGetter(getter: FunctionNode): PropertyNode;
    // private setKey(key: Expression): PropertyNode;
    setSetter(setter: FunctionNode): PropertyNode;
    setValue(value: Expression): PropertyNode;
    toString(sb: StringBuilder, printType: boolean): void;
    // private toStringKey(sb: StringBuilder, printType: boolean): void;
}
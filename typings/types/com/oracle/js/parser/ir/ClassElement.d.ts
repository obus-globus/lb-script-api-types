import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { FunctionNode } from '../../../../../com/oracle/js/parser/ir/FunctionNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { PropertyNode } from '../../../../../com/oracle/js/parser/ir/PropertyNode.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClassElement extends PropertyNode {
    static createAccessor(paramtoken: number, paramfinish: number, paramkey: Expression, paramget: FunctionNode, paramset: FunctionNode, paramdecorators: Expression[], paramisPrivate: boolean, paramisStatic: boolean, paramhasComputedKey: boolean): ClassElement;
    static createAutoAccessor(paramtoken: number, paramfinish: number, paramkey: Expression, paraminitializer: FunctionNode, paramclassElementDecorators: Expression[], paramisStatic: boolean, paramhasComputedKey: boolean, paramanonymousFunctionDefinition: boolean): ClassElement;
    static createDefaultConstructor(paramtoken: number, paramfinish: number, paramkey: Expression, paramvalue: Expression): ClassElement;
    static createField(paramtoken: number, paramfinish: number, paramkey: Expression, paraminitialize: Expression, paramdecorators: Expression[], paramisStatic: boolean, paramhasComputedKey: boolean, paramanonymousFunctionDefinition: boolean): ClassElement;
    static createMethod(paramtoken: number, paramfinish: number, paramkey: Expression, paramvalue: Expression, paramdecorators: Expression[], paramisStatic: boolean, paramhasComputedKey: boolean): ClassElement;
    static createStaticInitializer(paramtoken: number, paramfinish: number, paramfunctionNode: FunctionNode): ClassElement;
    private constructor(element: ClassElement, kind: number, key: Expression, value: Expression, get: FunctionNode, set: FunctionNode, decorators: Expression[], hasComputedKey: boolean, isAnonymousFunctionDefinition: boolean, isStatic: boolean)
    private constructor(token: number, finish: number, kind: number, key: Expression, value: Expression, get: FunctionNode, set: FunctionNode, decorators: Expression[], hasComputedKey: boolean, isAnonymousFunctionDefinition: boolean, isStatic: boolean)
    readonly decorators: Expression[];
    // private kind: number;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getDecorators(): Expression[];
    isAccessor(): boolean;
    isAutoAccessor(): boolean;
    isClassField(): boolean;
    isClassFieldOrAutoAccessor(): boolean;
    isClassStaticBlock(): boolean;
    isMethod(): boolean;
    isMethodOrAccessor(): boolean;
    isPrivate(): boolean;
    isStatic(): boolean;
    setDecorators(decorators: Expression[]): ClassElement;
    setGetter(get: FunctionNode): ClassElement;
    setKey(key: Expression): ClassElement;
    setSetter(set: FunctionNode): ClassElement;
    setValue(value: Expression): ClassElement;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
    // private toStringKey(sb: StringBuilder, printType: boolean): void;
}
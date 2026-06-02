import type { ClassElement } from '../../../../../com/oracle/js/parser/ir/ClassElement.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { IdentNode } from '../../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LexicalContextExpression } from '../../../../../com/oracle/js/parser/ir/LexicalContextExpression.d.ts'
import type { LexicalContextScope } from '../../../../../com/oracle/js/parser/ir/LexicalContextScope.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { Scope } from '../../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClassNode extends LexicalContextExpression implements LexicalContextScope {
    static PRIVATE_CONSTRUCTOR_BINDING_NAME: TruffleString;
    private constructor(classNode: ClassNode, ident: IdentNode, classHeritage: Expression, constructor: ClassElement, classElements: ClassElement[], classDecorators: Expression[])
    constructor(token: number, finish: number, ident: IdentNode, classHeritage: Expression, constructor: ClassElement, classElements: ClassElement[], classDecorators: Expression[], scope: Scope, staticElementCount: number, hasPrivateMethods: boolean, hasPrivateInstanceMethods: boolean, hasInstanceFieldsOrAccessors: boolean, hasClassElementDecorators: boolean)
    // private classDecorators: Expression[];
    readonly classElements: ClassElement[];
    readonly classHeritage: Expression;
    readonly constructor: ClassElement;
    // private hasClassElementDecorators: boolean;
    // private hasInstanceFieldsOrAccessors: boolean;
    // private hasPrivateInstanceMethods: boolean;
    // private hasPrivateMethods: boolean;
    readonly ident: IdentNode;
    readonly scope: Scope;
    readonly staticElementCount: number;
    accept(lc: LexicalContext, visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(lc: LexicalContext, visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getClassElements(): ClassElement[];
    getClassHeadScope(): Scope;
    getClassHeritage(): Expression;
    getConstructor(): ClassElement;
    getDecorators(): Expression[];
    getIdent(): IdentNode;
    getInstanceElementCount(): number;
    getScope(): Scope;
    getStaticElementCount(): number;
    hasClassElementDecorators(): boolean;
    hasInstanceFieldsOrAccessors(): boolean;
    hasPrivateInstanceMethods(): boolean;
    hasPrivateMethods(): boolean;
    hasStaticElements(): boolean;
    isAnonymous(): boolean;
    needsInitializeInstanceElements(): boolean;
    setClassElements(classElements: ClassElement[]): ClassNode;
    // private setClassHeritage(classHeritage: Expression): ClassNode;
    setConstructor(constructor: ClassElement): ClassNode;
    setDecorators(decorators: Expression[]): ClassNode;
    // private setIdent(ident: IdentNode): ClassNode;
    toString(sb: StringBuilder, printType: boolean): void;
}
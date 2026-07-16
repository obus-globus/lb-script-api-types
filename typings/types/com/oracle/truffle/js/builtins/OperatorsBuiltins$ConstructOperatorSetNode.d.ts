import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetPrototypeNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetPrototypeNode.d.ts'
import type { HasPropertyCacheNode } from '../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { IsJSObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSHasPropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { ReadElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { JSGetLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSGetLengthNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { IsCallableNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { IsConstructorNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsConstructorNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { OperatorSet } from '../../../../../com/oracle/truffle/js/runtime/objects/OperatorSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class OperatorsBuiltins$ConstructOperatorSetNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): OperatorsBuiltins$ConstructOperatorSetNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private classNameToStringNode: JSToStringNode;
    // private context: JSContext;
    // private getClassNameNode: PropertyGetNode;
    // private getOpenSetLengthNode: JSGetLengthNode;
    // private getOperatorDefinitionsNode: PropertyGetNode;
    // private getSuperclassNode: GetPrototypeNode;
    // private hasOperatorDefinitionsNode: HasPropertyCacheNode;
    // private isCallableNode: IsCallableNode;
    // private openOperatorToStringNode: JSToStringNode;
    // private readOpenSetElementNode: ReadElementNode;
    // private tableGetNode: ReadElementNode;
    // private tableHasKeyNode: JSHasPropertyNode;
    // private tableIsObjectNode: IsObjectNode;
    // private typeIsConstructorNode: IsConstructorNode;
    // private typeIsJSObjectNode: IsJSObjectNode;
    construct(table: Object, extraTables: Object[]): OperatorSet;
    execute(table: Object, extraTables: Object[]): OperatorSet;
    findOperatorDefinitions(arg: JSDynamicObject): OperatorSet;
    getClassName(constructor: Object): TruffleString;
    getContext(): JSContext;
    getOpenSetLength(openSet: Object): number;
    getOperatorDefinitions(constructor: JSDynamicObject): OperatorSet;
    getOperatorSetOfClass(realm: JSRealm, constructor: JSDynamicObject): OperatorSet;
    getSuperclass(constructor: JSDynamicObject): JSDynamicObject;
    hasOperatorDefinitions(constructor: JSDynamicObject): boolean;
    isCallable(operatorImplementation: Object): boolean;
    isJSConstructor(type: Object): boolean;
    openOperatorToString(openOperator: Object): TruffleString;
    readOpenSetElement(openSet: Object, index: number): Object;
    tableGet(table: Object, key: TruffleString): Object;
    tableHasKey(table: Object, key: TruffleString): boolean;
    tableIsObject(table: Object): boolean;
}
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptLanguage } from '../../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSConstantNode$JSConstantStringNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSConstantNode$JSConstantStringNode.d.ts'
import type { JSTypeofIdenticalNode$Type } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSTypeofIdenticalNode$Type.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSUnaryNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSProxyObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSProxyObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSTypeofIdenticalNode extends JSUnaryNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramchildNode: JavaScriptNode, paramstring: TruffleString): JSTypeofIdenticalNode;
    static create(paramchildNode: JavaScriptNode, paramconstStringNode: JSConstantNode$JSConstantStringNode): JSTypeofIdenticalNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(childNode: JavaScriptNode, type: JSTypeofIdenticalNode$Type)
    // private type: JSTypeofIdenticalNode$Type;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doBigInt(value: BigInt): boolean;
    doBoolean(value: boolean): boolean;
    doForeignObject(value: Object, interop: InteropLibrary): boolean;
    doNumber(value: SafeInteger): boolean;
    doNumber(value: number): boolean;
    doString(value: TruffleString): boolean;
    doSymbol(value: Symbol): boolean;
    doTypeObjectOrFunctionJSFunction(value: Object): boolean;
    doTypeObjectOrFunctionJSProxy(value: JSProxyObject, isCallableNode: IsCallableNode): boolean;
    doTypeObjectOrFunctionOther(value: JSDynamicObject): boolean;
    doTypePrimitive(value: JSDynamicObject): boolean;
    execute(frame: VirtualFrame): Object;
    executeBoolean(frame: VirtualFrame): boolean;
    // private getLanguageSafe(): JavaScriptLanguage;
    hasTag(tag: Class<Tag>): boolean;
    // private isFunction(value: Object, interop: InteropLibrary): boolean;
    // private isHostSymbolInNashornCompatMode(value: Object): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
    // private parseMaterializationInfo(): Object[];
}
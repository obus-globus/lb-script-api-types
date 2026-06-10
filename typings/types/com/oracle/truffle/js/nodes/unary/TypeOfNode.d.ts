import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSUnaryNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSProxyObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSProxyObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TypeOfNode extends JSUnaryNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(): TypeOfNode;
    static create(paramoperand: JavaScriptNode): TypeOfNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(operand: JavaScriptNode)
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doBigInt(operand: BigInt): TruffleString;
    doBoolean(operand: boolean): TruffleString;
    doDouble(operand: number): TruffleString;
    doInt(operand: number): TruffleString;
    doJSFunction(operand: Object): TruffleString;
    doJSObjectOnly(operand: Object): TruffleString;
    doJSProxy(operand: JSProxyObject, typeofNode: TypeOfNode): TruffleString;
    doJavaObject(operand: Object): TruffleString;
    doNull(operand: Object): TruffleString;
    doString(operand: TruffleString): TruffleString;
    doSymbol(operand: Symbol): TruffleString;
    doTruffleObject(operand: Object, interop: InteropLibrary): TruffleString;
    doUndefined(operand: Object): TruffleString;
    executeString(operand: Object): TruffleString;
    getNodeObject(): Object;
    hasTag(tag: Class<Tag>): boolean;
    // private isHostSymbolInNashornCompatMode(value: Object): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
}
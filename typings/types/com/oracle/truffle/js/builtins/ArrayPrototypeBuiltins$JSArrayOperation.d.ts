import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ArrayPrototypeBuiltins$BasicArrayOperation } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$BasicArrayOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSHasPropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { ReadElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { WriteElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { ArrayCreateNode } from '../../../../../com/oracle/truffle/js/nodes/array/ArrayCreateNode.d.ts'
import type { JSArrayNextElementIndexNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSArrayNextElementIndexNode.d.ts'
import type { JSArrayPreviousElementIndexNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSArrayPreviousElementIndexNode.d.ts'
import type { JSSetLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSSetLengthNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayPrototypeBuiltins$JSArrayOperation extends ArrayPrototypeBuiltins$BasicArrayOperation {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    constructor(context: JSContext, builtin: JSBuiltin, isTypedArrayImplementation: boolean)
    // private arrayCreateNode: ArrayCreateNode;
    // private hasPropertyNode: JSHasPropertyNode;
    // private nextElementIndexNode: JSArrayNextElementIndexNode;
    // private previousElementIndexNode: JSArrayPreviousElementIndexNode;
    // private readNode: ReadElementNode;
    // private setLengthNode: JSSetLengthNode;
    // private writeNode: WriteElementNode;
    // private writeOwnNode: WriteElementNode;
    arrayCreate(length: number): JSArrayObject;
    createEmpty(thisObj: Object, length: number): JSObject;
    // private getOrCreateHasPropertyNode(): JSHasPropertyNode;
    // private getOrCreateReadNode(): ReadElementNode;
    // private getOrCreateWriteNode(): WriteElementNode;
    // private getOrCreateWriteOwnNode(): WriteElementNode;
    hasProperty(target: Object, propertyIdx: number): boolean;
    nextElementIndex(target: Object, currentIndex: number, length: number): number;
    previousElementIndex(target: Object, currentIndex: number): number;
    read(target: Object, index: number): Object;
    setLength(thisObject: Object, length: number): void;
    // private setLengthIntl(thisObject: Object, length: Object): void;
    typedArrayCreateSameType(thisObj: JSTypedArrayObject, length: number): JSTypedArrayObject;
    write(target: Object, index: number, value: Object): void;
    writeOwn(target: Object, index: number, value: Object): void;
}
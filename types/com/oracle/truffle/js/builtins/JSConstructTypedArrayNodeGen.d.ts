import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSConstructTypedArrayNode } from '../../../../../com/oracle/truffle/js/builtins/JSConstructTypedArrayNode.d.ts'
import type { JSConstructTypedArrayNodeGen$ForeignObject0Data } from '../../../../../com/oracle/truffle/js/builtins/JSConstructTypedArrayNodeGen$ForeignObject0Data.d.ts'
import type { JSConstructTypedArrayNodeGen$ObjectData } from '../../../../../com/oracle/truffle/js/builtins/JSConstructTypedArrayNodeGen$ObjectData.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { WriteElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { ImportValueNode } from '../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArrayFactory } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSConstructTypedArrayNodeGen extends JSConstructTypedArrayNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramfactory: TypedArrayFactory, paramarguments: (Object | null)[]): JSConstructTypedArrayNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, factory: TypedArrayFactory, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private arguments2_: JavaScriptNode;
    // private arguments3_: JavaScriptNode;
    // private foreignObject0_cache: JSConstructTypedArrayNodeGen$ForeignObject0Data;
    // private foreignObject1_importValue_: ImportValueNode;
    // private interopArrayBuffer_bufferInterop_: InteropLibrary;
    // private object_cache: JSConstructTypedArrayNodeGen$ObjectData;
    // private state_0_: number;
    // private writeOwnNode: WriteElementNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object, arguments2Value: Object, arguments3Value: Object): JSDynamicObject;
    // private execute_generic1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int0(state_0__: number, frameValue: VirtualFrame): Object;
    // private foreignObject1Boundary(state_0: number, arguments0Value__: JSDynamicObject, arguments1Value_: Object, arguments2Value_: Object, arguments3Value_: Object, writeOwnNode_1: WriteElementNode, importValue__: ImportValueNode): Object;
    getArguments(): JavaScriptNode[];
}
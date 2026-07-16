import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSIdenticalNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSIdenticalNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class CopyDataPropertiesNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): CopyDataPropertiesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    copyDataPropertiesForeign(target: JSDynamicObject, from: Object, excludedKeys: Object[], withExcludedKeys: boolean, excludedValues: Object[], withExcludedValues: boolean, objInterop: InteropLibrary, iteratorInterop: InteropLibrary, arrayInterop: InteropLibrary, stringInterop: InteropLibrary, importValue: ImportValueNode, toString: JSToStringNode, equalsNode: TruffleString$EqualNode, sameValueNode: JSIdenticalNode, switchEncodingNode: TruffleString$SwitchEncodingNode, toJavaStringNode: TruffleString$ToJavaStringNode): JSDynamicObject;
    execute(target: Object, source: Object): Object;
    execute(target: Object, source: Object, excludedKeys: Object[]): Object;
    execute(target: Object, source: Object, excludedKeys: Object[], excludedValues: Object[]): Object;
    executeImpl(target: Object, source: Object, excludedKeys: Object[], withExcludedKeys: boolean, excludedValues: Object[], withExcludedValues: boolean): Object;
}
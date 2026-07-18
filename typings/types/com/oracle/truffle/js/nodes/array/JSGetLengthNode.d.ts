import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { ArrayLengthNode$ArrayLengthReadNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayLengthNode$ArrayLengthReadNode.d.ts'
import type { JSToLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToLengthNode.d.ts'
import type { JSToUInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToUInt32Node.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSGetLengthNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): JSGetLengthNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private toLength: boolean;
    // private toLengthNode: JSToLengthNode;
    // private toUInt32Node: JSToUInt32Node;
    createLengthProperty(): PropertyGetNode;
    execute(value: Object): Object;
    executeLong(value: Object): number;
    getArrayLength(target: JSArrayObject, arrayLengthReadNode: ArrayLengthNode$ArrayLengthReadNode): number;
    getArrayLengthInt(target: JSArrayObject, arrayLengthReadNode: ArrayLengthNode$ArrayLengthReadNode): number;
    getLengthForeign(target: Object, interop: InteropLibrary, importValueNode: ImportValueNode): number;
    getNonArrayLength(target: JSDynamicObject, getLengthPropertyNode: PropertyGetNode): number;
    // private getToLengthNode(): JSToLengthNode;
    // private getUInt32Node(): JSToUInt32Node;
    // private toLengthDouble(target: Object): number;
    // private toLengthLong(target: Object): number;
    // private toUInt32Double(target: Object): number;
    // private toUInt32Long(target: Object): number;
}
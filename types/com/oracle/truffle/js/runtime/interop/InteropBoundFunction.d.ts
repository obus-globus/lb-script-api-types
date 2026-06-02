import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { ExportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ExportValueNode.d.ts'
import type { JSInteropExecuteNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropExecuteNode.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { InteropFunction } from '../../../../../../com/oracle/truffle/js/runtime/interop/InteropFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InteropBoundFunction extends InteropFunction {
    constructor(function_: JSFunctionObject, receiver: Object)
    readonly function: JSFunctionObject;
    readonly receiver: Object;
    equals(obj: Object | null): boolean;
    execute(arguments: Object[], self: InteropLibrary, callNode: JSInteropExecuteNode, exportNode: ExportValueNode): Object;
    getReceiver(): Object;
    hashCode(): number;
    isExecutable(): boolean;
}
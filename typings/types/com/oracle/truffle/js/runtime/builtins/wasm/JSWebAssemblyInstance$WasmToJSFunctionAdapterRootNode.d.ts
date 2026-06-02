import type { TruffleStackTraceElement } from '../../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InteropLibrary } from '../../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { RootNode } from '../../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { BranchProfile } from '../../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { ToJSValueNode } from '../../../../../../../com/oracle/truffle/js/nodes/wasm/ToJSValueNode.d.ts'
import type { ToWebAssemblyValueNode } from '../../../../../../../com/oracle/truffle/js/nodes/wasm/ToWebAssemblyValueNode.d.ts'
import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JavaScriptRootNode } from '../../../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { WasmFunctionTypeInfo } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/wasm/WasmFunctionTypeInfo.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JSWebAssemblyInstance$WasmToJSFunctionAdapterRootNode extends JavaScriptRootNode {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    constructor(context: JSContext, type: WasmFunctionTypeInfo)
    // private context: JSContext;
    // private errorBranch: BranchProfile;
    // private exportFunctionLib: InteropLibrary;
    // private getExportedFunctionLib: DynamicObjectLibrary;
    // private readArrayElementLib: InteropLibrary;
    // private toJSValueNode: ToJSValueNode;
    // private toWebAssemblyValueNode: ToWebAssemblyValueNode;
    // private type: WasmFunctionTypeInfo;
    // private convertArgToWasm(frameArguments: Object[], i: number): Object;
    // private convertArgsToWasm(frameArguments: Object[], paramCount: number): Object[];
    // private convertArgsToWasmNoUnroll(frameArguments: Object[], paramCount: number): Object[];
    execute(frame: VirtualFrame): Object;
    toString(): string;
}
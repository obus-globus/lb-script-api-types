import type { TruffleStackTraceElement } from '../../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { AbstractTruffleException } from '../../../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Frame } from '../../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InteropLibrary } from '../../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { RootNode } from '../../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { DynamicObject$GetNode } from '../../../../../../../com/oracle/truffle/api/object/DynamicObject$GetNode.d.ts'
import type { ToJSValueNode } from '../../../../../../../com/oracle/truffle/js/nodes/wasm/ToJSValueNode.d.ts'
import type { ToWebAssemblyValueNode } from '../../../../../../../com/oracle/truffle/js/nodes/wasm/ToWebAssemblyValueNode.d.ts'
import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JavaScriptRootNode } from '../../../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { WasmFunctionTypeInfo } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/wasm/WasmFunctionTypeInfo.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JSWebAssemblyInstance$WasmToJSFunctionAdapterRootNode extends JavaScriptRootNode {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    constructor(context: JSContext, type: WasmFunctionTypeInfo)
    // private context: JSContext;
    // private exnAddrLib: InteropLibrary;
    // private exnTagLib: InteropLibrary;
    // private exportedFunctionLib: InteropLibrary;
    // private getExportedFunction: DynamicObject$GetNode;
    // private readArrayElementLib: InteropLibrary;
    // private tagTypeLib: InteropLibrary;
    // private toJSValueNode: ToJSValueNode;
    // private toWebAssemblyValueNode: ToWebAssemblyValueNode;
    // private type: WasmFunctionTypeInfo;
    // private convertArgToWasm(frameArguments: Object[], i: number): Object;
    // private convertArgsToWasm(frameArguments: Object[], paramCount: number): Object[];
    // private convertArgsToWasmNoUnroll(frameArguments: Object[], paramCount: number): Object[];
    execute(frame: VirtualFrame): Object;
    // private handleWasmException(realm: JSRealm, exnAddr: AbstractTruffleException, exnAddrInterop: InteropLibrary): void;
    toString(): string;
}
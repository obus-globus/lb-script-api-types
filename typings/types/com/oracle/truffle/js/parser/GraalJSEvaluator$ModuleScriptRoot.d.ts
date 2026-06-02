import type { TruffleStackTraceElement } from '../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { PerformPromiseThenNode } from '../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseThenNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JavaScriptRootNode } from '../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { JSModuleData } from '../../../../../com/oracle/truffle/js/runtime/objects/JSModuleData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GraalJSEvaluator$ModuleScriptRoot extends JavaScriptRootNode {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    private constructor(context: JSContext, parsedModule: JSModuleData, source: Source)
    // private context: JSContext;
    // private parsedModule: JSModuleData;
    // private performPromiseThenNode: PerformPromiseThenNode;
    // private source: Source;
    // private evalModule(realm: JSRealm): Object;
    execute(frame: VirtualFrame): Object;
    getModuleData(): JSModuleData;
}
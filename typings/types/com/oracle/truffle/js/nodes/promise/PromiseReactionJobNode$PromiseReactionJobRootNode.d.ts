import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { InstrumentableNode$WrapperNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode$WrapperNode.d.ts'
import type { ProbeNode } from '../../../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { ConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JavaScriptRootNode } from '../../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PromiseReactionJobNode$PromiseReactionJobRootNode extends JavaScriptRootNode implements InstrumentableNode {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    static findInstrumentableParent(paramnode: Node): Node;
    constructor(context: JSContext)
    // private callHandlerNode: JSFunctionCallNode;
    // private callRejectNode: JSFunctionCallNode;
    // private callResolveNode: JSFunctionCallNode;
    // private context: JSContext;
    // private getArgument: PropertyGetNode;
    // private getErrorObjectNode: TryCatchNode$GetErrorObjectNode;
    // private getReaction: PropertyGetNode;
    // private handlerProf: ConditionProfile;
    // private callHandler(): JSFunctionCallNode;
    // private callReject(): JSFunctionCallNode;
    // private callResolve(): JSFunctionCallNode;
    createProbe(sourceSection: SourceSection): ProbeNode;
    createWrapper(probe: ProbeNode): InstrumentableNode$WrapperNode;
    execute(frame: VirtualFrame): Object;
    findAsynchronousFrames(frame: Frame): TruffleStackTraceElement[];
    findNearestNodeAt(line: number, column: number, tags: Class<Tag>[]): Node;
    findNearestNodeAt(sourceCharIndex: number, tags: Class<Tag>[]): Node;
    findProbe(): ProbeNode;
    // private getErrorObject(): TryCatchNode$GetErrorObjectNode;
    getNodeObject(): Object;
    hasTag(tag: Class<Tag>): boolean;
    hasTag(tag: Class<Tag>): boolean;
    isCaptureFramesForTrace(compiledFrame: boolean): boolean;
    isInstrumentable(): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
}
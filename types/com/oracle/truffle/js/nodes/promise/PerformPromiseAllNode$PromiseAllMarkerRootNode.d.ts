import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { JavaScriptLanguage } from '../../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { JavaScriptRootNode } from '../../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PerformPromiseAllNode$PromiseAllMarkerRootNode extends JavaScriptRootNode {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    constructor(lang: JavaScriptLanguage, sourceSection: SourceSection)
    execute(frame: VirtualFrame): Object;
    getName(): string;
    isInstrumentable(): boolean;
    isInternal(): boolean;
}
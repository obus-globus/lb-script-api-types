import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleStackTraceElement } from '../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { JavaScriptLanguage } from '../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class JavaScriptRootNode extends RootNode {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    constructor()
    constructor(lang: JavaScriptLanguage)
    constructor(lang: JavaScriptLanguage, sourceSection: SourceSection)
    constructor(lang: JavaScriptLanguage, sourceSection: SourceSection, frameDescriptor: FrameDescriptor)
    readonly sourceSection: SourceSection;
    countsTowardsStackTraceLimit(): boolean;
    getLanguage(): JavaScriptLanguage;
    getLanguage<C extends TruffleLanguage<Object>>(languageClass: Class<C>): C;
    getRealm(): JSRealm;
    getSourceSection(): SourceSection;
    isCaptureFramesForTrace(): boolean;
    isCaptureFramesForTrace(compiledFrame: Node): boolean;
    isCaptureFramesForTrace(compiledFrame: boolean): boolean;
    isFunction(): boolean;
    isInternal(): boolean;
    isResumption(): boolean;
}
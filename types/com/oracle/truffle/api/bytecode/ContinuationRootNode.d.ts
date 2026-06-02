import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { BytecodeLocation } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeLocation.d.ts'
import type { BytecodeRootNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeRootNode.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ContinuationRootNode extends RootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(token: Object, language: TruffleLanguage<Object>, frameDescriptor: FrameDescriptor)
    findFrame(frame: Frame): Frame;
    getLocation(): BytecodeLocation;
    getSourceRootNode(): BytecodeRootNode;
}
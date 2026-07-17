import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { FrameDescriptor } from '../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { BytecodeOSRNode } from '../../../../com/oracle/truffle/api/nodes/BytecodeOSRNode.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { BaseOSRRootNode } from '../../../../com/oracle/truffle/runtime/BaseOSRRootNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BytecodeOSRRootNode extends BaseOSRRootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(language: TruffleLanguage<Object>, frameDescriptor: FrameDescriptor, bytecodeOSRNode: BytecodeOSRNode, target: number, interpreterState: Object, entryTagsCache: Object)
    // private entryTagsCache: Object;
    // private interpreterState: Object;
    // private target: number;
    getEntryTagsCache(): Object;
    getInterpreterState(): Object;
    getName(): string;
    getOSRNode(): BytecodeOSRNode;
    getTarget(): number;
    toString(): string;
    usesParentFrame(): boolean;
}
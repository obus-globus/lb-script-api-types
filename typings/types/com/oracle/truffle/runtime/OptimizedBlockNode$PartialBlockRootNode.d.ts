import type { FrameDescriptor } from '../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { OptimizedBlockNode } from '../../../../com/oracle/truffle/runtime/OptimizedBlockNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OptimizedBlockNode$PartialBlockRootNode<T extends Node> extends RootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(descriptor: FrameDescriptor, block: OptimizedBlockNode<T>, startIndex: number, endIndex: number, blockIndex: number)
    // private block: OptimizedBlockNode<T>;
    // private blockIndex: number;
    // private cachedSourceSection: SourceSection;
    // private endIndex: number;
    // private startIndex: number;
    // private computeName(name: string): string;
    execute(frame: VirtualFrame): Object;
    getName(): string;
    getQualifiedName(): string;
    getSourceSection(): SourceSection;
    isCloningAllowed(): boolean;
    isInternal(): boolean;
    // private readAndProfileArg(arguments: Object[]): number;
    toString(): string;
}
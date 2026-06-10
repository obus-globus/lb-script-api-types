import type { Assumption } from '../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { ReplaceObserver } from '../../../../com/oracle/truffle/api/ReplaceObserver.d.ts'
import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { BlockNode } from '../../../../com/oracle/truffle/api/nodes/BlockNode.d.ts'
import type { BlockNode$ElementExecutor } from '../../../../com/oracle/truffle/api/nodes/BlockNode$ElementExecutor.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { OptimizedBlockNode$PartialBlocks } from '../../../../com/oracle/truffle/runtime/OptimizedBlockNode$PartialBlocks.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class OptimizedBlockNode<T extends Node> extends BlockNode<T> implements ReplaceObserver {
    static NO_ARGUMENT: number;
    static create(paramelements: Object | null, paramexecutor: BlockNode$ElementExecutor<Node>): BlockNode<Node>;
    constructor(elements: T[], executor: BlockNode$ElementExecutor<T>)
    // private alwaysNoArgument: Assumption;
    // private executor: BlockNode$ElementExecutor<T>;
    readonly partialBlocks: OptimizedBlockNode$PartialBlocks<T>;
    executeBoolean(frame: VirtualFrame, argument: number): boolean;
    executeByte(frame: VirtualFrame, argument: number): number;
    executeChar(frame: VirtualFrame, argument: number): string;
    executeDouble(frame: VirtualFrame, argument: number): number;
    executeFloat(frame: VirtualFrame, argument: number): number;
    executeGeneric(frame: VirtualFrame, argument: number): Object;
    executeInt(frame: VirtualFrame, argument: number): number;
    executeLong(frame: VirtualFrame, argument: number): number;
    executeShort(frame: VirtualFrame, argument: number): number;
    executeVoid(frame: VirtualFrame, argument: number): void;
    getPartialBlocks(): OptimizedBlockNode$PartialBlocks<T>;
    nodeReplaced(oldNode: Node, newNode: Node, reason: CharSequence): boolean;
    // private profileArg(arg: number): number;
    // private reportBlocksInstalled(reason: CharSequence): void;
}
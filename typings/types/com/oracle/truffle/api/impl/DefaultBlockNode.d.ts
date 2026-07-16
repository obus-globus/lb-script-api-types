import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { BlockNode } from '../../../../../com/oracle/truffle/api/nodes/BlockNode.d.ts'
import type { BlockNode$ElementExecutor } from '../../../../../com/oracle/truffle/api/nodes/BlockNode$ElementExecutor.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultBlockNode<T extends Node> extends BlockNode<T> {
    static NO_ARGUMENT: number;
    static create<T extends Node>(paramelements: T[], paramexecutor: BlockNode$ElementExecutor<T>): BlockNode<T>;
    constructor(elements: T[], executor: BlockNode$ElementExecutor<T>)
    // private executor: BlockNode$ElementExecutor<T>;
    executeBoolean(frame: VirtualFrame, arg: number): boolean;
    executeByte(frame: VirtualFrame, arg: number): number;
    executeChar(frame: VirtualFrame, arg: number): string;
    executeDouble(frame: VirtualFrame, arg: number): number;
    executeFloat(frame: VirtualFrame, arg: number): number;
    executeGeneric(frame: VirtualFrame, arg: number): Object;
    executeInt(frame: VirtualFrame, arg: number): number;
    executeLong(frame: VirtualFrame, arg: number): number;
    executeShort(frame: VirtualFrame, arg: number): number;
    executeVoid(frame: VirtualFrame, arg: number): void;
}
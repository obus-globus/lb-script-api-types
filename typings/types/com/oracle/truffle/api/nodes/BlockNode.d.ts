import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { BlockNode$ElementExecutor } from '../../../../../com/oracle/truffle/api/nodes/BlockNode$ElementExecutor.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BlockNode<T extends Node> extends Node {
    static NO_ARGUMENT: number;
    static create(paramelements: (Node | null)[], paramexecutor: BlockNode$ElementExecutor<Node>): BlockNode<Node>;
    constructor(elements: T[])
    readonly elements: T[];
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
    getElements(): T[];
}
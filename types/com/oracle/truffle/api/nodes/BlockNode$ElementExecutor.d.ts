import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BlockNode$ElementExecutor<T extends Node> extends Object{
    executeBoolean(frame: VirtualFrame, node: T, index: number, argument: number): boolean;
    executeByte(frame: VirtualFrame, node: T, index: number, argument: number): number;
    executeChar(frame: VirtualFrame, node: T, index: number, argument: number): string;
    executeDouble(frame: VirtualFrame, node: T, index: number, argument: number): number;
    executeFloat(frame: VirtualFrame, node: T, index: number, argument: number): number;
    executeGeneric(frame: VirtualFrame, node: T, index: number, argument: number): Object;
    executeInt(frame: VirtualFrame, node: T, index: number, argument: number): number;
    executeLong(frame: VirtualFrame, node: T, index: number, argument: number): number;
    executeShort(frame: VirtualFrame, node: T, index: number, argument: number): number;
    executeVoid(frame: VirtualFrame, node: T, index: number, argument: number): void;
}
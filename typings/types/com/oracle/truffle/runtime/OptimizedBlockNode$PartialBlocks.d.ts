import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { OptimizedBlockNode } from '../../../../com/oracle/truffle/runtime/OptimizedBlockNode.d.ts'
import type { OptimizedCallTarget } from '../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OptimizedBlockNode$PartialBlocks<T extends Node> extends Object {
    constructor(rootCompilation: OptimizedCallTarget, block: OptimizedBlockNode<T>, blockRanges: number[], blockSizes: number[], blockIndex: number)
    // private block: OptimizedBlockNode<any>;
    readonly blockRanges: number[];
    readonly blockTargets: OptimizedCallTarget[];
    execute(frame: VirtualFrame, arg: number): Object;
    executeBoolean(frame: VirtualFrame, arg: number): boolean;
    executeByte(frame: VirtualFrame, arg: number): number;
    executeChar(frame: VirtualFrame, arg: number): string;
    executeDouble(frame: VirtualFrame, arg: number): number;
    executeFloat(frame: VirtualFrame, arg: number): number;
    executeInt(frame: VirtualFrame, arg: number): number;
    executeLong(frame: VirtualFrame, arg: number): number;
    executeShort(frame: VirtualFrame, arg: number): number;
    getBlockRanges(): number[];
    getBlockTargets(): OptimizedCallTarget[];
}
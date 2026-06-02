import type { Assumption } from '../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { FrameDescriptor } from '../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { FrameInstanceVisitor } from '../../../../com/oracle/truffle/api/frame/FrameInstanceVisitor.d.ts'
import type { MaterializedFrame } from '../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { DirectCallNode } from '../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { IndirectCallNode } from '../../../../com/oracle/truffle/api/nodes/IndirectCallNode.d.ts'
import type { LoopNode } from '../../../../com/oracle/truffle/api/nodes/LoopNode.d.ts'
import type { RepeatingNode } from '../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleRuntime extends Object{
    createAssumption(): Assumption;
    createAssumption(name: string): Assumption;
    createDirectCallNode(target: CallTarget): DirectCallNode;
    createIndirectCallNode(): IndirectCallNode;
    createLoopNode(body: RepeatingNode): LoopNode;
    createMaterializedFrame(arguments: Object[]): MaterializedFrame;
    createMaterializedFrame(arguments: Object[], frameDescriptor: FrameDescriptor): MaterializedFrame;
    createVirtualFrame(arguments: Object[], frameDescriptor: FrameDescriptor): VirtualFrame;
    getCapability<T extends Object | number | string | boolean>(capability: Class<T>): T;
    getName(): string;
    isProfilingEnabled(): boolean;
    iterateFrames<T extends Object | number | string | boolean>(visitor: FrameInstanceVisitor<T>): T;
    iterateFrames<T extends Object | number | string | boolean>(visitor: FrameInstanceVisitor<T>, skipFrames: number): T;
    notifyTransferToInterpreter(): void;
}
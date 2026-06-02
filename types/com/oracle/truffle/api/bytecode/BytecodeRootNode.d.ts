import type { BytecodeLocation } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeLocation.d.ts'
import type { BytecodeNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { BytecodeRootNodes } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeRootNodes.d.ts'
import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { ControlFlowException } from '../../../../../com/oracle/truffle/api/nodes/ControlFlowException.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface BytecodeRootNode extends Object{
    dump(): string;
    ensureSourceSection(): SourceSection;
    execute(frame: VirtualFrame): Object;
    getBytecodeNode(): BytecodeNode;
    getRootNodes(): BytecodeRootNodes<Object>;
    getStartLocation(): BytecodeLocation;
    interceptControlFlowException(ex: ControlFlowException, frame: VirtualFrame, bytecodeNode: BytecodeNode, bytecodeIndex: number): Object;
    interceptInternalException(t: Throwable, frame: VirtualFrame, bytecodeNode: BytecodeNode, bytecodeIndex: number): Throwable;
    interceptTruffleException(ex: AbstractTruffleException, frame: VirtualFrame, bytecodeNode: BytecodeNode, bytecodeIndex: number): AbstractTruffleException;
}
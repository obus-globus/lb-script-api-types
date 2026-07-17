import type { BytecodeLocation } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeLocation.d.ts'
import type { BytecodeNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { BytecodeRootNodes } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeRootNodes.d.ts'
import type { BytecodeTransition } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeTransition.d.ts'
import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { ControlFlowException } from '../../../../../com/oracle/truffle/api/nodes/ControlFlowException.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface BytecodeRootNode extends Object{
    dump(): string;
    ensureSourceSection(): SourceSection;
    ensureSourceSectionWithContent(): SourceSection;
    execute(frame: VirtualFrame): Object;
    getBytecodeNode(): BytecodeNode;
    getRootNodes(): BytecodeRootNodes<any>;
    getSource(): Source;
    getStartLocation(): BytecodeLocation;
    interceptControlFlowException(ex: ControlFlowException, frame: VirtualFrame, bytecodeNode: BytecodeNode, bytecodeIndex: number): Object;
    interceptInternalException(t: Throwable, frame: VirtualFrame, bytecodeNode: BytecodeNode, bytecodeIndex: number): Throwable;
    interceptTruffleException(ex: AbstractTruffleException, frame: VirtualFrame, bytecodeNode: BytecodeNode, bytecodeIndex: number): AbstractTruffleException;
    traceTransition(transition: BytecodeTransition, frame: Frame): void;
}
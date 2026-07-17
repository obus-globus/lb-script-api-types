import type { TruffleStackTraceElement } from '../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { BytecodeFrame } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeFrame.d.ts'
import type { BytecodeLocation } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeLocation.d.ts'
import type { BytecodeRootNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeRootNode.d.ts'
import type { BytecodeTier } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeTier.d.ts'
import type { BytecodeTransition } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeTransition.d.ts'
import type { ExceptionHandler } from '../../../../../com/oracle/truffle/api/bytecode/ExceptionHandler.d.ts'
import type { Instruction } from '../../../../../com/oracle/truffle/api/bytecode/Instruction.d.ts'
import type { LocalVariable } from '../../../../../com/oracle/truffle/api/bytecode/LocalVariable.d.ts'
import type { SourceInformation } from '../../../../../com/oracle/truffle/api/bytecode/SourceInformation.d.ts'
import type { SourceInformationTree } from '../../../../../com/oracle/truffle/api/bytecode/SourceInformationTree.d.ts'
import type { TagTree } from '../../../../../com/oracle/truffle/api/bytecode/TagTree.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameInstance } from '../../../../../com/oracle/truffle/api/frame/FrameInstance.d.ts'
import type { FrameInstance$FrameAccess } from '../../../../../com/oracle/truffle/api/frame/FrameInstance$FrameAccess.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BytecodeNode extends Node {
    static get(paramelement: TruffleStackTraceElement): BytecodeNode;
    static get(paramframeInstance: FrameInstance): BytecodeNode;
    static get(paramnode: Node): BytecodeNode;
    static getLocalNames(paramframeInstance: FrameInstance): Object[];
    static getLocalValues(paramframeInstance: FrameInstance): Object[];
    static setLocalValues(paramframeInstance: FrameInstance, paramvalues: Object[]): boolean;
    constructor(token: Object)
    clearLocalValueInternal(frame: Frame, localOffset: number, localIndex: number): void;
    copyLocalValues(bytecodeIndex: number, source: Frame, destination: Frame): void;
    copyLocalValues(bytecodeIndex: number, source: Frame, destination: Frame, localOffset: number, localCount: number): void;
    createCopiedFrame(bytecodeIndex: number, frame: Frame): BytecodeFrame;
    createMaterializedFrame(bytecodeIndex: number, frame: MaterializedFrame): BytecodeFrame;
    createTransition(oldBytecodeNode: BytecodeNode, oldBytecodeIndex: number, newBytecodeNode: BytecodeNode, newBytecodeIndex: number, wasCompiled: boolean): BytecodeTransition;
    dump(): string;
    dump(highlightedLocation: BytecodeLocation): string;
    dump(bytecodeIndex: number): string;
    ensureSourceInformation(): BytecodeNode;
    ensureSourceInformationWithContent(): BytecodeNode;
    findBytecodeIndex(frame: Frame, operationNode: Node): number;
    findBytecodeIndex(frameInstance: FrameInstance): number;
    findBytecodeIndexImpl(frame: Frame, location: Node): number;
    findInstruction(bytecodeIndex: number): Instruction;
    findLocation(bytecodeIndex: number): BytecodeLocation;
    // private findOperationNode(location: Node): Node;
    getBytecodeIndex(frame: Frame): number;
    getBytecodeLocation(frame: Frame, location: Node): BytecodeLocation;
    getBytecodeLocation(frameInstance: FrameInstance): BytecodeLocation;
    getBytecodeLocation(bytecodeIndex: number): BytecodeLocation;
    getBytecodeRootNode(): BytecodeRootNode;
    getExceptionHandlers(): ExceptionHandler[];
    getInstruction(bytecodeIndex: number): Instruction;
    getInstructions(): Instruction[];
    getInstructionsAsList(): Instruction[];
    getLocalCount(bytecodeIndex: number): number;
    getLocalInfo(bytecodeIndex: number, localOffset: number): Object;
    getLocalInfoInternal(localOffset: number, localIndex: number): Object;
    getLocalInfos(bytecodeIndex: number): Object[];
    getLocalName(bytecodeIndex: number, localOffset: number): Object;
    getLocalNameInternal(localOffset: number, localIndex: number): Object;
    getLocalNames(bytecodeIndex: number): Object[];
    getLocalValue(bytecodeIndex: number, frame: Frame, localOffset: number): Object;
    getLocalValueInternal(frame: Frame, localOffset: number, localIndex: number): Object;
    getLocalValueInternalBoolean(frame: Frame, localOffset: number, localIndex: number): boolean;
    getLocalValueInternalByte(frame: Frame, localOffset: number, localIndex: number): number;
    getLocalValueInternalDouble(frame: Frame, localOffset: number, localIndex: number): number;
    getLocalValueInternalFloat(frame: Frame, localOffset: number, localIndex: number): number;
    getLocalValueInternalInt(frame: Frame, localOffset: number, localIndex: number): number;
    getLocalValueInternalLong(frame: Frame, localOffset: number, localIndex: number): number;
    getLocalValues(bytecodeIndex: number, frame: Frame): Object[];
    getLocals(): LocalVariable[];
    getSourceInformation(): SourceInformation[];
    getSourceInformationTree(): SourceInformationTree;
    getSourceLocation(frame: Frame, location: Node): SourceSection;
    getSourceLocation(frameInstance: FrameInstance): SourceSection;
    getSourceLocation(bytecodeIndex: number): SourceSection;
    getSourceLocations(frame: Frame, location: Node): SourceSection[];
    getSourceLocations(frameInstance: FrameInstance): SourceSection[];
    getSourceLocations(bytecodeIndex: number): SourceSection[];
    getTagTree(): TagTree;
    getTier(): BytecodeTier;
    hasSourceInformation(): boolean;
    hasSourceInformationWithContent(): boolean;
    isLocalClearedInternal(frame: Frame, localOffset: number, localIndex: number): boolean;
    resolveFrameImpl(element: TruffleStackTraceElement): Frame;
    resolveFrameImpl(frameInstance: FrameInstance, access: FrameInstance$FrameAccess): Frame;
    resolveNonVirtualFrameImpl(element: TruffleStackTraceElement): Frame;
    setLocalValue(bytecodeIndex: number, frame: Frame, localOffset: number, value: Object): void;
    setLocalValueInternal(frame: Frame, localOffset: number, localIndex: number, value: Object): void;
    setLocalValueInternalBoolean(frame: Frame, localOffset: number, localIndex: number, value: boolean): void;
    setLocalValueInternalByte(frame: Frame, localOffset: number, localIndex: number, value: number): void;
    setLocalValueInternalDouble(frame: Frame, localOffset: number, localIndex: number, value: number): void;
    setLocalValueInternalFloat(frame: Frame, localOffset: number, localIndex: number, value: number): void;
    setLocalValueInternalInt(frame: Frame, localOffset: number, localIndex: number, value: number): void;
    setLocalValueInternalLong(frame: Frame, localOffset: number, localIndex: number, value: number): void;
    setLocalValues(bytecodeIndex: number, frame: Frame, values: Object[]): void;
    setUncachedThreshold(threshold: number): void;
    translateBytecodeIndex(newNode: BytecodeNode, bytecodeIndex: number): number;
    validateBytecodeIndex(bytecodeIndex: number): boolean;
}
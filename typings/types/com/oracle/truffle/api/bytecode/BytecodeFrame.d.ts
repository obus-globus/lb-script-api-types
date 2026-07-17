import type { TruffleStackTraceElement } from '../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { BytecodeLocation } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeLocation.d.ts'
import type { BytecodeNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameInstance } from '../../../../../com/oracle/truffle/api/frame/FrameInstance.d.ts'
import type { FrameInstance$FrameAccess } from '../../../../../com/oracle/truffle/api/frame/FrameInstance$FrameAccess.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BytecodeFrame extends Object {
    static get(paramelement: TruffleStackTraceElement): BytecodeFrame;
    static get(paramframeInstance: FrameInstance, paramaccess: FrameInstance$FrameAccess): BytecodeFrame;
    static getNonVirtual(paramelement: TruffleStackTraceElement): BytecodeFrame;
    static getNonVirtual(paramframeInstance: FrameInstance): BytecodeFrame;
    static getTop(paramaccess: FrameInstance$FrameAccess, paramtopLocation: Node, paramtopBytecodeIndex: number): BytecodeFrame;
    static iterateBytecodeFrames<T extends unknown>(paramvisitor: (param0: BytecodeFrame) => T, paramaccess: FrameInstance$FrameAccess, paramtopLocation: Node, paramtopBytecodeIndex: number, paramskipBytecodeFrames: number): T;
    constructor(frame: Frame, bytecode: BytecodeNode, bytecodeIndex: number)
    // private bytecode: BytecodeNode;
    readonly bytecodeIndex: number;
    // private frame: Frame;
    copy(): BytecodeFrame;
    getArgument(argumentIndex: number): Object;
    getArgumentCount(): number;
    getBytecodeIndex(): number;
    getBytecodeNode(): BytecodeNode;
    getFrameDescriptorInfo(): Object;
    getLocalCount(): number;
    getLocalNames(): Object[];
    getLocalValue(localOffset: number): Object;
    getLocation(): BytecodeLocation;
    setArgument(argumentIndex: number, value: Object): void;
    setLocalValue(localOffset: number, value: Object): void;
}
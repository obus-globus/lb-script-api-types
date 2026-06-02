import type { Handle } from '../../../../../../../com/oracle/truffle/api/impl/asm/Handle.d.ts'
import type { Label } from '../../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AnalyzerAdapter extends MethodVisitor {
    constructor(api: number, owner: string, access: number, name: string, descriptor: string, methodVisitor: MethodVisitor)
    constructor(owner: string, access: number, name: string, descriptor: string, methodVisitor: MethodVisitor)
    // private labels: Label[];
    locals: Object[];
    // private maxLocals: number;
    // private maxStack: number;
    // private owner: string;
    stack: Object[];
    uninitializedTypes: Map<Object, Object>;
    // private execute(opcode: number, intArg: number, stringArg: string): void;
    // private get(local: number): Object;
    // private pop(): Object;
    // private pop(numSlots: number): void;
    // private pop(descriptor: string): void;
    // private push(type: Object): void;
    // private pushDescriptor(fieldOrMethodDescriptor: string): void;
    // private set(local: number, type: Object): void;
    visitFieldInsn(opcode: number, owner: string, name: string, descriptor: string): void;
    visitFrame(type: number, numLocal: number, local: Object[], numStack: number, stack: Object[]): void;
    visitIincInsn(varIndex: number, increment: number): void;
    visitInsn(opcode: number): void;
    visitIntInsn(opcode: number, operand: number): void;
    visitInvokeDynamicInsn(name: string, descriptor: string, bootstrapMethodHandle: Handle, bootstrapMethodArguments: Object[]): void;
    visitJumpInsn(opcode: number, label: Label): void;
    visitLabel(label: Label): void;
    visitLdcInsn(value: Object): void;
    visitLocalVariable(name: string, descriptor: string, signature: string, start: Label, end: Label, index: number): void;
    visitLookupSwitchInsn(dflt: Label, keys: number[], labels: Label[]): void;
    visitMaxs(maxStack: number, maxLocals: number): void;
    visitMethodInsn(opcodeAndSource: number, owner: string, name: string, descriptor: string, isInterface: boolean): void;
    visitMultiANewArrayInsn(descriptor: string, numDimensions: number): void;
    visitTableSwitchInsn(min: number, max: number, dflt: Label, labels: Label[]): void;
    visitTypeInsn(opcode: number, type: string): void;
    visitVarInsn(opcode: number, varIndex: number): void;
}
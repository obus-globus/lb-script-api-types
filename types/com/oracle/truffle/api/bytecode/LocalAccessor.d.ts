import type { BytecodeLocal } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeLocal.d.ts'
import type { BytecodeNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LocalAccessor extends Object {
    static constantOf(paramlocal: BytecodeLocal): LocalAccessor;
    private constructor(localOffset: number, localIndex: number)
    // private localIndex: number;
    // private localOffset: number;
    clear(bytecodeNode: BytecodeNode, frame: VirtualFrame): void;
    equals(obj: Object | null): boolean;
    getBoolean(bytecodeNode: BytecodeNode, frame: VirtualFrame): boolean;
    getByte(bytecodeNode: BytecodeNode, frame: VirtualFrame): number;
    getDouble(bytecodeNode: BytecodeNode, frame: VirtualFrame): number;
    getFloat(bytecodeNode: BytecodeNode, frame: VirtualFrame): number;
    getInt(bytecodeNode: BytecodeNode, frame: VirtualFrame): number;
    getLocalInfo(bytecodeNode: BytecodeNode): Object;
    getLocalName(bytecodeNode: BytecodeNode): Object;
    getLong(bytecodeNode: BytecodeNode, frame: VirtualFrame): number;
    getObject(bytecodeNode: BytecodeNode, frame: VirtualFrame): Object;
    hashCode(): number;
    isCleared(bytecodeNode: BytecodeNode, frame: VirtualFrame): boolean;
    setBoolean(bytecodeNode: BytecodeNode, frame: VirtualFrame, value: boolean): void;
    setByte(bytecodeNode: BytecodeNode, frame: VirtualFrame, value: number): void;
    setDouble(bytecodeNode: BytecodeNode, frame: VirtualFrame, value: number): void;
    setFloat(bytecodeNode: BytecodeNode, frame: VirtualFrame, value: number): void;
    setInt(bytecodeNode: BytecodeNode, frame: VirtualFrame, value: number): void;
    setLong(bytecodeNode: BytecodeNode, frame: VirtualFrame, value: number): void;
    setObject(bytecodeNode: BytecodeNode, frame: VirtualFrame, value: Object): void;
    toString(): string;
}
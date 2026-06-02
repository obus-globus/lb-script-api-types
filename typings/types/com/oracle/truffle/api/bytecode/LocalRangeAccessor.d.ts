import type { BytecodeNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LocalRangeAccessor extends Object {
    static constantOf(paramlocals: (Object | null)[]): LocalRangeAccessor;
    private constructor(startOffset: number, startIndex: number, length: number)
    readonly length: number;
    // private startIndex: number;
    // private startOffset: number;
    // private checkBounds(offset: number): void;
    clear(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number): void;
    equals(obj: Object | null): boolean;
    getBoolean(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number): boolean;
    getByte(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number): number;
    getDouble(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number): number;
    getFloat(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number): number;
    getInt(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number): number;
    getLength(): number;
    getLocalInfo(bytecodeNode: BytecodeNode, offset: number): Object;
    getLocalName(bytecodeNode: BytecodeNode, offset: number): Object;
    getLong(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number): number;
    getObject(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number): Object;
    hashCode(): number;
    isCleared(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number): boolean;
    setBoolean(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number, value: boolean): void;
    setByte(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number, value: number): void;
    setDouble(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number, value: number): void;
    setFloat(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number, value: number): void;
    setInt(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number, value: number): void;
    setLong(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number, value: number): void;
    setObject(bytecodeNode: BytecodeNode, frame: VirtualFrame, offset: number, value: Object): void;
    toString(): string;
}
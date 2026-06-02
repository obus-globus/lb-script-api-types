import type { BytecodeLocal } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeLocal.d.ts'
import type { BytecodeNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MaterializedLocalAccessor extends Object {
    static constantOf(paramrootIndex: number, paramlocal: BytecodeLocal): MaterializedLocalAccessor;
    private constructor(rootIndex: number, localOffset: number, localIndex: number)
    // private localIndex: number;
    // private localOffset: number;
    // private rootIndex: number;
    clear(bytecodeNode: BytecodeNode, frame: MaterializedFrame): void;
    equals(obj: Object | null): boolean;
    getBoolean(bytecodeNode: BytecodeNode, frame: MaterializedFrame): boolean;
    getByte(bytecodeNode: BytecodeNode, frame: MaterializedFrame): number;
    getDouble(bytecodeNode: BytecodeNode, frame: MaterializedFrame): number;
    getFloat(bytecodeNode: BytecodeNode, frame: MaterializedFrame): number;
    getInt(bytecodeNode: BytecodeNode, frame: MaterializedFrame): number;
    getLocalInfo(bytecodeNode: BytecodeNode): Object;
    getLocalName(bytecodeNode: BytecodeNode): Object;
    getLong(bytecodeNode: BytecodeNode, frame: MaterializedFrame): number;
    getObject(bytecodeNode: BytecodeNode, frame: MaterializedFrame): Object;
    hashCode(): number;
    isCleared(bytecodeNode: BytecodeNode, frame: MaterializedFrame): boolean;
    setBoolean(bytecodeNode: BytecodeNode, frame: MaterializedFrame, value: boolean): void;
    setByte(bytecodeNode: BytecodeNode, frame: MaterializedFrame, value: number): void;
    setDouble(bytecodeNode: BytecodeNode, frame: MaterializedFrame, value: number): void;
    setFloat(bytecodeNode: BytecodeNode, frame: MaterializedFrame, value: number): void;
    setInt(bytecodeNode: BytecodeNode, frame: MaterializedFrame, value: number): void;
    setLong(bytecodeNode: BytecodeNode, frame: MaterializedFrame, value: number): void;
    setObject(bytecodeNode: BytecodeNode, frame: MaterializedFrame, value: Object): void;
    toString(): string;
}
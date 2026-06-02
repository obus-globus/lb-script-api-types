import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CPClass } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPClass.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
export class ExceptionTableEntry extends Object {
    constructor(arg0: number, arg1: number, arg2: number, arg3: CPClass)
    readonly catchType: CPClass;
    // private catchTypeIndex: number;
    // private endPC: number;
    // private endPcRenumbered: number;
    // private handlerPC: number;
    // private handlerPcRenumbered: number;
    // private startPC: number;
    // private startPcRenumbered: number;
    getCatchType(): CPClass;
    renumber(arg0: number[]): void;
    resolve(arg0: ClassConstantPool): void;
    write(arg0: DataOutputStream): void;
}
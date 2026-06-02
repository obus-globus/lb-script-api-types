import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Attribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/Attribute.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
export class ClassFile extends Object {
    constructor()
    accessFlags: number;
    attributes: Attribute[];
    fields: ClassFileEntry[];
    interfaces: number[];
    major: number;
    methods: ClassFileEntry[];
    minor: number;
    pool: ClassConstantPool;
    superClass: number;
    thisClass: number;
    write(arg0: DataOutputStream): void;
}
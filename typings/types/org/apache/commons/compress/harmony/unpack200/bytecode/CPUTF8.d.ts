import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConstantPoolEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ConstantPoolEntry.d.ts'
export class CPUTF8 extends ConstantPoolEntry {
    static CP_Class: number;
    static CP_Double: number;
    static CP_Fieldref: number;
    static CP_Float: number;
    static CP_Integer: number;
    static CP_InterfaceMethodref: number;
    static CP_Long: number;
    static CP_Methodref: number;
    static CP_NameAndType: number;
    static CP_String: number;
    static CP_UTF8: number;
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    // private cachedHashCode: number;
    // private hashCodeComputed: boolean;
    // private utf8: string;
    equals(arg0: Object | null): boolean;
    // private generateHashCode(): void;
    hashCode(): number;
    setGlobalIndex(arg0: number): void;
    toString(): string;
    underlyingString(): string;
    writeBody(arg0: DataOutputStream): void;
}
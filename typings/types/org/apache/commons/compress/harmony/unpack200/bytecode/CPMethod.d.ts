import type { Attribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/Attribute.d.ts'
import type { CPMember } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPMember.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
export class CPMethod extends CPMember {
    constructor(arg0: CPUTF8, arg1: CPUTF8, arg2: number, arg3: Attribute[])
    // private cachedHashCode: number;
    // private hashCodeComputed: boolean;
    // private generateHashCode(): void;
    hashCode(): number;
    toString(): string;
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { CPClass } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPClass.d.ts'
import type { CPUTF8 } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPUTF8.d.ts'
import type { ConstantPoolEntry } from '../../../../../../org/apache/commons/compress/harmony/pack200/ConstantPoolEntry.d.ts'
export class CPSignature extends ConstantPoolEntry implements Comparable<Object> {
    constructor(arg0: string, arg1: CPUTF8, arg2: CPClass[])
    readonly classes: CPClass[];
    // private formStartsWithBracket: boolean;
    // private signature: string;
    readonly signatureForm: CPUTF8;
    compareTo(arg0: Object | null): number;
    getClasses(): CPClass[];
    getIndexInCpUtf8(): number;
    getSignatureForm(): CPUTF8;
    getUnderlyingString(): string;
    toString(): string;
}
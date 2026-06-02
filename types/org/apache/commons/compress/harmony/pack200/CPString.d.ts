import type { CPConstant } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPConstant.d.ts'
import type { CPUTF8 } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPUTF8.d.ts'
export class CPString extends CPConstant<CPString> {
    constructor(arg0: CPUTF8)
    // private string: string;
    // private value: CPUTF8;
    compareTo(arg0: CPString): number;
    getIndexInCpUtf8(): number;
    toString(): string;
}
import type { CPConstant } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPConstant.d.ts'
import type { CPUTF8 } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPUTF8.d.ts'
export class CPClass extends CPConstant<CPClass> {
    constructor(arg0: CPUTF8)
    // private className: string;
    // private isInnerClass: boolean;
    // private value: CPUTF8;
    compareTo(arg0: CPClass): number;
    getIndexInCpUtf8(): number;
    isInnerClass(): boolean;
    toString(): string;
}
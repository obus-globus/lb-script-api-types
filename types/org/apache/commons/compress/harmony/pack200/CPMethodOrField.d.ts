import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { CPClass } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPClass.d.ts'
import type { CPNameAndType } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPNameAndType.d.ts'
import type { ConstantPoolEntry } from '../../../../../../org/apache/commons/compress/harmony/pack200/ConstantPoolEntry.d.ts'
export class CPMethodOrField extends ConstantPoolEntry implements Comparable<Object> {
    constructor(arg0: CPClass, arg1: CPNameAndType)
    readonly className: CPClass;
    readonly indexInClass: number;
    readonly indexInClassForConstructor: number;
    // private nameAndType: CPNameAndType;
    compareTo(arg0: Object | null): number;
    getClassIndex(): number;
    getClassName(): CPClass;
    getDesc(): CPNameAndType;
    getDescIndex(): number;
    getIndexInClass(): number;
    getIndexInClassForConstructor(): number;
    setIndexInClass(arg0: number): void;
    setIndexInClassForConstructor(arg0: number): void;
    toString(): string;
}
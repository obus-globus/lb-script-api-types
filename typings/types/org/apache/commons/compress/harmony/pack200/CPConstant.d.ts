import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { ConstantPoolEntry } from '../../../../../../org/apache/commons/compress/harmony/pack200/ConstantPoolEntry.d.ts'
export abstract class CPConstant<T extends CPConstant<T>> extends ConstantPoolEntry implements Comparable<T> {
    constructor()
}
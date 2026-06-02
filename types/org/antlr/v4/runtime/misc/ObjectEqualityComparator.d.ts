import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractEqualityComparator } from '../../../../../org/antlr/v4/runtime/misc/AbstractEqualityComparator.d.ts'
export class ObjectEqualityComparator extends AbstractEqualityComparator<Object> {
    static INSTANCE: ObjectEqualityComparator;
    constructor()
    equals(arg0: Object, arg1: Object): boolean;
    hashCode(arg0: Object): number;
}
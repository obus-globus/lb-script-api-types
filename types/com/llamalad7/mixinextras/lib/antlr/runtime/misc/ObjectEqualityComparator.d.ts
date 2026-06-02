import type { AbstractEqualityComparator } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/AbstractEqualityComparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ObjectEqualityComparator extends AbstractEqualityComparator<Object> {
    static INSTANCE: ObjectEqualityComparator;
    constructor()
    equals(arg0: Object, arg1: Object): boolean;
    hashCode(arg0: Object): number;
}
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableSet$SerializedForm extends Object implements Serializable {
    constructor(elements: Object[])
    // private elements: Object[];
    readResolve(): Object;
}
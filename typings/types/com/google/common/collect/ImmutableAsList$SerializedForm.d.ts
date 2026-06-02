import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableAsList$SerializedForm extends Object implements Serializable {
    constructor(collection: (Object | null)[])
    // private collection: (Object | null)[];
    readResolve(): Object;
}
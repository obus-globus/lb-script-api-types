import type { ImmutableMultimap } from '../../../../com/google/common/collect/ImmutableMultimap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableMultimap$KeysSerializedForm extends Object implements Serializable {
    constructor(multimap: ImmutableMultimap<Object, Object>)
    // private multimap: ImmutableMultimap<Object, Object>;
    readResolve(): Object;
}
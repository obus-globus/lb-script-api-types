import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MutableClassToInstanceMap$SerializedForm<B extends Object | number | string | boolean> extends Object implements Serializable {
    constructor(backingMap: Map<Class<B>, B>)
    // private backingMap: Map<Class<B>, B>;
    readResolve(): Object;
}
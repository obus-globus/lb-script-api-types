import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MutableClassToInstanceMap$SerializedForm<B extends unknown> extends Object implements Serializable {
    constructor(backingMap: JavaMap<Class<B>, B>)
    // private backingMap: JavaMap<Class<B>, B>;
    readResolve(): Object;
}
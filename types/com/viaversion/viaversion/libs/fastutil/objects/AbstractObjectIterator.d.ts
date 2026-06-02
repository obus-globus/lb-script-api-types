import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractObjectIterator<K extends Object | number | string | boolean> extends Object implements ObjectIterator<K> {
    constructor()
    skip(arg0: number): number;
}
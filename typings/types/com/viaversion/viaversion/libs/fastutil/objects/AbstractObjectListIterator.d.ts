import type { AbstractObjectBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/AbstractObjectBidirectionalIterator.d.ts'
import type { ObjectListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractObjectListIterator<K extends Object | number | string | boolean> extends AbstractObjectBidirectionalIterator<K> implements ObjectListIterator<K> {
    constructor()
    add(arg0: K): void;
    remove(): void;
    set(arg0: K): void;
}
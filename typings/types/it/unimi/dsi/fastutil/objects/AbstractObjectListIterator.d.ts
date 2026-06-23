import type { AbstractObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObjectBidirectionalIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractObjectListIterator<K extends unknown> extends AbstractObjectBidirectionalIterator<K> implements ObjectListIterator<K> {
    constructor()
    add(arg0: K): void;
    remove(): void;
    set(arg0: K): void;
}
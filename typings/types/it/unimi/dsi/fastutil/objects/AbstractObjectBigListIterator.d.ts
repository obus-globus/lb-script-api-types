import type { AbstractObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObjectBidirectionalIterator.d.ts'
import type { ObjectBigListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBigListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractObjectBigListIterator<K extends Object | number | string | boolean> extends AbstractObjectBidirectionalIterator<K> implements ObjectBigListIterator<K> {
    constructor()
    add(arg0: K): void;
    back(arg0: number): number;
    set(arg0: K): void;
    skip(arg0: number): number;
}
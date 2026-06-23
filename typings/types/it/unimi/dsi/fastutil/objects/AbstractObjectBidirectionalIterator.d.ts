import type { AbstractObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObjectIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractObjectBidirectionalIterator<K extends unknown> extends AbstractObjectIterator<K> implements ObjectBidirectionalIterator<K> {
    constructor()
    back(arg0: number): number;
    skip(arg0: number): number;
}
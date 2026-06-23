import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractObjectIterator<K extends unknown> extends Object implements ObjectIterator<K> {
    constructor()
    skip(arg0: number): number;
}
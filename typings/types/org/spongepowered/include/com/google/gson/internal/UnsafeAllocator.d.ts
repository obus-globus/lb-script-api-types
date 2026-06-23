import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class UnsafeAllocator extends Object {
    static create(): UnsafeAllocator;
    constructor()
    newInstance<T extends unknown>(arg0: Class<T>): T;
}
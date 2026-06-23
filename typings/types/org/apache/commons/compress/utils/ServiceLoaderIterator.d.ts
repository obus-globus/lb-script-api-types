import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class ServiceLoaderIterator<E extends unknown> extends Object implements Iterator<E> {
    constructor(arg0: Class<E>)
    constructor(arg0: Class<E>, arg1: ClassLoader)
    // private nextServiceLoader: E;
    // private service: Class<E>;
    // private serviceLoaderIterator: Iterator<E>;
    forEachRemaining(arg0: (param0: E) => void): void;
    hasNext(): boolean;
    next(): E;
    remove(): void;
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockingQueueFactory } from '../../../../../../org/apache/logging/log4j/core/async/BlockingQueueFactory.d.ts'
export class ArrayBlockingQueueFactory<E extends Object | number | string | boolean> extends Object implements BlockingQueueFactory<E> {
    static ELEMENT_TYPE: string;
    static createFactory(): ArrayBlockingQueueFactory<Object>;
    constructor()
    create(capacity: number): E[];
}
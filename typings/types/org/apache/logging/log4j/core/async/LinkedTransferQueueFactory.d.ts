import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockingQueueFactory } from '../../../../../../org/apache/logging/log4j/core/async/BlockingQueueFactory.d.ts'
export class LinkedTransferQueueFactory<E extends unknown> extends Object implements BlockingQueueFactory<E> {
    static ELEMENT_TYPE: string;
    static createFactory(): LinkedTransferQueueFactory<Object>;
    constructor()
    create(capacity: number): E[];
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface BlockingQueueFactory<E extends unknown> extends Object{
    create(capacity: number): E[];
}
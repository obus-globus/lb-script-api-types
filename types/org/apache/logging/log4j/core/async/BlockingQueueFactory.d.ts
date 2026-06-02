import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface BlockingQueueFactory<E extends Object | number | string | boolean> extends Object{
    create(capacity: number): E[];
}
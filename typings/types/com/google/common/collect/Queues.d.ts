import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Queues extends Object {
    static drain<E extends unknown>(paramq: E[], parambuffer: Object[], paramnumElements: number, paramtimeout: Duration): number;
    static drain<E extends unknown>(paramq: E[], parambuffer: Object[], paramnumElements: number, paramtimeout: number, paramunit: TimeUnit): number;
    static drainUninterruptibly<E extends unknown>(paramq: E[], parambuffer: Object[], paramnumElements: number, paramtimeout: Duration): number;
    static drainUninterruptibly<E extends unknown>(paramq: E[], parambuffer: Object[], paramnumElements: number, paramtimeout: number, paramunit: TimeUnit): number;
    static newArrayBlockingQueue<E extends unknown>(paramcapacity: number): E[];
    static newArrayDeque<E extends unknown>(): E[];
    static newArrayDeque<E extends unknown>(paramelements: E[]): E[];
    static newConcurrentLinkedQueue<E extends unknown>(): E[];
    static newConcurrentLinkedQueue<E extends unknown>(paramelements: E[]): E[];
    static newLinkedBlockingDeque<E extends unknown>(): E[];
    static newLinkedBlockingDeque<E extends unknown>(paramcapacity: number): E[];
    static newLinkedBlockingDeque<E extends unknown>(paramelements: E[]): E[];
    static newLinkedBlockingQueue<E extends unknown>(): E[];
    static newLinkedBlockingQueue<E extends unknown>(paramcapacity: number): E[];
    static newLinkedBlockingQueue<E extends unknown>(paramelements: E[]): E[];
    static newPriorityBlockingQueue<E extends Comparable<Object>>(): E[];
    static newPriorityBlockingQueue<E extends Comparable<Object>>(paramelements: E[]): E[];
    static newPriorityQueue<E extends Comparable<Object>>(): E[];
    static newPriorityQueue<E extends Comparable<Object>>(paramelements: E[]): E[];
    static newSynchronousQueue<E extends unknown>(): E[];
    static synchronizedDeque<E extends unknown>(paramdeque: E[]): E[];
    static synchronizedQueue<E extends unknown>(paramqueue: E[]): E[];
    private constructor()
}
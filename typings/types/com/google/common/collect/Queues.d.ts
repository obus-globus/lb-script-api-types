import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Queues extends Object {
    static drain(paramq: (Object | null)[], parambuffer: E[], paramnumElements: number, paramtimeout: Duration): number;
    static drain(paramq: (Object | null)[], parambuffer: E[], paramnumElements: number, paramtimeout: number, paramunit: TimeUnit): number;
    static drainUninterruptibly(paramq: (Object | null)[], parambuffer: E[], paramnumElements: number, paramtimeout: Duration): number;
    static drainUninterruptibly(paramq: (Object | null)[], parambuffer: E[], paramnumElements: number, paramtimeout: number, paramunit: TimeUnit): number;
    static newArrayBlockingQueue(paramcapacity: number): (Object | null)[];
    static newArrayDeque(): (Object | null)[];
    static newArrayDeque(paramelements: (Object | null)[]): (Object | null)[];
    static newConcurrentLinkedQueue(): (Object | null)[];
    static newConcurrentLinkedQueue(paramelements: (Object | null)[]): (Object | null)[];
    static newLinkedBlockingDeque(): (Object | null)[];
    static newLinkedBlockingDeque(paramcapacity: number): (Object | null)[];
    static newLinkedBlockingDeque(paramelements: (Object | null)[]): (Object | null)[];
    static newLinkedBlockingQueue(): (Object | null)[];
    static newLinkedBlockingQueue(paramcapacity: number): (Object | null)[];
    static newLinkedBlockingQueue(paramelements: (Object | null)[]): (Object | null)[];
    static newPriorityBlockingQueue(): (Object | null)[];
    static newPriorityBlockingQueue(paramelements: (Object | null)[]): (Object | null)[];
    static newPriorityQueue(): (Object | null)[];
    static newPriorityQueue(paramelements: (Object | null)[]): (Object | null)[];
    static newSynchronousQueue(): (Object | null)[];
    static synchronizedDeque(paramdeque: (Object | null)[]): (Object | null)[];
    static synchronizedQueue(paramqueue: (Object | null)[]): (Object | null)[];
    private constructor()
}
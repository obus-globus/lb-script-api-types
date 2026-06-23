import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { ReentrantLock } from '../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentHashMap$Segment<K extends unknown, V extends unknown> extends ReentrantLock implements Serializable {
    constructor(arg0: number)
    // private loadFactor: number;
}
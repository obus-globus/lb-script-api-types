import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { ReentrantLock } from '../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentHashMap$Segment<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ReentrantLock implements Serializable {
    constructor(arg0: number)
    // private loadFactor: number;
}
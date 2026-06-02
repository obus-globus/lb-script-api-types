import type { Lock } from '../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ReadWriteLock extends Object{
    readLock(): Lock;
    writeLock(): Lock;
}
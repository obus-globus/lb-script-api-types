import type { Lock } from '../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReadWriteLock } from '../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { StampedLock } from '../../../../java/util/concurrent/locks/StampedLock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StampedLock$ReadWriteLockView extends Object implements ReadWriteLock {
    constructor(null_: StampedLock)
    readLock(): Lock;
    writeLock(): Lock;
}
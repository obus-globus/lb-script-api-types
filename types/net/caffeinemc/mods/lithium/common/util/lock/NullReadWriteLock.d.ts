import type { Lock } from '../../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReadWriteLock } from '../../../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NullLock } from '../../../../../../../net/caffeinemc/mods/lithium/common/util/lock/NullLock.d.ts'
export class NullReadWriteLock extends Object implements ReadWriteLock {
    constructor()
    // private lock: NullLock;
    readLock(): Lock;
    writeLock(): Lock;
}
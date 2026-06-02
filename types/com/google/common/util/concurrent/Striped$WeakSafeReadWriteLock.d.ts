import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReadWriteLock } from '../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Striped$WeakSafeReadWriteLock extends Object implements ReadWriteLock {
    constructor()
    // private delegate: ReadWriteLock;
    readLock(): Lock;
    writeLock(): Lock;
}
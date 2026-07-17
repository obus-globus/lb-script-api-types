import type { Lock } from '../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SimpleLock } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/SimpleLock.d.ts'
import type { SimpleLock$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/SimpleLock$Companion.d.ts'
export class DefaultSimpleLock extends Object implements SimpleLock {
    static Companion: SimpleLock$Companion;
    constructor()
    constructor(arg0: Lock)
    // private lock: Lock;
    getLock(): Lock;
    lock(): void;
    unlock(): void;
}
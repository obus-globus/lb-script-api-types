import type { Lock } from '../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { SimpleLock } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/SimpleLock.d.ts'
import type { SimpleLock$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/SimpleLock$Companion.d.ts'
export class DefaultSimpleLock extends Object implements SimpleLock {
    static Companion: SimpleLock$Companion;
    constructor()
    constructor(arg0: Lock)
    constructor(arg0: Lock, arg1: number, arg2: DefaultConstructorMarker)
    // private lock: Lock;
    getLock(): Lock;
    lock(): void;
    unlock(): void;
}
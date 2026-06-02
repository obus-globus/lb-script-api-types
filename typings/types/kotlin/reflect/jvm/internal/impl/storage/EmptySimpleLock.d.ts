import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SimpleLock } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/SimpleLock.d.ts'
import type { SimpleLock$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/SimpleLock$Companion.d.ts'
export class EmptySimpleLock extends Object implements SimpleLock {
    static Companion: SimpleLock$Companion;
    static INSTANCE: EmptySimpleLock;
    private constructor()
    lock(): void;
    unlock(): void;
}
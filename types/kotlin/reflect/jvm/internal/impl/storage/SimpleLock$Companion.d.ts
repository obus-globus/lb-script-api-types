import type { InterruptedException } from '../../../../../../java/lang/InterruptedException.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { DefaultSimpleLock } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/DefaultSimpleLock.d.ts'
export class SimpleLock$Companion extends Object {
    private constructor()
    simpleLock(arg0: () => void, arg1: Function1<InterruptedException, void>): DefaultSimpleLock;
}
import type { SelectorManager } from '../../../../io/ktor/network/selector/SelectorManager.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class SelectorManagerKt extends Object {
    static SelectorManager(dispatcher: CoroutineContext): SelectorManager;
    static buildOrClose<R extends unknown, C extends Closeable>(self: SelectorManager, create: (param0: SelectorProvider) => C, setup: (param0: C) => R): R;
}
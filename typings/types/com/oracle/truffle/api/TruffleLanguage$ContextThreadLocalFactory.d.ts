import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleLanguage$ContextThreadLocalFactory<C extends unknown, T extends unknown> extends Object{
    create(context: C, thread: Thread): T;
}
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleLanguage$ContextThreadLocalFactory<C extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object{
    create(context: C, thread: Thread): T;
}
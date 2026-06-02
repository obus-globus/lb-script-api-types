import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TruffleInstrument$ContextThreadLocalFactory<T extends Object | number | string | boolean> extends Object{
    create(context: TruffleContext, thread: Thread): T;
}
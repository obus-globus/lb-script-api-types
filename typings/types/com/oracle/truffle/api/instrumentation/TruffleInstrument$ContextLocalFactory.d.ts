import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TruffleInstrument$ContextLocalFactory<T extends Object | number | string | boolean> extends Object{
    create(context: TruffleContext): T;
}
import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ThreadsActivationListener extends Object{
    onEnterThread(context: TruffleContext): void;
    onLeaveThread(context: TruffleContext): void;
}
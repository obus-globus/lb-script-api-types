import type { SecondaryLoop } from '../../java/awt/SecondaryLoop.d.ts'
import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface FwDispatcher extends Object {
    createSecondaryLoop(): SecondaryLoop;
    isDispatchThread(): boolean;
    scheduleDispatch(arg0: () => void): void;
}
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { DebugSubscription } from '../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
export class RemoteDebugSampleType extends Enum<RemoteDebugSampleType> {
    static TICK_TIME: RemoteDebugSampleType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RemoteDebugSampleType;
    static values(): RemoteDebugSampleType[];
    private constructor(subscription: DebugSubscription<Object>)
    // private subscription: DebugSubscription<Object>;
    subscription(): DebugSubscription<Object>;
    name(): "TICK_TIME";
}
import type { LoadingCycleCallback$LoadingCycle } from '../../../../../com/viaversion/viafabricplus/api/events/LoadingCycleCallback$LoadingCycle.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LoadingCycleCallback extends Object{
    onLoadCycle(arg0: LoadingCycleCallback$LoadingCycle): void;
}
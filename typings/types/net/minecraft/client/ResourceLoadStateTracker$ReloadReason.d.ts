import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ResourceLoadStateTracker$ReloadReason extends Enum<ResourceLoadStateTracker$ReloadReason> {
    static INITIAL: ResourceLoadStateTracker$ReloadReason;
    static MANUAL: ResourceLoadStateTracker$ReloadReason;
    static UNKNOWN: ResourceLoadStateTracker$ReloadReason;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ResourceLoadStateTracker$ReloadReason;
    static values(): ResourceLoadStateTracker$ReloadReason[];
    private constructor(name: string)
    // private name: string;
    name(): "INITIAL" | "MANUAL" | "UNKNOWN";
}
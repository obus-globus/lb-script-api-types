import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HighLevelMonitorConfigurationAPI$MC_SIZE_TYPE extends Enum<HighLevelMonitorConfigurationAPI$MC_SIZE_TYPE> {
    static MC_HEIGHT: HighLevelMonitorConfigurationAPI$MC_SIZE_TYPE;
    static MC_WIDTH: HighLevelMonitorConfigurationAPI$MC_SIZE_TYPE;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HighLevelMonitorConfigurationAPI$MC_SIZE_TYPE;
    static values(): (Object | null)[];
    private constructor()
    name(): "MC_WIDTH" | "MC_HEIGHT";
}
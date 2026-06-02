import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HighLevelMonitorConfigurationAPI$MC_DRIVE_TYPE extends Enum<HighLevelMonitorConfigurationAPI$MC_DRIVE_TYPE> {
    static MC_BLUE_DRIVE: HighLevelMonitorConfigurationAPI$MC_DRIVE_TYPE;
    static MC_GREEN_DRIVE: HighLevelMonitorConfigurationAPI$MC_DRIVE_TYPE;
    static MC_RED_DRIVE: HighLevelMonitorConfigurationAPI$MC_DRIVE_TYPE;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HighLevelMonitorConfigurationAPI$MC_DRIVE_TYPE;
    static values(): (Object | null)[];
    private constructor()
    name(): "MC_RED_DRIVE" | "MC_GREEN_DRIVE" | "MC_BLUE_DRIVE";
}
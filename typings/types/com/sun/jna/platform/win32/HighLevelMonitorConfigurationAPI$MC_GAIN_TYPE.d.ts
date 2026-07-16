import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HighLevelMonitorConfigurationAPI$MC_GAIN_TYPE extends Enum<HighLevelMonitorConfigurationAPI$MC_GAIN_TYPE> {
    static MC_BLUE_GAIN: HighLevelMonitorConfigurationAPI$MC_GAIN_TYPE;
    static MC_GREEN_GAIN: HighLevelMonitorConfigurationAPI$MC_GAIN_TYPE;
    static MC_RED_GAIN: HighLevelMonitorConfigurationAPI$MC_GAIN_TYPE;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HighLevelMonitorConfigurationAPI$MC_GAIN_TYPE;
    static values(): HighLevelMonitorConfigurationAPI$MC_GAIN_TYPE[];
    private constructor()
    name(): "MC_RED_GAIN" | "MC_GREEN_GAIN" | "MC_BLUE_GAIN";
}
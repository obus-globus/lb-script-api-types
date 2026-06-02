import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HighLevelMonitorConfigurationAPI$MC_COLOR_TEMPERATURE extends Enum<HighLevelMonitorConfigurationAPI$MC_COLOR_TEMPERATURE> {
    static MC_COLOR_TEMPERATURE_10000K: HighLevelMonitorConfigurationAPI$MC_COLOR_TEMPERATURE;
    static MC_COLOR_TEMPERATURE_11500K: HighLevelMonitorConfigurationAPI$MC_COLOR_TEMPERATURE;
    static MC_COLOR_TEMPERATURE_4000K: HighLevelMonitorConfigurationAPI$MC_COLOR_TEMPERATURE;
    static MC_COLOR_TEMPERATURE_5000K: HighLevelMonitorConfigurationAPI$MC_COLOR_TEMPERATURE;
    static MC_COLOR_TEMPERATURE_6500K: HighLevelMonitorConfigurationAPI$MC_COLOR_TEMPERATURE;
    static MC_COLOR_TEMPERATURE_7500K: HighLevelMonitorConfigurationAPI$MC_COLOR_TEMPERATURE;
    static MC_COLOR_TEMPERATURE_8200K: HighLevelMonitorConfigurationAPI$MC_COLOR_TEMPERATURE;
    static MC_COLOR_TEMPERATURE_9300K: HighLevelMonitorConfigurationAPI$MC_COLOR_TEMPERATURE;
    static MC_COLOR_TEMPERATURE_UNKNOWN: HighLevelMonitorConfigurationAPI$MC_COLOR_TEMPERATURE;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HighLevelMonitorConfigurationAPI$MC_COLOR_TEMPERATURE;
    static values(): (Object | null)[];
    private constructor()
    name(): "MC_COLOR_TEMPERATURE_UNKNOWN" | "MC_COLOR_TEMPERATURE_4000K" | "MC_COLOR_TEMPERATURE_5000K" | "MC_COLOR_TEMPERATURE_6500K" | "MC_COLOR_TEMPERATURE_7500K" | "MC_COLOR_TEMPERATURE_8200K" | "MC_COLOR_TEMPERATURE_9300K" | "MC_COLOR_TEMPERATURE_10000K" | "MC_COLOR_TEMPERATURE_11500K";
}
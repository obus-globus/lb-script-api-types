import type { FlagEnum } from '../../../../../com/sun/jna/platform/win32/FlagEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HighLevelMonitorConfigurationAPI$MC_SUPPORTED_COLOR_TEMPERATURE extends Enum<HighLevelMonitorConfigurationAPI$MC_SUPPORTED_COLOR_TEMPERATURE> implements FlagEnum {
    static MC_SUPPORTED_COLOR_TEMPERATURE_10000K: HighLevelMonitorConfigurationAPI$MC_SUPPORTED_COLOR_TEMPERATURE;
    static MC_SUPPORTED_COLOR_TEMPERATURE_11500K: HighLevelMonitorConfigurationAPI$MC_SUPPORTED_COLOR_TEMPERATURE;
    static MC_SUPPORTED_COLOR_TEMPERATURE_4000K: HighLevelMonitorConfigurationAPI$MC_SUPPORTED_COLOR_TEMPERATURE;
    static MC_SUPPORTED_COLOR_TEMPERATURE_5000K: HighLevelMonitorConfigurationAPI$MC_SUPPORTED_COLOR_TEMPERATURE;
    static MC_SUPPORTED_COLOR_TEMPERATURE_6500K: HighLevelMonitorConfigurationAPI$MC_SUPPORTED_COLOR_TEMPERATURE;
    static MC_SUPPORTED_COLOR_TEMPERATURE_7500K: HighLevelMonitorConfigurationAPI$MC_SUPPORTED_COLOR_TEMPERATURE;
    static MC_SUPPORTED_COLOR_TEMPERATURE_8200K: HighLevelMonitorConfigurationAPI$MC_SUPPORTED_COLOR_TEMPERATURE;
    static MC_SUPPORTED_COLOR_TEMPERATURE_9300K: HighLevelMonitorConfigurationAPI$MC_SUPPORTED_COLOR_TEMPERATURE;
    static MC_SUPPORTED_COLOR_TEMPERATURE_NONE: HighLevelMonitorConfigurationAPI$MC_SUPPORTED_COLOR_TEMPERATURE;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HighLevelMonitorConfigurationAPI$MC_SUPPORTED_COLOR_TEMPERATURE;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    readonly flag: number;
    getFlag(): number;
    name(): "MC_SUPPORTED_COLOR_TEMPERATURE_NONE" | "MC_SUPPORTED_COLOR_TEMPERATURE_4000K" | "MC_SUPPORTED_COLOR_TEMPERATURE_5000K" | "MC_SUPPORTED_COLOR_TEMPERATURE_6500K" | "MC_SUPPORTED_COLOR_TEMPERATURE_7500K" | "MC_SUPPORTED_COLOR_TEMPERATURE_8200K" | "MC_SUPPORTED_COLOR_TEMPERATURE_9300K" | "MC_SUPPORTED_COLOR_TEMPERATURE_10000K" | "MC_SUPPORTED_COLOR_TEMPERATURE_11500K";
}
import type { FlagEnum } from '../../../../../com/sun/jna/platform/win32/FlagEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HighLevelMonitorConfigurationAPI$MC_CAPS extends Enum<HighLevelMonitorConfigurationAPI$MC_CAPS> implements FlagEnum {
    static MC_CAPS_BRIGHTNESS: HighLevelMonitorConfigurationAPI$MC_CAPS;
    static MC_CAPS_COLOR_TEMPERATURE: HighLevelMonitorConfigurationAPI$MC_CAPS;
    static MC_CAPS_CONTRAST: HighLevelMonitorConfigurationAPI$MC_CAPS;
    static MC_CAPS_DEGAUSS: HighLevelMonitorConfigurationAPI$MC_CAPS;
    static MC_CAPS_DISPLAY_AREA_POSITION: HighLevelMonitorConfigurationAPI$MC_CAPS;
    static MC_CAPS_DISPLAY_AREA_SIZE: HighLevelMonitorConfigurationAPI$MC_CAPS;
    static MC_CAPS_MONITOR_TECHNOLOGY_TYPE: HighLevelMonitorConfigurationAPI$MC_CAPS;
    static MC_CAPS_NONE: HighLevelMonitorConfigurationAPI$MC_CAPS;
    static MC_CAPS_RED_GREEN_BLUE_DRIVE: HighLevelMonitorConfigurationAPI$MC_CAPS;
    static MC_CAPS_RED_GREEN_BLUE_GAIN: HighLevelMonitorConfigurationAPI$MC_CAPS;
    static MC_CAPS_RESTORE_FACTORY_COLOR_DEFAULTS: HighLevelMonitorConfigurationAPI$MC_CAPS;
    static MC_CAPS_RESTORE_FACTORY_DEFAULTS: HighLevelMonitorConfigurationAPI$MC_CAPS;
    static MC_RESTORE_FACTORY_DEFAULTS_ENABLES_MONITOR_SETTINGS: HighLevelMonitorConfigurationAPI$MC_CAPS;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HighLevelMonitorConfigurationAPI$MC_CAPS;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    readonly flag: number;
    getFlag(): number;
    name(): "MC_CAPS_NONE" | "MC_CAPS_MONITOR_TECHNOLOGY_TYPE" | "MC_CAPS_BRIGHTNESS" | "MC_CAPS_CONTRAST" | "MC_CAPS_COLOR_TEMPERATURE" | "MC_CAPS_RED_GREEN_BLUE_GAIN" | "MC_CAPS_RED_GREEN_BLUE_DRIVE" | "MC_CAPS_DEGAUSS" | "MC_CAPS_DISPLAY_AREA_POSITION" | "MC_CAPS_DISPLAY_AREA_SIZE" | "MC_CAPS_RESTORE_FACTORY_DEFAULTS" | "MC_CAPS_RESTORE_FACTORY_COLOR_DEFAULTS" | "MC_RESTORE_FACTORY_DEFAULTS_ENABLES_MONITOR_SETTINGS";
}
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HighLevelMonitorConfigurationAPI$MC_DISPLAY_TECHNOLOGY_TYPE extends Enum<HighLevelMonitorConfigurationAPI$MC_DISPLAY_TECHNOLOGY_TYPE> {
    static MC_APERTURE_GRILL_CATHODE_RAY_TUBE: HighLevelMonitorConfigurationAPI$MC_DISPLAY_TECHNOLOGY_TYPE;
    static MC_ELECTROLUMINESCENT: HighLevelMonitorConfigurationAPI$MC_DISPLAY_TECHNOLOGY_TYPE;
    static MC_FIELD_EMISSION_DEVICE: HighLevelMonitorConfigurationAPI$MC_DISPLAY_TECHNOLOGY_TYPE;
    static MC_LIQUID_CRYSTAL_ON_SILICON: HighLevelMonitorConfigurationAPI$MC_DISPLAY_TECHNOLOGY_TYPE;
    static MC_MICROELECTROMECHANICAL: HighLevelMonitorConfigurationAPI$MC_DISPLAY_TECHNOLOGY_TYPE;
    static MC_ORGANIC_LIGHT_EMITTING_DIODE: HighLevelMonitorConfigurationAPI$MC_DISPLAY_TECHNOLOGY_TYPE;
    static MC_PLASMA: HighLevelMonitorConfigurationAPI$MC_DISPLAY_TECHNOLOGY_TYPE;
    static MC_SHADOW_MASK_CATHODE_RAY_TUBE: HighLevelMonitorConfigurationAPI$MC_DISPLAY_TECHNOLOGY_TYPE;
    static MC_THIN_FILM_TRANSISTOR: HighLevelMonitorConfigurationAPI$MC_DISPLAY_TECHNOLOGY_TYPE;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HighLevelMonitorConfigurationAPI$MC_DISPLAY_TECHNOLOGY_TYPE;
    static values(): HighLevelMonitorConfigurationAPI$MC_DISPLAY_TECHNOLOGY_TYPE[];
    private constructor()
    name(): "MC_SHADOW_MASK_CATHODE_RAY_TUBE" | "MC_APERTURE_GRILL_CATHODE_RAY_TUBE" | "MC_THIN_FILM_TRANSISTOR" | "MC_LIQUID_CRYSTAL_ON_SILICON" | "MC_PLASMA" | "MC_ORGANIC_LIGHT_EMITTING_DIODE" | "MC_ELECTROLUMINESCENT" | "MC_MICROELECTROMECHANICAL" | "MC_FIELD_EMISSION_DEVICE";
}
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LowLevelMonitorConfigurationAPI$MC_VCP_CODE_TYPE extends Enum<LowLevelMonitorConfigurationAPI$MC_VCP_CODE_TYPE> {
    static MC_MOMENTARY: LowLevelMonitorConfigurationAPI$MC_VCP_CODE_TYPE;
    static MC_SET_PARAMETER: LowLevelMonitorConfigurationAPI$MC_VCP_CODE_TYPE;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LowLevelMonitorConfigurationAPI$MC_VCP_CODE_TYPE;
    static values(): (Object | null)[];
    private constructor()
    name(): "MC_MOMENTARY" | "MC_SET_PARAMETER";
}
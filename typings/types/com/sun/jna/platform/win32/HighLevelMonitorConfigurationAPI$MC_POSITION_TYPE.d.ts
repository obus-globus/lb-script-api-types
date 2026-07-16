import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HighLevelMonitorConfigurationAPI$MC_POSITION_TYPE extends Enum<HighLevelMonitorConfigurationAPI$MC_POSITION_TYPE> {
    static MC_HORIZONTAL_POSITION: HighLevelMonitorConfigurationAPI$MC_POSITION_TYPE;
    static MC_VERTICAL_POSITION: HighLevelMonitorConfigurationAPI$MC_POSITION_TYPE;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HighLevelMonitorConfigurationAPI$MC_POSITION_TYPE;
    static values(): HighLevelMonitorConfigurationAPI$MC_POSITION_TYPE[];
    private constructor()
    name(): "MC_HORIZONTAL_POSITION" | "MC_VERTICAL_POSITION";
}
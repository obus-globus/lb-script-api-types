import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HighLevelMonitorConfigurationAPI$MC_SIZE_TYPE extends Enum<HighLevelMonitorConfigurationAPI$MC_SIZE_TYPE> {
    static MC_HEIGHT: HighLevelMonitorConfigurationAPI$MC_SIZE_TYPE;
    static MC_WIDTH: HighLevelMonitorConfigurationAPI$MC_SIZE_TYPE;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HighLevelMonitorConfigurationAPI$MC_SIZE_TYPE;
    static values(): HighLevelMonitorConfigurationAPI$MC_SIZE_TYPE[];
    private constructor()
    name(): "MC_WIDTH" | "MC_HEIGHT";
}
import type { LocalDate } from '../../../../java/time/LocalDate.d.ts'
import type { PowerSource } from '../../../../oshi/hardware/PowerSource.d.ts'
import type { PowerSource$CapacityUnits } from '../../../../oshi/hardware/PowerSource$CapacityUnits.d.ts'
import type { AbstractPowerSource } from '../../../../oshi/hardware/common/AbstractPowerSource.d.ts'
export class LinuxPowerSource extends AbstractPowerSource {
    static getPowerSources(): PowerSource[];
    constructor(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: boolean, arg10: boolean, arg11: PowerSource$CapacityUnits, arg12: number, arg13: number, arg14: number, arg15: number, arg16: string, arg17: LocalDate, arg18: string, arg19: string, arg20: number)
}
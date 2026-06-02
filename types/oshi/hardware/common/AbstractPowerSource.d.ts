import type { LocalDate } from '../../../java/time/LocalDate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PowerSource } from '../../../oshi/hardware/PowerSource.d.ts'
import type { PowerSource$CapacityUnits } from '../../../oshi/hardware/PowerSource$CapacityUnits.d.ts'
export abstract class AbstractPowerSource extends Object implements PowerSource {
    constructor(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: boolean, arg10: boolean, arg11: PowerSource$CapacityUnits, arg12: number, arg13: number, arg14: number, arg15: number, arg16: string, arg17: LocalDate, arg18: string, arg19: string, arg20: number)
    readonly amperage: number;
    readonly capacityUnits: PowerSource$CapacityUnits;
    readonly charging: boolean;
    readonly chemistry: string;
    readonly currentCapacity: number;
    readonly cycleCount: number;
    readonly designCapacity: number;
    readonly deviceName: string;
    readonly discharging: boolean;
    readonly manufactureDate: LocalDate;
    readonly manufacturer: string;
    readonly maxCapacity: number;
    readonly name: string;
    readonly powerOnLine: boolean;
    readonly powerUsageRate: number;
    readonly remainingCapacityPercent: number;
    readonly serialNumber: string;
    readonly temperature: number;
    readonly timeRemainingEstimated: number;
    readonly timeRemainingInstant: number;
    readonly voltage: number;
    getAmperage(): number;
    getCapacityUnits(): PowerSource$CapacityUnits;
    getChemistry(): string;
    getCurrentCapacity(): number;
    getCycleCount(): number;
    getDesignCapacity(): number;
    getDeviceName(): string;
    getManufactureDate(): LocalDate;
    getManufacturer(): string;
    getMaxCapacity(): number;
    getName(): string;
    getPowerUsageRate(): number;
    getRemainingCapacityPercent(): number;
    getSerialNumber(): string;
    getTemperature(): number;
    getTimeRemainingEstimated(): number;
    getTimeRemainingInstant(): number;
    getVoltage(): number;
    isCharging(): boolean;
    isDischarging(): boolean;
    isPowerOnLine(): boolean;
    toString(): string;
    updateAttributes(): boolean;
}
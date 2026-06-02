import type { LocalDate } from '../../java/time/LocalDate.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { PowerSource$CapacityUnits } from '../../oshi/hardware/PowerSource$CapacityUnits.d.ts'
export interface PowerSource extends Object{
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
    updateAttributes(): boolean;
}
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Sensors } from '../../../oshi/hardware/Sensors.d.ts'
export abstract class AbstractSensors extends Object implements Sensors {
    constructor()
    readonly cpuTemperature: () => number;
    readonly cpuVoltage: () => number;
    readonly fanSpeeds: () => number[];
    getCpuTemperature(): number;
    getCpuVoltage(): number;
    getFanSpeeds(): number[];
    queryCpuTemperature(): number;
    queryCpuVoltage(): number;
    queryFanSpeeds(): number[];
    toString(): string;
}
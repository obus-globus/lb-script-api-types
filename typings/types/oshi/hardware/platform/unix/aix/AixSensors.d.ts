import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { AbstractSensors } from '../../../../../oshi/hardware/common/AbstractSensors.d.ts'
export class AixSensors extends AbstractSensors {
    constructor(arg0: () => string[])
    // private lscfg: () => string[];
    queryCpuTemperature(): number;
    queryCpuVoltage(): number;
    queryFanSpeeds(): number[];
}
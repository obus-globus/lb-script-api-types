import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { AbstractSensors } from '../../../../../oshi/hardware/common/AbstractSensors.d.ts'
import type { Triplet } from '../../../../../oshi/util/tuples/Triplet.d.ts'
export class OpenBsdSensors extends AbstractSensors {
    constructor()
    // private tempFanVolts: () => Triplet<number, number[], number>;
    queryCpuTemperature(): number;
    queryCpuVoltage(): number;
    queryFanSpeeds(): number[];
}
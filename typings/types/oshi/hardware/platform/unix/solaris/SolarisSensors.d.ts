import type { AbstractSensors } from '../../../../../oshi/hardware/common/AbstractSensors.d.ts'
export class SolarisSensors extends AbstractSensors {
    constructor()
    queryCpuTemperature(): number;
    queryCpuVoltage(): number;
    queryFanSpeeds(): number[];
}
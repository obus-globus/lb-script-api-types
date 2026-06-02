import type { AbstractSensors } from '../../../../oshi/hardware/common/AbstractSensors.d.ts'
export class WindowsSensors extends AbstractSensors {
    constructor()
    queryCpuTemperature(): number;
    queryCpuVoltage(): number;
    queryFanSpeeds(): number[];
}
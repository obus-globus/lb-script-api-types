import type { AbstractSensors } from '../../../../../oshi/hardware/common/AbstractSensors.d.ts'
export class FreeBsdSensors extends AbstractSensors {
    constructor()
    queryCpuTemperature(): number;
    queryCpuVoltage(): number;
    queryFanSpeeds(): number[];
}
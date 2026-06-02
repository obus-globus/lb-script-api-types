import type { AbstractSensors } from '../../../../oshi/hardware/common/AbstractSensors.d.ts'
export class MacSensors extends AbstractSensors {
    constructor()
    // private numFans: number;
    queryCpuTemperature(): number;
    queryCpuVoltage(): number;
    queryFanSpeeds(): number[];
}
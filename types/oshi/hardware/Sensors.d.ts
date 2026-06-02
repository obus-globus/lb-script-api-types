import type { Object } from '../../java/lang/Object.d.ts'
export interface Sensors extends Object{
    getCpuTemperature(): number;
    getCpuVoltage(): number;
    getFanSpeeds(): number[];
}
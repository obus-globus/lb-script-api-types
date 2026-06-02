import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface SensorAccessor extends Object{
    getLastSenseTime(): number;
    getSenseInterval(): number;
    setLastSenseTime(arg0: number): void;
}
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ProfilerPathEntry extends Object{
    getCount(): number;
    getCounters(): Object2LongMap<string>;
    getDuration(): number;
    getMaxDuration(): number;
}
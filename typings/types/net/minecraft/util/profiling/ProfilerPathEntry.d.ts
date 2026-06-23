import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ProfilerPathEntry extends Object{
    getCount(): number;
    getCounters(): { [key: string]: any };
    getDuration(): number;
    getMaxDuration(): number;
}
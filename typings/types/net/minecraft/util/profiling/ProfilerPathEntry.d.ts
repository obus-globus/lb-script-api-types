import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ProfilerPathEntry extends Object{
    getCount(): number;
    getCounters(): JavaMap<any, any>;
    getDuration(): number;
    getMaxDuration(): number;
}
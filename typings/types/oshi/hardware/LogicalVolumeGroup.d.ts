import type { JavaMap } from '../../JavaMap.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface LogicalVolumeGroup extends Object{
    getLogicalVolumes(): JavaMap<string, string[]>;
    getName(): string;
    getPhysicalVolumes(): string[];
}
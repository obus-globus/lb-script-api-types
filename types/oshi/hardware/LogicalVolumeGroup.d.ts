import type { Object } from '../../java/lang/Object.d.ts'
export interface LogicalVolumeGroup extends Object{
    getLogicalVolumes(): { [key: string]: string[] };
    getName(): string;
    getPhysicalVolumes(): string[];
}
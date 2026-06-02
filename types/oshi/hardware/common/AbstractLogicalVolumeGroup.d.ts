import type { Object } from '../../../java/lang/Object.d.ts'
import type { LogicalVolumeGroup } from '../../../oshi/hardware/LogicalVolumeGroup.d.ts'
export class AbstractLogicalVolumeGroup extends Object implements LogicalVolumeGroup {
    constructor(arg0: string, arg1: { [key: string]: string[] }, arg2: string[])
    // private lvMap: { [key: string]: string[] };
    readonly name: string;
    // private pvSet: string[];
    getLogicalVolumes(): { [key: string]: string[] };
    getName(): string;
    getPhysicalVolumes(): string[];
    toString(): string;
}
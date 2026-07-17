import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LogicalVolumeGroup } from '../../../oshi/hardware/LogicalVolumeGroup.d.ts'
export class AbstractLogicalVolumeGroup extends Object implements LogicalVolumeGroup {
    constructor(arg0: string, arg1: JavaMap<string, string[]>, arg2: string[])
    // private lvMap: JavaMap<string, string[]>;
    readonly name: string;
    // private pvSet: string[];
    getLogicalVolumes(): JavaMap<string, string[]>;
    getName(): string;
    getPhysicalVolumes(): string[];
    toString(): string;
}
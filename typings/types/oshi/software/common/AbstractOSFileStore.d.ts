import type { Object } from '../../../java/lang/Object.d.ts'
import type { OSFileStore } from '../../../oshi/software/os/OSFileStore.d.ts'
export abstract class AbstractOSFileStore extends Object implements OSFileStore {
    constructor()
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string)
    readonly label: string;
    readonly mount: string;
    readonly name: string;
    readonly options: string;
    // private uuid: string;
    readonly volume: string;
    getDescription(): string;
    getFreeInodes(): number;
    getFreeSpace(): number;
    getLabel(): string;
    getLogicalVolume(): string;
    getMount(): string;
    getName(): string;
    getOptions(): string;
    getTotalInodes(): number;
    getTotalSpace(): number;
    getType(): string;
    getUUID(): string;
    getUsableSpace(): number;
    getVolume(): string;
    toString(): string;
    updateAttributes(): boolean;
}
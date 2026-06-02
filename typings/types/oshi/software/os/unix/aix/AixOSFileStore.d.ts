import type { AbstractOSFileStore } from '../../../../../oshi/software/common/AbstractOSFileStore.d.ts'
export class AixOSFileStore extends AbstractOSFileStore {
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, arg7: string, arg8: string, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number)
    readonly description: string;
    readonly freeInodes: number;
    readonly freeSpace: number;
    // private fsType: string;
    readonly logicalVolume: string;
    readonly totalInodes: number;
    readonly totalSpace: number;
    readonly usableSpace: number;
    getDescription(): string;
    getFreeInodes(): number;
    getFreeSpace(): number;
    getLogicalVolume(): string;
    getTotalInodes(): number;
    getTotalSpace(): number;
    getType(): string;
    getUsableSpace(): number;
    updateAttributes(): boolean;
}
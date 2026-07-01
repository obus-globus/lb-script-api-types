import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SevenZFileOptions$Builder } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZFileOptions$Builder.d.ts'
export class SevenZFileOptions extends Object {
    static DEFAULT: SevenZFileOptions;
    static builder(): SevenZFileOptions$Builder;
    constructor(arg0: number, arg1: boolean, arg2: boolean, arg3: any)
    // private maxMemoryLimitKiB: number;
    readonly tryToRecoverBrokenArchives: boolean;
    readonly useDefaultNameForUnnamedEntries: boolean;
    getMaxMemoryLimitInKb(): number;
    getTryToRecoverBrokenArchives(): boolean;
    getUseDefaultNameForUnnamedEntries(): boolean;
}
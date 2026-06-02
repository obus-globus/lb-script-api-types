import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SevenZFileOptions } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZFileOptions.d.ts'
export class SevenZFileOptions$Builder extends Object {
    constructor()
    // private maxMemoryLimitKb: number;
    // private tryToRecoverBrokenArchives: boolean;
    // private useDefaultNameForUnnamedEntries: boolean;
    build(): SevenZFileOptions;
    withMaxMemoryLimitInKb(arg0: number): SevenZFileOptions$Builder;
    withTryToRecoverBrokenArchives(arg0: boolean): SevenZFileOptions$Builder;
    withUseDefaultNameForUnnamedEntries(arg0: boolean): SevenZFileOptions$Builder;
}
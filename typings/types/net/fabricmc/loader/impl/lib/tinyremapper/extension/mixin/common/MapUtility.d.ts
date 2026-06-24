import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { TrClass } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrClass.d.ts'
import type { TrLogger } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrLogger.d.ts'
import type { TrMember } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember.d.ts'
import type { TrRemapper } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrRemapper.d.ts'
export class MapUtility extends Object {
    static IGNORED_NAME: string[];
    constructor(arg0: TrRemapper, arg1: TrLogger)
    // private logger: TrLogger;
    // private remapper: TrRemapper;
    asTrRemapper(): TrRemapper;
    mapDesc(arg0: TrMember): string;
    mapName(arg0: TrClass): string;
    mapName(arg0: TrMember): string;
}
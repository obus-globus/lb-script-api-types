import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TrClass } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrClass.d.ts'
import type { TrLogger } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrLogger.d.ts'
import type { TrMember } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember.d.ts'
import type { TrRemapper } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrRemapper.d.ts'
export interface TrEnvironment extends Object{
    getClass(arg0: string): TrClass;
    getLogger(): TrLogger;
    getMrjVersion(): number;
    getRemapper(): TrRemapper;
    propagate(arg0: TrMember, arg1: string): void;
}
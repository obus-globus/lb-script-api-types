import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { TrEnvironment } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrEnvironment.d.ts'
import type { TrLogger } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrLogger.d.ts'
import type { TrMember } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember.d.ts'
import type { MapUtility } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/MapUtility.d.ts'
import type { ResolveUtility } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/ResolveUtility.d.ts'
export class CommonData extends Object {
    constructor(arg0: TrEnvironment)
    // private environment: TrEnvironment;
    mapper: MapUtility;
    resolver: ResolveUtility;
    getLogger(): TrLogger;
    propagate(arg0: TrMember, arg1: string): void;
}
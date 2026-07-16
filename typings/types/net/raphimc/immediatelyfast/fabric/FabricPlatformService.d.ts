import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PlatformService } from '../../../../net/raphimc/immediatelyfast/service/PlatformService.d.ts'
export class FabricPlatformService extends Object implements PlatformService {
    static INSTANCE: PlatformService;
    constructor()
    getConfigDirectory(): Path;
    getModVersion(arg0: string): Optional<string>;
}
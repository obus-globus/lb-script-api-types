import type { UpdateChecker } from '../../../../../../com/terraformersmc/modmenu/api/UpdateChecker.d.ts'
import type { UpdateInfo } from '../../../../../../com/terraformersmc/modmenu/api/UpdateInfo.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../../../org/slf4j/Logger.d.ts'
export class FabricLoaderUpdateChecker extends Object implements UpdateChecker {
    static LOGGER: Logger;
    constructor()
    checkForUpdates(): UpdateInfo;
}
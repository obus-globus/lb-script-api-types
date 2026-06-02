import type { UpdateInfo } from '../../../../com/terraformersmc/modmenu/api/UpdateInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface UpdateChecker extends Object{
    checkForUpdates(): UpdateInfo;
}
import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { BaseApi } from '../../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { AutoSettings } from '../../../../../../net/ccbluex/liquidbounce/api/models/client/AutoSettings.d.ts'
import type { Build } from '../../../../../../net/ccbluex/liquidbounce/api/models/client/Build.d.ts'
import type { MessageOfTheDay } from '../../../../../../net/ccbluex/liquidbounce/api/models/client/MessageOfTheDay.d.ts'
export class ClientApi extends BaseApi {
    static INSTANCE: ClientApi;
    requestMessageOfTheDayEndpoint(branch: string): MessageOfTheDay;
    requestNewestBuildEndpoint(branch: string, release: boolean): Build;
    requestSettingsList(branch: string): AutoSettings[];
    requestSettingsScript(settingId: string, branch: string): Reader;
}
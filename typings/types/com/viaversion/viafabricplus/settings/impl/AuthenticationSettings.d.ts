import type { SettingGroup } from '../../../../../com/viaversion/viafabricplus/api/settings/SettingGroup.d.ts'
import type { BooleanSetting } from '../../../../../com/viaversion/viafabricplus/api/settings/type/BooleanSetting.d.ts'
export class AuthenticationSettings extends SettingGroup {
    static INSTANCE: AuthenticationSettings;
    constructor()
    automaticallySelectCPEInClassiCubeServerList: BooleanSetting;
    setSessionNameToClassiCubeNameInServerList: BooleanSetting;
    useBetaCraftAuthentication: BooleanSetting;
    verifySessionForOnlineModeServers: BooleanSetting;
}
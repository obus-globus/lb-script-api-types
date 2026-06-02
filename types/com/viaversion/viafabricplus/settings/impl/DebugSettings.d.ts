import type { SettingGroup } from '../../../../../com/viaversion/viafabricplus/api/settings/SettingGroup.d.ts'
import type { BooleanSetting } from '../../../../../com/viaversion/viafabricplus/api/settings/type/BooleanSetting.d.ts'
import type { VersionedBooleanSetting } from '../../../../../com/viaversion/viafabricplus/api/settings/type/VersionedBooleanSetting.d.ts'
export class DebugSettings extends SettingGroup {
    static INSTANCE: DebugSettings;
    constructor()
    alwaysTickClientPlayer: VersionedBooleanSetting;
    disableSequencing: VersionedBooleanSetting;
    disableServerPinging: VersionedBooleanSetting;
    dontCreatePacketErrorCrashReports: VersionedBooleanSetting;
    emulateArmorHud: VersionedBooleanSetting;
    executeInputsSynchronously: VersionedBooleanSetting;
    filterNonExistingGlyphs: BooleanSetting;
    hideModernCommandBlockScreenFeatures: VersionedBooleanSetting;
    hideModernJigsawScreenFeatures: BooleanSetting;
    ignoreFabricSyncErrors: BooleanSetting;
    legacyCropOutlines: VersionedBooleanSetting;
    legacyPaneOutlines: VersionedBooleanSetting;
    legacyTabCompletions: VersionedBooleanSetting;
    printNetworkingErrorsToLogs: BooleanSetting;
    queueConfigPackets: BooleanSetting;
    removeServerDescriptionSanitize: VersionedBooleanSetting;
    serversidePlaceSounds: VersionedBooleanSetting;
}
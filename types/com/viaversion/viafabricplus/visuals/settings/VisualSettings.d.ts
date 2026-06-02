import type { SettingGroup } from '../../../../../com/viaversion/viafabricplus/api/settings/SettingGroup.d.ts'
import type { BooleanSetting } from '../../../../../com/viaversion/viafabricplus/api/settings/type/BooleanSetting.d.ts'
import type { ModeSetting } from '../../../../../com/viaversion/viafabricplus/api/settings/type/ModeSetting.d.ts'
import type { VersionedBooleanSetting } from '../../../../../com/viaversion/viafabricplus/api/settings/type/VersionedBooleanSetting.d.ts'
export class VisualSettings extends SettingGroup {
    static INSTANCE: VisualSettings;
    constructor()
    alwaysRenderCrosshair: VersionedBooleanSetting;
    changeBodyRotationInterpolation: VersionedBooleanSetting;
    changeGameMenuScreenLayout: ModeSetting;
    disableSecureChatWarning: VersionedBooleanSetting;
    enableLegacyTablist: VersionedBooleanSetting;
    forceUnicodeFontForNonAsciiLanguages: VersionedBooleanSetting;
    hideCraftingRecipeBook: VersionedBooleanSetting;
    hideDownloadTerrainScreenTransitionEffects: VersionedBooleanSetting;
    hideEmptyBubbleIcons: BooleanSetting;
    hideFurnaceRecipeBook: VersionedBooleanSetting;
    hideModernHUDElements: VersionedBooleanSetting;
    hideSignatureIndicator: VersionedBooleanSetting;
    hideVillagerProfession: BooleanSetting;
    lockBlockingArmRotation: VersionedBooleanSetting;
    oldWalkingAnimation: VersionedBooleanSetting;
    potionEnchantmentGlint: VersionedBooleanSetting;
    removeBubblePopSound: BooleanSetting;
    replaceCreativeInventory: VersionedBooleanSetting;
    replaceHurtSoundWithOOFSound: VersionedBooleanSetting;
    replacePetrifiedOakSlab: VersionedBooleanSetting;
    sidewaysBackwardsRunning: VersionedBooleanSetting;
    sneakInstantly: VersionedBooleanSetting;
    swingHandOnItemUse: VersionedBooleanSetting;
    tiltItemPositions: VersionedBooleanSetting;
}
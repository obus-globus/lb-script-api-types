import type { SettingGroup } from '../../../../../com/viaversion/viafabricplus/api/settings/SettingGroup.d.ts'
import type { BooleanSetting } from '../../../../../com/viaversion/viafabricplus/api/settings/type/BooleanSetting.d.ts'
import type { ModeSetting } from '../../../../../com/viaversion/viafabricplus/api/settings/type/ModeSetting.d.ts'
import type { GeneralSettings$Position } from '../../../../../com/viaversion/viafabricplus/settings/impl/GeneralSettings$Position.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class GeneralSettings extends SettingGroup {
    static INSTANCE: GeneralSettings;
    static setOrientation(paramarg0: (param0: number, param1: number) => void, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
    // private ORIENTATION_OPTIONS: MutableComponent[];
    addServerScreenButtonOrientation: ModeSetting;
    directConnectScreenButtonOrientation: ModeSetting;
    emulateInventoryActionsInAlphaVersions: BooleanSetting;
    experimentalBlockConnections: BooleanSetting;
    ignorePacketTranslationErrors: ModeSetting;
    loadSkinsAndSkullsInLegacyVersions: BooleanSetting;
    multiplayerScreenButtonOrientation: ModeSetting;
    removeNotAvailableItemsFromCreativeTab: ModeSetting;
    saveScrollPositionInSlotScreens: BooleanSetting;
    saveSelectedProtocolVersion: BooleanSetting;
    showAdvertisedServerVersion: BooleanSetting;
    showClassicLoadingProgressInConnectScreen: BooleanSetting;
}
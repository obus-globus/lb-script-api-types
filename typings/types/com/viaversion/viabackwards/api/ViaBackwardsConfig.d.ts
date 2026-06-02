import type { DialogStyleConfig } from '../../../../com/viaversion/viabackwards/api/DialogStyleConfig.d.ts'
import type { Config } from '../../../../com/viaversion/viaversion/api/configuration/Config.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ViaBackwardsConfig extends Config, Object{
    addCustomEnchantsToLore(): boolean;
    addTeamColorTo1_13Prefix(): boolean;
    alwaysShowOriginalMobName(): boolean;
    bedrockAtY0(): boolean;
    codeOfConductAsDialog(): boolean;
    dialogStyleConfig(): DialogStyleConfig;
    dialogsViaChests(): boolean;
    fix1_13FormattedInventoryTitle(): boolean;
    handlePingsAsInvAcknowledgements(): boolean;
    isFix1_13FacePlayer(): boolean;
    mapCustomModelData(): boolean;
    mapDarknessEffect(): boolean;
    mapDisplayEntities(): boolean;
    passOriginalItemNameToResourcePacks(): boolean;
    scaffoldingToWater(): boolean;
    sculkShriekerToCryingObsidian(): boolean;
    suppressEmulationWarnings(): boolean;
}
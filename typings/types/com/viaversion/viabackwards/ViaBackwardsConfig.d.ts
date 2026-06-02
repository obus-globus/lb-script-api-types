import type { DialogStyleConfig } from '../../../com/viaversion/viabackwards/api/DialogStyleConfig.d.ts'
import type { ViaBackwardsConfig } from '../../../com/viaversion/viabackwards/api/ViaBackwardsConfig.d.ts'
import type { Config } from '../../../com/viaversion/viaversion/util/Config.d.ts'
import type { ConfigSection } from '../../../com/viaversion/viaversion/util/ConfigSection.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ViaBackwardsConfig extends Config implements ViaBackwardsConfig {
    constructor(arg0: File, arg1: Logger)
    // private addCustomEnchantsToLore: boolean;
    // private addTeamColorToPrefix: boolean;
    // private alwaysShowOriginalMobName: boolean;
    // private bedrockAtY0: boolean;
    // private codeOfConductAsDialog: boolean;
    // private dialogStyleConfig: DialogStyleConfig;
    // private dialogsViaChests: boolean;
    readonly fix1_13FacePlayer: boolean;
    // private fix1_13FormattedInventoryTitles: boolean;
    // private handlePingsAsInvAcknowledgements: boolean;
    // private mapCustomModelData: boolean;
    // private mapDarknessEffect: boolean;
    // private mapDisplayEntities: boolean;
    // private passOriginalItemNameToResourcePacks: boolean;
    // private scaffoldingToWater: boolean;
    // private sculkShriekersToCryingObsidian: boolean;
    // private suppressEmulationWarnings: boolean;
    addCustomEnchantsToLore(): boolean;
    addTeamColorTo1_13Prefix(): boolean;
    alwaysShowOriginalMobName(): boolean;
    bedrockAtY0(): boolean;
    codeOfConductAsDialog(): boolean;
    dialogStyleConfig(): DialogStyleConfig;
    dialogsViaChests(): boolean;
    fix1_13FormattedInventoryTitle(): boolean;
    getDefaultConfigInputStream(): InputStream;
    getDefaultConfigURL(): URL;
    getString(arg0: ConfigSection, arg1: string, arg2: string): string;
    getUnsupportedOptions(): string[];
    handleConfig(arg0: { [key: string]: Object }): void;
    handlePingsAsInvAcknowledgements(): boolean;
    isFix1_13FacePlayer(): boolean;
    // private loadDialogStyleConfig(arg0: ConfigSection): DialogStyleConfig;
    // private loadFields(): void;
    mapCustomModelData(): boolean;
    mapDarknessEffect(): boolean;
    mapDisplayEntities(): boolean;
    passOriginalItemNameToResourcePacks(): boolean;
    reload(): void;
    scaffoldingToWater(): boolean;
    sculkShriekerToCryingObsidian(): boolean;
    suppressEmulationWarnings(): boolean;
}
import type { AbstractViaConfig } from '../../../../../../com/viaversion/viaversion/configuration/AbstractViaConfig.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { Logger } from '../../../../../../java/util/logging/Logger.d.ts'
export class ViaFabricPlusConfig extends AbstractViaConfig {
    static BUKKIT_ONLY_OPTIONS: string[];
    static VELOCITY_ONLY_OPTIONS: string[];
    constructor(arg0: File, arg1: Logger)
    cancelBlockSounds(): boolean;
    cancelSwingInInventory(): boolean;
    fix1_21PlacementRotation(): boolean;
    getUnsupportedOptions(): string[];
    is1_13TeamColourFix(): boolean;
    isCheckForUpdates(): boolean;
    isServersideBlockConnections(): boolean;
    isSimulatePlayerTick(): boolean;
    updateConfig(): boolean;
    use1_8HitboxMargin(): boolean;
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SodiumOptions$AdvancedSettings } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/SodiumOptions$AdvancedSettings.d.ts'
import type { SodiumOptions$DebugSettings } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/SodiumOptions$DebugSettings.d.ts'
import type { SodiumOptions$NotificationSettings } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/SodiumOptions$NotificationSettings.d.ts'
import type { SodiumOptions$PerformanceSettings } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/SodiumOptions$PerformanceSettings.d.ts'
import type { SodiumOptions$QualitySettings } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/SodiumOptions$QualitySettings.d.ts'
export class SodiumOptions extends Object {
    static defaults(): SodiumOptions;
    static loadFromDisk(): SodiumOptions;
    static writeToDisk(paramarg0: SodiumOptions): void;
    private constructor()
    advanced: SodiumOptions$AdvancedSettings;
    debug: SodiumOptions$DebugSettings;
    notifications: SodiumOptions$NotificationSettings;
    performance: SodiumOptions$PerformanceSettings;
    quality: SodiumOptions$QualitySettings;
    readonly readOnly: boolean;
    isReadOnly(): boolean;
    setReadOnly(): void;
}
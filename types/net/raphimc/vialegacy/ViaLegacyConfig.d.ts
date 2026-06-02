import type { Config } from '../../../com/viaversion/viaversion/util/Config.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ViaLegacyConfig } from '../../../net/raphimc/vialegacy/platform/ViaLegacyConfig.d.ts'
export class ViaLegacyConfig extends Config implements ViaLegacyConfig {
    constructor(arg0: File, arg1: Logger)
    readonly b1_7_3Motd: string;
    readonly classicChunkRange: number;
    readonly dynamicOnground: boolean;
    // private enableB1_7_3Sprinting: boolean;
    // private enableClassicFly: boolean;
    // private ignoreLongChannelNames: boolean;
    readonly legacySkinLoading: boolean;
    readonly legacySkullLoading: boolean;
    readonly oldBiomes: boolean;
    readonly soundEmulation: boolean;
    enableB1_7_3Sprinting(): boolean;
    enableClassicFly(): boolean;
    getB1_7_3Motd(): string;
    getClassicChunkRange(): number;
    getDefaultConfigURL(): URL;
    getUnsupportedOptions(): string[];
    handleConfig(arg0: { [key: string]: Object }): void;
    isDynamicOnground(): boolean;
    isIgnoreLong1_8ChannelNames(): boolean;
    isLegacySkinLoading(): boolean;
    isLegacySkullLoading(): boolean;
    isOldBiomes(): boolean;
    isSoundEmulation(): boolean;
    // private loadFields(): void;
    reload(): void;
}
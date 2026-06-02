import type { Config } from '../../../../com/viaversion/viaversion/api/configuration/Config.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ViaLegacyConfig extends Config, Object{
    enableB1_7_3Sprinting(): boolean;
    enableClassicFly(): boolean;
    getB1_7_3Motd(): string;
    getClassicChunkRange(): number;
    isDynamicOnground(): boolean;
    isIgnoreLong1_8ChannelNames(): boolean;
    isLegacySkinLoading(): boolean;
    isLegacySkullLoading(): boolean;
    isOldBiomes(): boolean;
    isSoundEmulation(): boolean;
}
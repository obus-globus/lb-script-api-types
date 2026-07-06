import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AutoSettings } from '../../../../../net/ccbluex/liquidbounce/api/models/client/AutoSettings.d.ts'
import type { AutoSettingsStatusType } from '../../../../../net/ccbluex/liquidbounce/api/types/enums/AutoSettingsStatusType.d.ts'
import type { AutoSettingsType } from '../../../../../net/ccbluex/liquidbounce/api/types/enums/AutoSettingsType.d.ts'
import type { IncludeConfiguration } from '../../../../../net/ccbluex/liquidbounce/config/autoconfig/IncludeConfiguration.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class AutoConfig extends Object {
    static INSTANCE: AutoConfig;
    readonly configs: AutoSettings[] | null;
    includeConfiguration: IncludeConfiguration;
    loadingNow: boolean;
    // private deserializeModuleValueGroup(jsonObject: JsonObject, modules: ValueGroup[]): void;
    // private formatAutoConfigProtocolInfo(pVersion: number, pName: string): void;
    /**
     * Deserialize module configurable from a reader
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt#L109 | src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt:109}
     */
    loadAutoConfig(jsonObject: JsonObject, modules: ValueGroup[]): void;
    loadAutoConfig(reader: Reader, modules: ValueGroup[]): void;
    loadAutoConfig(autoConfig: AutoSettings): void;
    // private printOutMetadata(jsonObject: JsonObject): void;
    /**
     * Reloads auto settings list.
     *
     * @returns successfully reloaded or not
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt#L85 | src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt:85}
     */
    reloadConfigs(): boolean;
    /**
     * Created an auto config, which stores the moduleConfigur
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt#L257 | src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt:257}
     */
    serializeAutoConfig(writer: Writer, includeConfiguration: IncludeConfiguration, autoSettingsType: AutoSettingsType, statusType: AutoSettingsStatusType): void;
    withLoading(block: () => void): void;
}
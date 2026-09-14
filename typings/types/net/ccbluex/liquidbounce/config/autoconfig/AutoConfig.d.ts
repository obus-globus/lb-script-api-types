import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt#L109 | src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt:109}
     */
    loadAutoConfig(jsonObject: JsonObject, modules: ValueGroup[]): void;
    loadAutoConfig(reader: Reader, modules: ValueGroup[]): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    loadAutoConfig(autoConfig: AutoSettings, $completion: Continuation<void>): any;
    // private printOutMetadata(jsonObject: JsonObject): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    reloadConfigs($completion: Continuation<boolean>): any;
    /**
     * Created an auto config, which stores the moduleConfigur
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt#L257 | src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt:257}
     */
    serializeAutoConfig(writer: Writer, includeConfiguration: IncludeConfiguration, autoSettingsType: AutoSettingsType, statusType: AutoSettingsStatusType): void;
    withLoading(block: () => void): void;
}
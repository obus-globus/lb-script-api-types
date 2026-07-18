import type { BaseApplicationPlugin } from '../../../../io/ktor/server/application/BaseApplicationPlugin.d.ts'
import type { EnginePipeline } from '../../../../io/ktor/server/engine/EnginePipeline.d.ts'
import type { ShutDownUrl } from '../../../../io/ktor/server/engine/ShutDownUrl.d.ts'
import type { ShutDownUrl$Config } from '../../../../io/ktor/server/engine/ShutDownUrl$Config.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ShutDownUrl$EnginePlugin extends Object implements BaseApplicationPlugin<EnginePipeline, ShutDownUrl$Config, ShutDownUrl> {
    static INSTANCE: ShutDownUrl$EnginePlugin;
    readonly key: AttributeKey<ShutDownUrl>;
    install(pipeline: EnginePipeline, configure: (param0: ShutDownUrl$Config) => void): ShutDownUrl;
}
import type { BaseApplicationResponse } from '../../../../io/ktor/server/engine/BaseApplicationResponse.d.ts'
import type { EnginePipeline } from '../../../../io/ktor/server/engine/EnginePipeline.d.ts'
import type { ApplicationSendPipeline } from '../../../../io/ktor/server/response/ApplicationSendPipeline.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class BaseApplicationResponse$Companion extends Object {
    // private EngineResponseAttributeKey: AttributeKey<BaseApplicationResponse>;
    /*not mapped: */ getEngineResponseAttributeKey(): AttributeKey<BaseApplicationResponse>;
    setupFallbackResponse(application: EnginePipeline, logger: Logger): void;
    setupSendPipeline(sendPipeline: ApplicationSendPipeline): void;
}
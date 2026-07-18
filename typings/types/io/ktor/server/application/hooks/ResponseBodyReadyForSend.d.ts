import type { OutgoingContent } from '../../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ApplicationCallPipeline } from '../../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { Hook } from '../../../../../io/ktor/server/application/Hook.d.ts'
import type { ResponseBodyReadyForSend$Context } from '../../../../../io/ktor/server/application/hooks/ResponseBodyReadyForSend$Context.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ResponseBodyReadyForSend extends Object implements Hook<(param0: ResponseBodyReadyForSend$Context, param1: ApplicationCall, param2: OutgoingContent) => void> {
    static INSTANCE: ResponseBodyReadyForSend;
    install(pipeline: ApplicationCallPipeline, handler: (param0: ResponseBodyReadyForSend$Context, param1: ApplicationCall, param2: OutgoingContent) => void): void;
}
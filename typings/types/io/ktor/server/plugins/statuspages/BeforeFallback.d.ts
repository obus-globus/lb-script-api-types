import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ApplicationCallPipeline } from '../../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { Hook } from '../../../../../io/ktor/server/application/Hook.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BeforeFallback extends Object implements Hook<(param0: ApplicationCall) => void> {
    static INSTANCE: BeforeFallback;
    install(pipeline: ApplicationCallPipeline, handler: (param0: ApplicationCall) => void): void;
}
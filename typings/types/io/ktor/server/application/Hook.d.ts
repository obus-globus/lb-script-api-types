import type { ApplicationCallPipeline } from '../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Hook<HookHandler extends unknown> extends Object{
    install(pipeline: ApplicationCallPipeline, handler: HookHandler): void;
}
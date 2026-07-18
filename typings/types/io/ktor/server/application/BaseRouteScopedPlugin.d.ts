import type { ApplicationCallPipeline } from '../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { Plugin } from '../../../../io/ktor/server/application/Plugin.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BaseRouteScopedPlugin<TConfiguration extends unknown, TPlugin extends unknown> extends Plugin<ApplicationCallPipeline, TConfiguration, TPlugin>, Object{
}
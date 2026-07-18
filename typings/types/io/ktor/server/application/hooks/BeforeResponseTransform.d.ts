import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ApplicationCallPipeline } from '../../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { Hook } from '../../../../../io/ktor/server/application/Hook.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export class BeforeResponseTransform<T extends unknown> extends Object implements Hook<(param0: ApplicationCall, param1: T) => Object> {
    constructor(clazz: KClass<T>)
    // private clazz: KClass<T>;
    install(pipeline: ApplicationCallPipeline, handler: (param0: ApplicationCall, param1: T) => Object): void;
}
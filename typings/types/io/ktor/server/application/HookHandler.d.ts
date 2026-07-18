import type { ApplicationCallPipeline } from '../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { Hook } from '../../../../io/ktor/server/application/Hook.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HookHandler<T extends unknown> extends Object {
    constructor(hook: Hook<T>, handler: T)
    // private handler: T;
    // private hook: Hook<T>;
    install(pipeline: ApplicationCallPipeline): void;
}
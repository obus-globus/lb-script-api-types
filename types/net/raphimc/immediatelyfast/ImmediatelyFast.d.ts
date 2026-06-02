import type { Object } from '../../../java/lang/Object.d.ts'
import type { ImmediatelyFastConfig } from '../../../net/raphimc/immediatelyfast/feature/core/ImmediatelyFastConfig.d.ts'
import type { ImmediatelyFastRuntimeConfig } from '../../../net/raphimc/immediatelyfast/feature/core/ImmediatelyFastRuntimeConfig.d.ts'
import type { SignTextCache } from '../../../net/raphimc/immediatelyfast/feature/sign_text_buffering/SignTextCache.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
export class ImmediatelyFast extends Object {
    static LOGGER: Logger;
    static VERSION: string;
    static config: ImmediatelyFastConfig;
    static runtimeConfig: ImmediatelyFastRuntimeConfig;
    static signTextCache: SignTextCache;
    static createRuntimeConfig(): void;
    static earlyInit(): void;
    static lateInit(): void;
    static loadConfig(): void;
    static onLevelChange(): void;
    static onRenderSystemInit(): void;
    constructor()
}
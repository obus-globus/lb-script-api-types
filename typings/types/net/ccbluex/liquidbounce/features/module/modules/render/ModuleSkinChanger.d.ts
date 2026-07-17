import type { Continuation } from '../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { Duration } from '../../../../../../../kotlin/time/Duration.d.ts'
import type { MinecraftServicesApi } from '../../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/service/MinecraftServicesApi.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
export class ModuleSkinChanger extends ClientModule {
    static INSTANCE: ModuleSkinChanger;
    static shouldApplyChanges(): boolean;
    // private canUploadSkin(): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    enabledEffect($completion: Continuation<void>): any;
    // private request(block: (param0: MinecraftServicesApi) => void): void;
    shouldApplyChanges(): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private triggerUpload($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private waitUntilInGame($completion: Continuation<void>): any;
}
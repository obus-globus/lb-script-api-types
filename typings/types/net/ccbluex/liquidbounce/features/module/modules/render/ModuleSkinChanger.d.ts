import type { Duration } from '../../../../../../../kotlin/time/Duration.d.ts'
import type { MinecraftServicesApi } from '../../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/service/MinecraftServicesApi.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
export class ModuleSkinChanger extends ClientModule {
    static INSTANCE: ModuleSkinChanger;
    static shouldApplyChanges(): boolean;
    // private canUploadSkin(): boolean;
    enabledEffect(): void;
    // private request(block: (param0: MinecraftServicesApi) => void): void;
    shouldApplyChanges(): boolean;
    // private triggerUpload(): void;
    // private waitUntilInGame(): void;
}
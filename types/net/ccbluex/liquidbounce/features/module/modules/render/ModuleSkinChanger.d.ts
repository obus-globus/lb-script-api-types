import type { Function1 } from '../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { PlayerSkinApi } from '../../../../../../../net/ccbluex/liquidbounce/api/thirdparty/PlayerSkinApi.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
export class ModuleSkinChanger extends ClientModule {
    static INSTANCE: ModuleSkinChanger;
    static shouldApplyChanges(): boolean;
    // private canUploadSkin(): boolean;
    enabledEffect(): void;
    // private request(block: Function1<PlayerSkinApi, void>): void;
    shouldApplyChanges(): boolean;
    // private triggerUpload(): void;
    // private waitUntilInGame(): void;
}
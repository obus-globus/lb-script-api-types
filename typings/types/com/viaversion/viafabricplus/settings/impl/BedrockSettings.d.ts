import type { SettingGroup } from '../../../../../com/viaversion/viafabricplus/api/settings/SettingGroup.d.ts'
import type { BooleanSetting } from '../../../../../com/viaversion/viafabricplus/api/settings/type/BooleanSetting.d.ts'
import type { ButtonSetting } from '../../../../../com/viaversion/viafabricplus/api/settings/type/ButtonSetting.d.ts'
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
export class BedrockSettings extends SettingGroup {
    static INSTANCE: BedrockSettings;
    static replaceDefaultPort(paramarg0: string, paramarg1: ProtocolVersion): string;
    constructor()
    // private clickToSetBedrockAccount: ButtonSetting;
    experimentalFeatures: BooleanSetting;
    replaceDefaultPort: BooleanSetting;
    // private thread: Thread;
    // private openBedrockAccountLogin(): void;
}
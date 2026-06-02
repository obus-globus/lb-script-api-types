import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { AbstractSetting } from '../../../../../../com/viaversion/viafabricplus/api/settings/AbstractSetting.d.ts'
import type { SettingGroup } from '../../../../../../com/viaversion/viafabricplus/api/settings/SettingGroup.d.ts'
import type { ProtocolVersion } from '../../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { ProtocolVersionRange } from '../../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersionRange.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class VersionedBooleanSetting extends AbstractSetting<number> {
    static AUTO_INDEX: number;
    static DISABLED_INDEX: number;
    static ENABLED_INDEX: number;
    static mapTranslationKey(paramarg0: string): string;
    constructor(arg0: SettingGroup, arg1: MutableComponent, arg2: ProtocolVersionRange)
    readonly protocolRange: ProtocolVersionRange;
    getProtocolRange(): ProtocolVersionRange;
    isAuto(): boolean;
    isEnabled(): boolean;
    isEnabled(arg0: ProtocolVersion): boolean;
    isEnabled(arg0: number): boolean;
    isEnabled(arg0: number, arg1: ProtocolVersion): boolean;
    read(arg0: JsonObject): void;
    write(arg0: JsonObject): void;
}
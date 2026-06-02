import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { AbstractSetting } from '../../../../../../com/viaversion/viafabricplus/api/settings/AbstractSetting.d.ts'
import type { SettingGroup } from '../../../../../../com/viaversion/viafabricplus/api/settings/SettingGroup.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class ButtonSetting extends AbstractSetting<() => void> {
    static mapTranslationKey(paramarg0: string): string;
    constructor(arg0: SettingGroup, arg1: MutableComponent, arg2: () => void)
    displayValue(): MutableComponent;
    read(arg0: JsonObject): void;
    write(arg0: JsonObject): void;
}
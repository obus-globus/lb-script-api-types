import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { AbstractSetting } from '../../../../../../com/viaversion/viafabricplus/api/settings/AbstractSetting.d.ts'
import type { SettingGroup } from '../../../../../../com/viaversion/viafabricplus/api/settings/SettingGroup.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class ModeSetting extends AbstractSetting<MutableComponent> {
    static mapTranslationKey(paramarg0: string): string;
    constructor(arg0: SettingGroup, arg1: MutableComponent, arg2: MutableComponent[])
    constructor(arg0: SettingGroup, arg1: MutableComponent, arg2: number, arg3: MutableComponent[])
    readonly options: MutableComponent[];
    getIndex(): number;
    getOptions(): MutableComponent[];
    read(arg0: JsonObject): void;
    setValue(arg0: number): void;
    write(arg0: JsonObject): void;
}
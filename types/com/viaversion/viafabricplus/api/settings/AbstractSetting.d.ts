import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { SettingGroup } from '../../../../../com/viaversion/viafabricplus/api/settings/SettingGroup.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class AbstractSetting<T extends Object | number | string | boolean> extends Object {
    static mapTranslationKey(paramarg0: string): string;
    constructor(arg0: SettingGroup, arg1: MutableComponent, arg2: T)
    readonly defaultValue: T;
    // private locked: boolean;
    // private lockedValue: T;
    readonly name: MutableComponent;
    readonly tooltip: () => Component;
    readonly value: T;
    getCurrentValue(): T;
    getDefaultValue(): T;
    getName(): MutableComponent;
    getTooltip(): Component;
    getTranslationKey(): string;
    getValue(): T;
    lockValue(): void;
    onValueChanged(): void;
    read(arg0: JsonObject): void;
    setTooltip(arg0: () => Component): void;
    setTooltip(arg0: Component): void;
    setValue(arg0: T): void;
    write(arg0: JsonObject): void;
}
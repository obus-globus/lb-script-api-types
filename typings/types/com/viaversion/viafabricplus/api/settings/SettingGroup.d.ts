import type { AbstractSetting } from '../../../../../com/viaversion/viafabricplus/api/settings/AbstractSetting.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class SettingGroup extends Object {
    constructor(arg0: Component)
    readonly name: Component;
    readonly settings: AbstractSetting<Object>[];
    getName(): Component;
    getSetting(arg0: string): AbstractSetting<Object>;
    getSettings(): AbstractSetting<Object>[];
}
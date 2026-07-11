import type { SettingGroup } from '../../../../com/viaversion/viafabricplus/api/settings/SettingGroup.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SettingsManager extends Object {
    static INSTANCE: SettingsManager;
    constructor()
    readonly groups: SettingGroup[];
    addGroup(...arg0: SettingGroup[]): void;
    getGroups(): SettingGroup[];
    init(): void;
}
import type { AbstractSave } from '../../../../com/viaversion/viafabricplus/save/AbstractSave.d.ts'
import type { AccountsSave } from '../../../../com/viaversion/viafabricplus/save/impl/AccountsSave.d.ts'
import type { SettingsSave } from '../../../../com/viaversion/viafabricplus/save/impl/SettingsSave.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SaveManager extends Object {
    static INSTANCE: SaveManager;
    constructor()
    readonly accountsSave: AccountsSave;
    // private saves: AbstractSave[];
    readonly settingsSave: SettingsSave;
    add(...arg0: AbstractSave[]): void;
    getAccountsSave(): AccountsSave;
    getSettingsSave(): SettingsSave;
    init(): void;
    postInit(): void;
}
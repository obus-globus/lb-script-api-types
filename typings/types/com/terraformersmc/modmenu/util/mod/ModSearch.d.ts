import type { ModsScreen } from '../../../../../com/terraformersmc/modmenu/gui/ModsScreen.d.ts'
import type { Mod } from '../../../../../com/terraformersmc/modmenu/util/mod/Mod.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ModSearch extends Object {
    static search(paramarg0: ModsScreen, paramarg1: string, paramarg2: Mod[]): Mod[];
    static validSearchQuery(paramarg0: string): boolean;
    constructor()
}
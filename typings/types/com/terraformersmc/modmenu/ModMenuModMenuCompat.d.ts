import type { ConfigScreenFactory } from '../../../com/terraformersmc/modmenu/api/ConfigScreenFactory.d.ts'
import type { ModMenuApi } from '../../../com/terraformersmc/modmenu/api/ModMenuApi.d.ts'
import type { UpdateChecker } from '../../../com/terraformersmc/modmenu/api/UpdateChecker.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Screen } from '../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class ModMenuModMenuCompat extends Object implements ModMenuApi {
    static createModsButtonText(): Component;
    static createModsScreen(paramarg0: Screen): Screen;
    constructor()
    attachModpackBadges(arg0: (param0: string) => void): void;
    getModConfigScreenFactory(): (param0: Screen) => unknown;
    getProvidedConfigScreenFactories(): { [key: string]: (param0: Screen) => unknown };
    getProvidedUpdateCheckers(): { [key: string]: UpdateChecker };
    getUpdateChecker(): UpdateChecker;
}
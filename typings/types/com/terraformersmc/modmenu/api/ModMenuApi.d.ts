import type { ConfigScreenFactory } from '../../../../com/terraformersmc/modmenu/api/ConfigScreenFactory.d.ts'
import type { UpdateChecker } from '../../../../com/terraformersmc/modmenu/api/UpdateChecker.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export interface ModMenuApi extends Object{
    attachModpackBadges(arg0: (param0: string) => void): void;
    getModConfigScreenFactory(): (param0: Screen) => unknown;
    getProvidedConfigScreenFactories(): { [key: string]: (param0: Screen) => unknown };
    getProvidedUpdateCheckers(): { [key: string]: UpdateChecker };
    getUpdateChecker(): UpdateChecker;
}
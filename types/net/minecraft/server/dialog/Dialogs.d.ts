import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Dialog } from '../../../../net/minecraft/server/dialog/Dialog.d.ts'
export class Dialogs extends Object {
    static BIG_BUTTON_WIDTH: number;
    static CUSTOM_OPTIONS: ResourceKey<Dialog>;
    static QUICK_ACTIONS: ResourceKey<Dialog>;
    static SERVER_LINKS: ResourceKey<Dialog>;
    static bootstrap(paramcontext: BootstrapContext<Dialog>): void;
    constructor()
}
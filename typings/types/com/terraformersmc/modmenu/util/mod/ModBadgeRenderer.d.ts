import type { ModsScreen } from '../../../../../com/terraformersmc/modmenu/gui/ModsScreen.d.ts'
import type { Mod } from '../../../../../com/terraformersmc/modmenu/util/mod/Mod.d.ts'
import type { Mod$Badge } from '../../../../../com/terraformersmc/modmenu/util/mod/Mod$Badge.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class ModBadgeRenderer extends Object {
    constructor(arg0: number, arg1: number, arg2: number, arg3: Mod, arg4: ModsScreen)
    // private badgeMax: number;
    // private badgeX: number;
    // private badgeY: number;
    // private client: Minecraft;
    mod: Mod;
    // private screen: ModsScreen;
    // private startX: number;
    // private startY: number;
    draw(arg0: GuiGraphicsExtractor, arg1: number, arg2: number): void;
    drawBadge(arg0: GuiGraphicsExtractor, arg1: Mod$Badge, arg2: number, arg3: number): void;
    drawBadge(arg0: GuiGraphicsExtractor, arg1: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, arg2: number, arg3: number, arg4: number, arg5: number): void;
    getMod(): Mod;
}
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Console } from '../../../../../../../net/caffeinemc/mods/sodium/client/console/Console.d.ts'
import type { ConsoleRenderer$ActiveMessage } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/console/ConsoleRenderer$ActiveMessage.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export class ConsoleRenderer extends Object {
    constructor()
    // private activeMessages: ConsoleRenderer$ActiveMessage[];
    draw(arg0: GuiGraphicsExtractor): void;
    // private pollMessages(arg0: Console, arg1: number): void;
    // private purgeMessages(arg0: number): void;
    update(arg0: Console, arg1: number): void;
}
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { GuiMessage$Line } from '../../../../../../../../net/minecraft/client/multiplayer/chat/GuiMessage$Line.d.ts'
export class ModuleBetterChat$Copy extends ToggleableValueGroup {
    static INSTANCE: ModuleBetterChat$Copy;
    static copyMessage(parts: GuiMessage$Line[], button: number): void;
    readonly highlight: boolean;
    // private notify: boolean;
    // private /*not mapped: */ getNotify(): boolean;
    copyMessage(parts: GuiMessage$Line[], button: number): void;
    // private isAnyPressed(...keys: number[]): boolean;
}
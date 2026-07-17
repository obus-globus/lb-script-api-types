import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { AntiVoidMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidMode.d.ts'
export class AntiVoidFlagMode extends AntiVoidMode {
    static Companion: Tagged$Companion;
    static INSTANCE: AntiVoidFlagMode;
    // private fallDistance: number;
    // private /*not mapped: */ getFallDistance(): number;
    // private height: number;
    // private /*not mapped: */ getHeight(): number;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private silent: boolean;
    // private /*not mapped: */ getSilent(): boolean;
    rescue(): boolean;
}
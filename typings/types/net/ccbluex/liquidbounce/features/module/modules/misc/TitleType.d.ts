import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class TitleType extends Enum<TitleType> implements Tagged {
    static Companion: Tagged$Companion;
    static SUBTITLE: TitleType;
    static TITLE: TitleType;
    static getEntries(): TitleType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TitleType;
    static values(): TitleType[];
    private constructor(tag: string, setText: (param0: Component) => void)
    /**
     * Doesn't use {@link Gui.setTitle} and {@link Gui.setSubtitle} because
     * this will cause reset of the stayIn timer
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBetterTitle.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBetterTitle.kt:105}
     */
    readonly setText: (param0: Component) => void;
    readonly tag: string;
    name(): "TITLE" | "SUBTITLE";
}
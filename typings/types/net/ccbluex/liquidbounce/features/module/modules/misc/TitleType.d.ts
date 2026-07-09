import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class TitleType extends Enum<TitleType> implements Tagged {
    static Companion: Tagged$Companion;
    static SUBTITLE: TitleType;
    static TITLE: TitleType;
    static getEntries(): TitleType[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TitleType;
    static values(): (Object | null)[];
    private constructor(tag: string, setText: (param0: Component) => void)
    /**
     * Doesn't use {@link Gui.setTitle} and {@link Gui.setSubtitle} because
     * this will cause reset of the stayIn timer
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBetterTitle.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBetterTitle.kt:105}
     */
    readonly setText: (param0: Component) => void;
    readonly tag: string;
    name(): "TITLE" | "SUBTITLE";
}
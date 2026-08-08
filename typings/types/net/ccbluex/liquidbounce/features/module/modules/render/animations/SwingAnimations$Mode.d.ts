import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class SwingAnimations$Mode extends Enum<SwingAnimations$Mode> implements Tagged {
    static Akrien: SwingAnimations$Mode;
    static Companion: Tagged$Companion;
    static Dash: SwingAnimations$Mode;
    static Feast: SwingAnimations$Mode;
    static Hook: SwingAnimations$Mode;
    static Inject: SwingAnimations$Mode;
    static Power: SwingAnimations$Mode;
    static Slap: SwingAnimations$Mode;
    static Smooth: SwingAnimations$Mode;
    static Spin: SwingAnimations$Mode;
    static Swipe: SwingAnimations$Mode;
    static Tap: SwingAnimations$Mode;
    static getEntries(): SwingAnimations$Mode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): SwingAnimations$Mode;
    static values(): SwingAnimations$Mode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "Swipe" | "Spin" | "Hook" | "Dash" | "Tap" | "Inject" | "Slap" | "Akrien" | "Smooth" | "Power" | "Feast";
}
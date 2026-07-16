import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class FullscreenMode extends Enum<FullscreenMode> {
    static BORDERLESS: FullscreenMode;
    static EXCLUSIVE: FullscreenMode;
    static OFF: FullscreenMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FullscreenMode;
    static values(): FullscreenMode[];
    private constructor()
    name(): "OFF" | "EXCLUSIVE" | "BORDERLESS";
}
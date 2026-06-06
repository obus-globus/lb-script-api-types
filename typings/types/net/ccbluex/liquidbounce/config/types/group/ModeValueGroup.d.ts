import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Mode } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
/**
 * Allows configuring and manage modes
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.kt:32}
 */
export class ModeValueGroup<T extends Mode> extends ValueGroup {
    constructor(eventListener: EventListener, name: string, activeModeIndexCallback: (param0: T[]) => kotlin.Int, modesCallback: (param0: ModeValueGroup<T>) => T[])
    readonly activeMode: T;
    // private defaultMode: T;
    readonly eventListener: EventListener;
    modes: T[];
    getModeStrings(): string[];
    restore(): void;
    // private setAndUpdate(newMode: T): void;
    setByString(name: string): void;
    updateChildState(state: boolean): void;
}
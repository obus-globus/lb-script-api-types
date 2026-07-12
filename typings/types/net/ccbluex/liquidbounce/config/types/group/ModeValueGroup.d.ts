import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Mode } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
/**
 * Allows configuring and manage modes
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.kt:35}
 */
export class ModeValueGroup<T extends Mode> extends ValueGroup {
    constructor(eventListener: EventListener, name: string, activeModeIndexCallback: (param0: T[]) => number, modesCallback: (param0: ModeValueGroup<T>) => T[])
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
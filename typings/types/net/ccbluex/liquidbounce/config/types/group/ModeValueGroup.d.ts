import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { OptionalInclusion } from '../../../../../../net/ccbluex/liquidbounce/config/OptionalInclusion.d.ts'
import type { Mode } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
/**
 * Allows configuring and manage modes
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.kt:36}
 */
export class ModeValueGroup<T extends Mode> extends ValueGroup {
    constructor(eventListener: EventListener | null, name: string, activeModeIndexCallback: (param0: T[]) => number, modesCallback: (param0: ModeValueGroup<T>) => T[])
    readonly activeMode: T;
    // private defaultMode: T;
    readonly eventListener: EventListener | null;
    modes: T[];
    getModes(): T[];
    setModes$net_ccbluex_liquidbounce(value: T[]): void;
    getModeStrings(): string[];
    inclusionGroup(group: OptionalInclusion): ModeValueGroup<T>;
    restore(): void;
    // private setAndUpdate(newMode: T): void;
    setByString(name: string): void;
    updateChildState(state: boolean): void;
}
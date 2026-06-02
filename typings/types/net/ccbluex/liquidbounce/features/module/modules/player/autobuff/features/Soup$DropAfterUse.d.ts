import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class Soup$DropAfterUse extends ToggleableValueGroup {
    static INSTANCE: Soup$DropAfterUse;
    readonly assumeEmptyBowl: boolean;
    readonly wait: { start: number; endInclusive: number; step: number };
}
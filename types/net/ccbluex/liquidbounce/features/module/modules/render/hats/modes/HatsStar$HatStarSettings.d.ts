import type { ValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class HatsStar$HatStarSettings extends ValueGroup {
    static INSTANCE: HatsStar$HatStarSettings;
    readonly innerRadius: number;
    readonly outerRadius: number;
    readonly pointsCount: number;
    readonly sharpness: number;
    readonly spinSpeed: number;
}
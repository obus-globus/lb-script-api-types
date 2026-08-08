import type { ValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class WingsLines$WingsOptions extends ValueGroup {
    static INSTANCE: WingsLines$WingsOptions;
    readonly angles: { start: number; endInclusive: number; step: number };
    readonly fadeStartRatio: number;
    readonly linesCount: number;
    readonly wingsLength: number;
    readonly wingsWidth: number;
}
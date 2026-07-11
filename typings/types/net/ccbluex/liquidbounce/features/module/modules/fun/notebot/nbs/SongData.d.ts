import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { NbsData } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.d.ts'
import type { NbsNoteBlock } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsNoteBlock.d.ts'
export class SongData extends Object {
    constructor(name: string, nbs: NbsData, notesByTick: { [key: number]: NbsNoteBlock[] }, songTickLength: number, songTicksPerGameTick: number)
    /**
     * The original name of file.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.kt#L98 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.kt:98}
     */
    readonly name: string;
    readonly nbs: NbsData;
    readonly notesByTick: { [key: number]: NbsNoteBlock[] };
    readonly songTickLength: number;
    readonly songTicksPerGameTick: number;
    component1(): string;
    component2(): NbsData;
    component3(): { [key: number]: NbsNoteBlock[] };
    component4(): number;
    component5(): number;
    copy(name: string, nbs: NbsData, notesByTick: { [key: number]: NbsNoteBlock[] }, songTickLength: number, songTicksPerGameTick: number): SongData;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
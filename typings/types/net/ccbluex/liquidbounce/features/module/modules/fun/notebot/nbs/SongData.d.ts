import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { NbsData } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.d.ts'
import type { NbsNoteBlock } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsNoteBlock.d.ts'
export class SongData extends Object {
    constructor(name: string, nbs: NbsData, notesByTick: { [key: number]: NbsNoteBlock[] }, songTickLength: number, songTicksPerGameTick: number)
    /**
     * The original name of file.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.kt#L87 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.kt:87}
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
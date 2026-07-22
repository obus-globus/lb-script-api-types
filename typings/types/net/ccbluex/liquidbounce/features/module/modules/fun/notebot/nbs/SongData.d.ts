import type { JavaMap } from '../../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { NbsData } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.d.ts'
import type { NbsNoteBlock } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsNoteBlock.d.ts'
export class SongData extends Object {
    constructor(name: string, nbs: NbsData, notesByTick: JavaMap<number, NbsNoteBlock[]>, songTickLength: number, songTicksPerGameTick: number)
    /**
     * The original name of file.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.kt#L98 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsData.kt:98}
     */
    readonly name: string;
    readonly nbs: NbsData;
    readonly notesByTick: JavaMap<number, NbsNoteBlock[]>;
    readonly songTickLength: number;
    readonly songTicksPerGameTick: number;
    component1(): string;
    component2(): NbsData;
    component3(): JavaMap<number, NbsNoteBlock[]>;
    component4(): number;
    component5(): number;
    copy(name: string, nbs: NbsData, notesByTick: JavaMap<number, NbsNoteBlock[]>, songTickLength: number, songTicksPerGameTick: number): SongData;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
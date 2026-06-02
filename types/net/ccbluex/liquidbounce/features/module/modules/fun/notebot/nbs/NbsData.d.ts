import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { NbsHeader } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsHeader.d.ts'
import type { NbsNoteBlock } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/NbsNoteBlock.d.ts'
export class NbsData extends Object {
    constructor(header: NbsHeader, noteBlocks: NbsNoteBlock[])
    readonly header: NbsHeader;
    readonly noteBlocks: NbsNoteBlock[];
    component1(): NbsHeader;
    component2(): NbsNoteBlock[];
    copy(header: NbsHeader, noteBlocks: NbsNoteBlock[]): NbsData;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { InstrumentNote$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/notebot/nbs/InstrumentNote$Companion.d.ts'
import type { NoteBlockInstrument } from '../../../../../../../../../net/minecraft/world/level/block/state/properties/NoteBlockInstrument.d.ts'
export class InstrumentNote extends Object {
    static Companion: InstrumentNote$Companion;
    constructor(instrument: number, noteValue: number)
    readonly instrument: number;
    readonly instrumentEnum: NoteBlockInstrument;
    readonly noteValue: number;
    component1(): number;
    component2(): number;
    copy(instrument: number, noteValue: number): InstrumentNote;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
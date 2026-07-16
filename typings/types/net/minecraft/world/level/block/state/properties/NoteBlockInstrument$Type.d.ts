import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class NoteBlockInstrument$Type extends Enum<NoteBlockInstrument$Type> {
    static BASE_BLOCK: NoteBlockInstrument$Type;
    static CUSTOM: NoteBlockInstrument$Type;
    static MOB_HEAD: NoteBlockInstrument$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NoteBlockInstrument$Type;
    static values(): NoteBlockInstrument$Type[];
    private constructor()
    name(): "BASE_BLOCK" | "MOB_HEAD" | "CUSTOM";
}
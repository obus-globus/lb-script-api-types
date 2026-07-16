import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Event$ID extends Enum<Event$ID> {
    static Alias: Event$ID;
    static Comment: Event$ID;
    static DocumentEnd: Event$ID;
    static DocumentStart: Event$ID;
    static MappingEnd: Event$ID;
    static MappingStart: Event$ID;
    static Scalar: Event$ID;
    static SequenceEnd: Event$ID;
    static SequenceStart: Event$ID;
    static StreamEnd: Event$ID;
    static StreamStart: Event$ID;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Event$ID;
    static values(): Event$ID[];
    private constructor()
    name(): "Alias" | "Comment" | "DocumentEnd" | "DocumentStart" | "MappingEnd" | "MappingStart" | "Scalar" | "SequenceEnd" | "SequenceStart" | "StreamEnd" | "StreamStart";
}
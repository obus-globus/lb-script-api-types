import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class NoteBlockInstrument extends Enum<NoteBlockInstrument> {
    static Banjo: NoteBlockInstrument;
    static Bass: NoteBlockInstrument;
    static BassDrum: NoteBlockInstrument;
    static Bell: NoteBlockInstrument;
    static Bit: NoteBlockInstrument;
    static Chime: NoteBlockInstrument;
    static CowBell: NoteBlockInstrument;
    static Creeper: NoteBlockInstrument;
    static Didgeridoo: NoteBlockInstrument;
    static Dragon: NoteBlockInstrument;
    static Flute: NoteBlockInstrument;
    static Guitar: NoteBlockInstrument;
    static Harp: NoteBlockInstrument;
    static Hat: NoteBlockInstrument;
    static IronXylophone: NoteBlockInstrument;
    static Piglin: NoteBlockInstrument;
    static Pling: NoteBlockInstrument;
    static Skeleton: NoteBlockInstrument;
    static Snare: NoteBlockInstrument;
    static Trumpet: NoteBlockInstrument;
    static TrumpetExposed: NoteBlockInstrument;
    static TrumpetOxidized: NoteBlockInstrument;
    static TrumpetWeathered: NoteBlockInstrument;
    static WitherSkeleton: NoteBlockInstrument;
    static Xylophone: NoteBlockInstrument;
    static Zombie: NoteBlockInstrument;
    static getByName(paramarg0: string): NoteBlockInstrument;
    static getByName(paramarg0: string, paramarg1: NoteBlockInstrument): NoteBlockInstrument;
    static getByValue(paramarg0: number): NoteBlockInstrument;
    static getByValue(paramarg0: number, paramarg1: NoteBlockInstrument): NoteBlockInstrument;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NoteBlockInstrument;
    static values(): NoteBlockInstrument[];
    private constructor(arg2: number)
    private constructor(arg2: NoteBlockInstrument)
    readonly value: number;
    getValue(): number;
    name(): "Harp" | "BassDrum" | "Snare" | "Hat" | "Bass" | "Flute" | "Bell" | "Guitar" | "Chime" | "Xylophone" | "IronXylophone" | "CowBell" | "Didgeridoo" | "Bit" | "Banjo" | "Pling" | "Trumpet" | "TrumpetExposed" | "TrumpetWeathered" | "TrumpetOxidized" | "Zombie" | "Skeleton" | "Creeper" | "Dragon" | "WitherSkeleton" | "Piglin";
}
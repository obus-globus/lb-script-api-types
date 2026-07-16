import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class SoundCategories1_8 extends Enum<SoundCategories1_8> {
    static AMBIENT: SoundCategories1_8;
    static BLOCK: SoundCategories1_8;
    static HOSTILE: SoundCategories1_8;
    static MASTER: SoundCategories1_8;
    static MUSIC: SoundCategories1_8;
    static NEUTRAL: SoundCategories1_8;
    static PLAYER: SoundCategories1_8;
    static RECORD: SoundCategories1_8;
    static VOICE: SoundCategories1_8;
    static WEATHER: SoundCategories1_8;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SoundCategories1_8;
    static values(): SoundCategories1_8[];
    private constructor(arg2: string, arg3: number)
    readonly id: number;
    getId(): number;
    getName(): string;
    name(): "MASTER" | "MUSIC" | "RECORD" | "WEATHER" | "BLOCK" | "HOSTILE" | "NEUTRAL" | "PLAYER" | "AMBIENT" | "VOICE";
}
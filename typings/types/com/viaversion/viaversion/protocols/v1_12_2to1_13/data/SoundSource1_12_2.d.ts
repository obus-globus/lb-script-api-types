import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class SoundSource1_12_2 extends Enum<SoundSource1_12_2> {
    static AMBIENT: SoundSource1_12_2;
    static BLOCK: SoundSource1_12_2;
    static HOSTILE: SoundSource1_12_2;
    static MASTER: SoundSource1_12_2;
    static MUSIC: SoundSource1_12_2;
    static NEUTRAL: SoundSource1_12_2;
    static PLAYER: SoundSource1_12_2;
    static RECORD: SoundSource1_12_2;
    static VOICE: SoundSource1_12_2;
    static WEATHER: SoundSource1_12_2;
    static findBySource(paramarg0: string): Optional<SoundSource1_12_2>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SoundSource1_12_2;
    static values(): SoundSource1_12_2[];
    private constructor(arg2: string, arg3: number)
    readonly id: number;
    getId(): number;
    getName(): string;
    name(): "MASTER" | "MUSIC" | "RECORD" | "WEATHER" | "BLOCK" | "HOSTILE" | "NEUTRAL" | "PLAYER" | "AMBIENT" | "VOICE";
}
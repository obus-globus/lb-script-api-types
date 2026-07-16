import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SoundSource extends Enum<SoundSource> {
    static AMBIENT: SoundSource;
    static BLOCKS: SoundSource;
    static HOSTILE: SoundSource;
    static MASTER: SoundSource;
    static MUSIC: SoundSource;
    static NEUTRAL: SoundSource;
    static PLAYERS: SoundSource;
    static RECORDS: SoundSource;
    static UI: SoundSource;
    static VOICE: SoundSource;
    static WEATHER: SoundSource;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SoundSource;
    static values(): SoundSource[];
    private constructor(name: string)
    getName(): string;
    name(): "MASTER" | "MUSIC" | "RECORDS" | "WEATHER" | "BLOCKS" | "HOSTILE" | "NEUTRAL" | "PLAYERS" | "AMBIENT" | "VOICE" | "UI";
}
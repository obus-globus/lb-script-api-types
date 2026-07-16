import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class BossFlag extends Enum<BossFlag> {
    static CREATE_FOG: BossFlag;
    static DARKEN_SKY: BossFlag;
    static PLAY_BOSS_MUSIC: BossFlag;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BossFlag;
    static values(): BossFlag[];
    private constructor(arg2: number)
    readonly id: number;
    getId(): number;
    name(): "DARKEN_SKY" | "PLAY_BOSS_MUSIC" | "CREATE_FOG";
}
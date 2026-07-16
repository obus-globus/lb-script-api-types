import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class BossBarColor extends Enum<BossBarColor> {
    static BLUE: BossBarColor;
    static GREEN: BossBarColor;
    static PINK: BossBarColor;
    static PURPLE: BossBarColor;
    static REBECCA_PURPLE: BossBarColor;
    static RED: BossBarColor;
    static WHITE: BossBarColor;
    static YELLOW: BossBarColor;
    static getByName(paramarg0: string): BossBarColor;
    static getByName(paramarg0: string, paramarg1: BossBarColor): BossBarColor;
    static getByValue(paramarg0: number): BossBarColor;
    static getByValue(paramarg0: number, paramarg1: BossBarColor): BossBarColor;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BossBarColor;
    static values(): BossBarColor[];
    private constructor(arg2: number)
    private constructor(arg2: BossBarColor)
    readonly value: number;
    getValue(): number;
    name(): "PINK" | "BLUE" | "RED" | "GREEN" | "YELLOW" | "PURPLE" | "REBECCA_PURPLE" | "WHITE";
}
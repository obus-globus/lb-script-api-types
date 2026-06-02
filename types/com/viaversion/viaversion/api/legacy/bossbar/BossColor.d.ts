import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class BossColor extends Enum<BossColor> {
    static BLUE: BossColor;
    static GREEN: BossColor;
    static PINK: BossColor;
    static PURPLE: BossColor;
    static RED: BossColor;
    static WHITE: BossColor;
    static YELLOW: BossColor;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BossColor;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    readonly id: number;
    getId(): number;
    name(): "PINK" | "BLUE" | "RED" | "GREEN" | "YELLOW" | "PURPLE" | "WHITE";
}
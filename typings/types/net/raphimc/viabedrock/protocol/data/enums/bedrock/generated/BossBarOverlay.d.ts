import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class BossBarOverlay extends Enum<BossBarOverlay> {
    static NOTCHED_10: BossBarOverlay;
    static NOTCHED_12: BossBarOverlay;
    static NOTCHED_20: BossBarOverlay;
    static NOTCHED_6: BossBarOverlay;
    static PROGRESS: BossBarOverlay;
    static getByName(paramarg0: string): BossBarOverlay;
    static getByName(paramarg0: string, paramarg1: BossBarOverlay): BossBarOverlay;
    static getByValue(paramarg0: number): BossBarOverlay;
    static getByValue(paramarg0: number, paramarg1: BossBarOverlay): BossBarOverlay;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BossBarOverlay;
    static values(): BossBarOverlay[];
    private constructor(arg2: number)
    private constructor(arg2: BossBarOverlay)
    readonly value: number;
    getValue(): number;
    name(): "PROGRESS" | "NOTCHED_6" | "NOTCHED_10" | "NOTCHED_12" | "NOTCHED_20";
}
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class BossStyle extends Enum<BossStyle> {
    static SEGMENTED_10: BossStyle;
    static SEGMENTED_12: BossStyle;
    static SEGMENTED_20: BossStyle;
    static SEGMENTED_6: BossStyle;
    static SOLID: BossStyle;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BossStyle;
    static values(): BossStyle[];
    private constructor(arg2: number)
    readonly id: number;
    getId(): number;
    name(): "SOLID" | "SEGMENTED_6" | "SEGMENTED_10" | "SEGMENTED_12" | "SEGMENTED_20";
}
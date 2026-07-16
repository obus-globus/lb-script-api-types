import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class HudVisibility extends Enum<HudVisibility> {
    static Hide: HudVisibility;
    static Reset: HudVisibility;
    static getByName(paramarg0: string): HudVisibility;
    static getByName(paramarg0: string, paramarg1: HudVisibility): HudVisibility;
    static getByValue(paramarg0: number): HudVisibility;
    static getByValue(paramarg0: number, paramarg1: HudVisibility): HudVisibility;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HudVisibility;
    static values(): HudVisibility[];
    private constructor(arg2: number)
    private constructor(arg2: HudVisibility)
    readonly value: number;
    getValue(): number;
    name(): "Hide" | "Reset";
}
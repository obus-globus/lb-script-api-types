import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Tier extends Enum<Tier> implements Comparable<Tier> {
    static A: Tier;
    static B: Tier;
    static C: Tier;
    static D: Tier;
    static E: Tier;
    static F: Tier;
    static S: Tier;
    static getEntries(): Tier[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Tier;
    static values(): Tier[];
    private constructor()
    readonly score: number;
    name(): "F" | "E" | "D" | "C" | "B" | "A" | "S";
}
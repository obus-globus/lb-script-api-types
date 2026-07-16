import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Markings extends Enum<Markings> {
    static BLACK_DOTS: Markings;
    static NONE: Markings;
    static WHITE: Markings;
    static WHITE_DOTS: Markings;
    static WHITE_FIELD: Markings;
    static byId(paramid: number): Markings;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Markings;
    static values(): Markings[];
    private constructor(id: number)
    readonly id: number;
    getId(): number;
    name(): "NONE" | "WHITE" | "WHITE_FIELD" | "WHITE_DOTS" | "BLACK_DOTS";
}
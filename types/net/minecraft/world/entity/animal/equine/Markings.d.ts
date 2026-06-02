import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Markings extends Enum<Markings> {
    static BLACK_DOTS: Markings;
    static NONE: Markings;
    static WHITE: Markings;
    static WHITE_DOTS: Markings;
    static WHITE_FIELD: Markings;
    static byId(paramid: number): Markings;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Markings;
    static values(): (Object | null)[];
    private constructor(id: number)
    readonly id: number;
    getId(): number;
    name(): "NONE" | "WHITE" | "WHITE_FIELD" | "WHITE_DOTS" | "BLACK_DOTS";
}
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Generate$Type extends Enum<Generate$Type> {
    static CUSTOM: Generate$Type;
    static EXTEND: Generate$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Generate$Type;
    static values(): Generate$Type[];
    private constructor()
    constructor(): string;
    declaration(): string;
    generator(): Class<Object>;
    imports(): string;
    name(): "CUSTOM" | "EXTEND";
}
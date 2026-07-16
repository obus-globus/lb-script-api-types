import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DumperOptions$ScalarStyle extends Enum<DumperOptions$ScalarStyle> {
    static DOUBLE_QUOTED: DumperOptions$ScalarStyle;
    static FOLDED: DumperOptions$ScalarStyle;
    static JSON_SCALAR_STYLE: DumperOptions$ScalarStyle;
    static LITERAL: DumperOptions$ScalarStyle;
    static PLAIN: DumperOptions$ScalarStyle;
    static SINGLE_QUOTED: DumperOptions$ScalarStyle;
    static createStyle(paramarg0: string): DumperOptions$ScalarStyle;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DumperOptions$ScalarStyle;
    static values(): DumperOptions$ScalarStyle[];
    private constructor(arg2: string)
    // private styleChar: string;
    getChar(): string;
    toString(): string;
    name(): "DOUBLE_QUOTED" | "SINGLE_QUOTED" | "LITERAL" | "FOLDED" | "JSON_SCALAR_STYLE" | "PLAIN";
}
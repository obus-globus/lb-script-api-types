import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DumperOptions$LineBreak extends Enum<DumperOptions$LineBreak> {
    static MAC: DumperOptions$LineBreak;
    static UNIX: DumperOptions$LineBreak;
    static WIN: DumperOptions$LineBreak;
    static getPlatformLineBreak(): DumperOptions$LineBreak;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DumperOptions$LineBreak;
    static values(): DumperOptions$LineBreak[];
    private constructor(arg2: string)
    // private lineBreak: string;
    getString(): string;
    toString(): string;
    name(): "WIN" | "MAC" | "UNIX";
}
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DumperOptions$LineBreak extends Enum<DumperOptions$LineBreak> {
    static MAC: DumperOptions$LineBreak;
    static UNIX: DumperOptions$LineBreak;
    static WIN: DumperOptions$LineBreak;
    static getPlatformLineBreak(): DumperOptions$LineBreak;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DumperOptions$LineBreak;
    static values(): DumperOptions$LineBreak[];
    private constructor(arg2: string)
    // private lineBreak: string;
    getString(): string;
    toString(): string;
    name(): "WIN" | "MAC" | "UNIX";
}
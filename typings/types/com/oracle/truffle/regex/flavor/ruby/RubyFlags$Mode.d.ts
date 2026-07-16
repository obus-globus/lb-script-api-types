import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RubyFlags$Mode extends Enum<RubyFlags$Mode> {
    static Ascii: RubyFlags$Mode;
    static Default: RubyFlags$Mode;
    static Unicode: RubyFlags$Mode;
    static VALUES: RubyFlags$Mode[];
    static fromFlagChar(paramch: number): RubyFlags$Mode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RubyFlags$Mode;
    static values(): RubyFlags$Mode[];
    private constructor()
    name(): "Ascii" | "Default" | "Unicode";
}
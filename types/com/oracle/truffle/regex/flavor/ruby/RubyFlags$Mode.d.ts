import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RubyFlags$Mode extends Enum<RubyFlags$Mode> {
    static Ascii: RubyFlags$Mode;
    static Default: RubyFlags$Mode;
    static Unicode: RubyFlags$Mode;
    static VALUES: (Object | null)[];
    static fromFlagChar(paramch: number): RubyFlags$Mode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RubyFlags$Mode;
    static values(): (Object | null)[];
    private constructor()
    name(): "Ascii" | "Default" | "Unicode";
}
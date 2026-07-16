import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class UnicodeSetSpanner$TrimOption extends Enum<UnicodeSetSpanner$TrimOption> {
    static BOTH: UnicodeSetSpanner$TrimOption;
    static LEADING: UnicodeSetSpanner$TrimOption;
    static TRAILING: UnicodeSetSpanner$TrimOption;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UnicodeSetSpanner$TrimOption;
    static values(): UnicodeSetSpanner$TrimOption[];
    private constructor()
    name(): "LEADING" | "BOTH" | "TRAILING";
}
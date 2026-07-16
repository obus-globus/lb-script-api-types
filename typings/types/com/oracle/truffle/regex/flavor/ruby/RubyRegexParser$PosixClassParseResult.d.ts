import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RubyRegexParser$PosixClassParseResult extends Enum<RubyRegexParser$PosixClassParseResult> {
    static NotNestedClass: RubyRegexParser$PosixClassParseResult;
    static TryNestedClass: RubyRegexParser$PosixClassParseResult;
    static WasNestedPosixClass: RubyRegexParser$PosixClassParseResult;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RubyRegexParser$PosixClassParseResult;
    static values(): RubyRegexParser$PosixClassParseResult[];
    private constructor()
    name(): "WasNestedPosixClass" | "TryNestedClass" | "NotNestedClass";
}
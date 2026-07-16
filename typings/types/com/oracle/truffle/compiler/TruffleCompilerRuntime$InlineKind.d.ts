import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TruffleCompilerRuntime$InlineKind extends Enum<TruffleCompilerRuntime$InlineKind> {
    static DO_NOT_INLINE_DEOPTIMIZE_ON_EXCEPTION: TruffleCompilerRuntime$InlineKind;
    static DO_NOT_INLINE_NO_EXCEPTION: TruffleCompilerRuntime$InlineKind;
    static DO_NOT_INLINE_WITH_EXCEPTION: TruffleCompilerRuntime$InlineKind;
    static DO_NOT_INLINE_WITH_SPECULATIVE_EXCEPTION: TruffleCompilerRuntime$InlineKind;
    static INLINE: TruffleCompilerRuntime$InlineKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TruffleCompilerRuntime$InlineKind;
    static values(): TruffleCompilerRuntime$InlineKind[];
    private constructor(allowsInlining: boolean)
    // private allowsInlining: boolean;
    allowsInlining(): boolean;
    name(): "INLINE" | "DO_NOT_INLINE_WITH_EXCEPTION" | "DO_NOT_INLINE_NO_EXCEPTION" | "DO_NOT_INLINE_DEOPTIMIZE_ON_EXCEPTION" | "DO_NOT_INLINE_WITH_SPECULATIVE_EXCEPTION";
}
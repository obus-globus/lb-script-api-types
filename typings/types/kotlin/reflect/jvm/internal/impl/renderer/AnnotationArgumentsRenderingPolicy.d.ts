import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
export class AnnotationArgumentsRenderingPolicy extends Enum<AnnotationArgumentsRenderingPolicy> {
    static ALWAYS_PARENTHESIZED: AnnotationArgumentsRenderingPolicy;
    static NO_ARGUMENTS: AnnotationArgumentsRenderingPolicy;
    static UNLESS_EMPTY: AnnotationArgumentsRenderingPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AnnotationArgumentsRenderingPolicy;
    static values(): AnnotationArgumentsRenderingPolicy[];
    constructor(arg2: boolean, arg3: boolean, arg4: number, arg5: DefaultConstructorMarker)
    readonly includeAnnotationArguments: boolean;
    readonly includeEmptyAnnotationArguments: boolean;
    getIncludeAnnotationArguments(): boolean;
    getIncludeEmptyAnnotationArguments(): boolean;
    name(): "NO_ARGUMENTS" | "UNLESS_EMPTY" | "ALWAYS_PARENTHESIZED";
}
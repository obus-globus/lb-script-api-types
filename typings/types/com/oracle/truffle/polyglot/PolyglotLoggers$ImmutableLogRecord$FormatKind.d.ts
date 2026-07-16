import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolyglotLoggers$ImmutableLogRecord$FormatKind extends Enum<PolyglotLoggers$ImmutableLogRecord$FormatKind> {
    static DEFAULT: PolyglotLoggers$ImmutableLogRecord$FormatKind;
    static NO_LEVEL: PolyglotLoggers$ImmutableLogRecord$FormatKind;
    static RAW: PolyglotLoggers$ImmutableLogRecord$FormatKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PolyglotLoggers$ImmutableLogRecord$FormatKind;
    static values(): PolyglotLoggers$ImmutableLogRecord$FormatKind[];
    private constructor()
    name(): "RAW" | "NO_LEVEL" | "DEFAULT";
}
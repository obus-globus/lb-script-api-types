import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ConfigIncludeKind extends Enum<ConfigIncludeKind> {
    static CLASSPATH: ConfigIncludeKind;
    static FILE: ConfigIncludeKind;
    static HEURISTIC: ConfigIncludeKind;
    static URL: ConfigIncludeKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ConfigIncludeKind;
    static values(): ConfigIncludeKind[];
    private constructor()
    name(): "URL" | "FILE" | "CLASSPATH" | "HEURISTIC";
}
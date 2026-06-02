import type { Class } from '../../../java/lang/Class.d.ts'
import type { Runtime$Version } from '../../../java/lang/Runtime$Version.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SourceVersion extends Enum<SourceVersion> {
    static RELEASE_0: SourceVersion;
    static RELEASE_1: SourceVersion;
    static RELEASE_10: SourceVersion;
    static RELEASE_11: SourceVersion;
    static RELEASE_12: SourceVersion;
    static RELEASE_13: SourceVersion;
    static RELEASE_14: SourceVersion;
    static RELEASE_15: SourceVersion;
    static RELEASE_16: SourceVersion;
    static RELEASE_17: SourceVersion;
    static RELEASE_18: SourceVersion;
    static RELEASE_19: SourceVersion;
    static RELEASE_2: SourceVersion;
    static RELEASE_20: SourceVersion;
    static RELEASE_21: SourceVersion;
    static RELEASE_22: SourceVersion;
    static RELEASE_23: SourceVersion;
    static RELEASE_24: SourceVersion;
    static RELEASE_25: SourceVersion;
    static RELEASE_3: SourceVersion;
    static RELEASE_4: SourceVersion;
    static RELEASE_5: SourceVersion;
    static RELEASE_6: SourceVersion;
    static RELEASE_7: SourceVersion;
    static RELEASE_8: SourceVersion;
    static RELEASE_9: SourceVersion;
    static isIdentifier(paramarg0: CharSequence): boolean;
    static isKeyword(paramarg0: CharSequence): boolean;
    static isKeyword(paramarg0: CharSequence, paramarg1: SourceVersion): boolean;
    static isName(paramarg0: CharSequence): boolean;
    static isName(paramarg0: CharSequence, paramarg1: SourceVersion): boolean;
    static latest(): SourceVersion;
    static latestSupported(): SourceVersion;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: Runtime$Version): SourceVersion;
    static valueOf(paramarg0: string): SourceVersion;
    static values(): (Object | null)[];
    private constructor()
    runtimeVersion(): Runtime$Version;
    name(): "RELEASE_0" | "RELEASE_1" | "RELEASE_2" | "RELEASE_3" | "RELEASE_4" | "RELEASE_5" | "RELEASE_6" | "RELEASE_7" | "RELEASE_8" | "RELEASE_9" | "RELEASE_10" | "RELEASE_11" | "RELEASE_12" | "RELEASE_13" | "RELEASE_14" | "RELEASE_15" | "RELEASE_16" | "RELEASE_17" | "RELEASE_18" | "RELEASE_19" | "RELEASE_20" | "RELEASE_21" | "RELEASE_22" | "RELEASE_23" | "RELEASE_24" | "RELEASE_25";
}
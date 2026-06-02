import type { Class } from '../../../java/lang/Class.d.ts'
import type { Runtime$Version } from '../../../java/lang/Runtime$Version.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ClassFileFormatVersion extends Enum<ClassFileFormatVersion> {
    static RELEASE_0: ClassFileFormatVersion;
    static RELEASE_1: ClassFileFormatVersion;
    static RELEASE_10: ClassFileFormatVersion;
    static RELEASE_11: ClassFileFormatVersion;
    static RELEASE_12: ClassFileFormatVersion;
    static RELEASE_13: ClassFileFormatVersion;
    static RELEASE_14: ClassFileFormatVersion;
    static RELEASE_15: ClassFileFormatVersion;
    static RELEASE_16: ClassFileFormatVersion;
    static RELEASE_17: ClassFileFormatVersion;
    static RELEASE_18: ClassFileFormatVersion;
    static RELEASE_19: ClassFileFormatVersion;
    static RELEASE_2: ClassFileFormatVersion;
    static RELEASE_20: ClassFileFormatVersion;
    static RELEASE_21: ClassFileFormatVersion;
    static RELEASE_22: ClassFileFormatVersion;
    static RELEASE_23: ClassFileFormatVersion;
    static RELEASE_24: ClassFileFormatVersion;
    static RELEASE_25: ClassFileFormatVersion;
    static RELEASE_3: ClassFileFormatVersion;
    static RELEASE_4: ClassFileFormatVersion;
    static RELEASE_5: ClassFileFormatVersion;
    static RELEASE_6: ClassFileFormatVersion;
    static RELEASE_7: ClassFileFormatVersion;
    static RELEASE_8: ClassFileFormatVersion;
    static RELEASE_9: ClassFileFormatVersion;
    static fromMajor(paramarg0: number): ClassFileFormatVersion;
    static latest(): ClassFileFormatVersion;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: Runtime$Version): ClassFileFormatVersion;
    static valueOf(paramarg0: string): ClassFileFormatVersion;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private major: number;
    major(): number;
    runtimeVersion(): Runtime$Version;
    name(): "RELEASE_0" | "RELEASE_1" | "RELEASE_2" | "RELEASE_3" | "RELEASE_4" | "RELEASE_5" | "RELEASE_6" | "RELEASE_7" | "RELEASE_8" | "RELEASE_9" | "RELEASE_10" | "RELEASE_11" | "RELEASE_12" | "RELEASE_13" | "RELEASE_14" | "RELEASE_15" | "RELEASE_16" | "RELEASE_17" | "RELEASE_18" | "RELEASE_19" | "RELEASE_20" | "RELEASE_21" | "RELEASE_22" | "RELEASE_23" | "RELEASE_24" | "RELEASE_25";
}
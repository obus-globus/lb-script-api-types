import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class OpenBsdOperatingSystem$PsKeywords extends Enum<OpenBsdOperatingSystem$PsKeywords> {
    static ARGS: OpenBsdOperatingSystem$PsKeywords;
    static COMM: OpenBsdOperatingSystem$PsKeywords;
    static CPUTIME: OpenBsdOperatingSystem$PsKeywords;
    static ETIME: OpenBsdOperatingSystem$PsKeywords;
    static GID: OpenBsdOperatingSystem$PsKeywords;
    static GROUP: OpenBsdOperatingSystem$PsKeywords;
    static MAJFLT: OpenBsdOperatingSystem$PsKeywords;
    static MINFLT: OpenBsdOperatingSystem$PsKeywords;
    static NIVCSW: OpenBsdOperatingSystem$PsKeywords;
    static NVCSW: OpenBsdOperatingSystem$PsKeywords;
    static PID: OpenBsdOperatingSystem$PsKeywords;
    static PPID: OpenBsdOperatingSystem$PsKeywords;
    static PRI: OpenBsdOperatingSystem$PsKeywords;
    static RSS: OpenBsdOperatingSystem$PsKeywords;
    static STATE: OpenBsdOperatingSystem$PsKeywords;
    static UID: OpenBsdOperatingSystem$PsKeywords;
    static USER: OpenBsdOperatingSystem$PsKeywords;
    static VSZ: OpenBsdOperatingSystem$PsKeywords;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): OpenBsdOperatingSystem$PsKeywords;
    static values(): OpenBsdOperatingSystem$PsKeywords[];
    private constructor()
    name(): "STATE" | "PID" | "PPID" | "USER" | "UID" | "GROUP" | "GID" | "PRI" | "VSZ" | "RSS" | "ETIME" | "CPUTIME" | "COMM" | "MAJFLT" | "MINFLT" | "NVCSW" | "NIVCSW" | "ARGS";
}
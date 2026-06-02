import type { Class } from '../java/lang/Class.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Enum } from '../java/lang/Enum.d.ts'
export class PlatformEnum extends Enum<PlatformEnum> {
    static AIX: PlatformEnum;
    static ANDROID: PlatformEnum;
    static FREEBSD: PlatformEnum;
    static GNU: PlatformEnum;
    static KFREEBSD: PlatformEnum;
    static LINUX: PlatformEnum;
    static MACOS: PlatformEnum;
    static NETBSD: PlatformEnum;
    static OPENBSD: PlatformEnum;
    static SOLARIS: PlatformEnum;
    static UNKNOWN: PlatformEnum;
    static WINDOWS: PlatformEnum;
    static WINDOWSCE: PlatformEnum;
    static getName(paramarg0: number): string;
    static getValue(paramarg0: number): PlatformEnum;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PlatformEnum;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    readonly name: string;
    getName(): string;
    name(): "MACOS" | "LINUX" | "WINDOWS" | "SOLARIS" | "FREEBSD" | "OPENBSD" | "WINDOWSCE" | "AIX" | "ANDROID" | "GNU" | "KFREEBSD" | "NETBSD" | "UNKNOWN";
}
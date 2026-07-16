import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Platform$Architecture } from '../../../org/lwjgl/system/Platform$Architecture.d.ts'
export class Platform extends Enum<Platform> {
    static FREEBSD: Platform;
    static LINUX: Platform;
    static MACOSX: Platform;
    static WINDOWS: Platform;
    static get(): Platform;
    static getArchitecture(): Platform$Architecture;
    static mapLibraryNameBundled(paramarg0: string): string;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Platform;
    static values(): Platform[];
    constructor(arg2: string, arg3: string, arg4: Platform)
    // private nativePath: string;
    getName(): string;
    mapLibraryName(arg0: string): string;
    name(): "FREEBSD" | "LINUX" | "MACOSX" | "WINDOWS";
}
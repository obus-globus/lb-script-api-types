import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MCEFPlatform extends Enum<MCEFPlatform> {
    static LINUX_AMD64: MCEFPlatform;
    static LINUX_ARM64: MCEFPlatform;
    static MACOS_AMD64: MCEFPlatform;
    static MACOS_ARM64: MCEFPlatform;
    static WINDOWS_AMD64: MCEFPlatform;
    static WINDOWS_ARM64: MCEFPlatform;
    static getPlatform(): MCEFPlatform;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MCEFPlatform;
    static values(): (Object | null)[];
    private constructor()
    getNormalizedName(): string;
    isLinux(): boolean;
    isMacOS(): boolean;
    isSystemCompatible(): boolean;
    isWindows(): boolean;
    requiredLibraries(): string[];
    name(): "LINUX_AMD64" | "LINUX_ARM64" | "WINDOWS_AMD64" | "WINDOWS_ARM64" | "MACOS_AMD64" | "MACOS_ARM64";
}
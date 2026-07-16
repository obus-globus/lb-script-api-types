import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class BuildPlatform extends Enum<BuildPlatform> {
    static Amazon: BuildPlatform;
    static Dedicated: BuildPlatform;
    static GearVR_Deprecated: BuildPlatform;
    static Google: BuildPlatform;
    static IOS: BuildPlatform;
    static Linux: BuildPlatform;
    static Nx: BuildPlatform;
    static OSX: BuildPlatform;
    static Sony: BuildPlatform;
    static TvOS_Deprecated: BuildPlatform;
    static UWP: BuildPlatform;
    static Unknown: BuildPlatform;
    static Win32: BuildPlatform;
    static WindowsPhone_Deprecated: BuildPlatform;
    static Xbox: BuildPlatform;
    static getByName(paramarg0: string): BuildPlatform;
    static getByName(paramarg0: string, paramarg1: BuildPlatform): BuildPlatform;
    static getByValue(paramarg0: number): BuildPlatform;
    static getByValue(paramarg0: number, paramarg1: BuildPlatform): BuildPlatform;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BuildPlatform;
    static values(): BuildPlatform[];
    private constructor(arg2: number)
    private constructor(arg2: BuildPlatform)
    readonly value: number;
    getValue(): number;
    name(): "Google" | "IOS" | "OSX" | "Amazon" | "GearVR_Deprecated" | "UWP" | "Win32" | "Dedicated" | "TvOS_Deprecated" | "Sony" | "Nx" | "Xbox" | "WindowsPhone_Deprecated" | "Linux" | "Unknown";
}
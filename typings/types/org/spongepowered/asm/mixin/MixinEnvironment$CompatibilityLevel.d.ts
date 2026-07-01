import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MixinEnvironment$CompatibilityLevel extends Enum<MixinEnvironment$CompatibilityLevel> {
    static DEFAULT: MixinEnvironment$CompatibilityLevel;
    static JAVA_10: MixinEnvironment$CompatibilityLevel;
    static JAVA_11: MixinEnvironment$CompatibilityLevel;
    static JAVA_12: MixinEnvironment$CompatibilityLevel;
    static JAVA_13: MixinEnvironment$CompatibilityLevel;
    static JAVA_14: MixinEnvironment$CompatibilityLevel;
    static JAVA_15: MixinEnvironment$CompatibilityLevel;
    static JAVA_16: MixinEnvironment$CompatibilityLevel;
    static JAVA_17: MixinEnvironment$CompatibilityLevel;
    static JAVA_18: MixinEnvironment$CompatibilityLevel;
    static JAVA_19: MixinEnvironment$CompatibilityLevel;
    static JAVA_20: MixinEnvironment$CompatibilityLevel;
    static JAVA_21: MixinEnvironment$CompatibilityLevel;
    static JAVA_22: MixinEnvironment$CompatibilityLevel;
    static JAVA_23: MixinEnvironment$CompatibilityLevel;
    static JAVA_24: MixinEnvironment$CompatibilityLevel;
    static JAVA_25: MixinEnvironment$CompatibilityLevel;
    static JAVA_6: MixinEnvironment$CompatibilityLevel;
    static JAVA_7: MixinEnvironment$CompatibilityLevel;
    static JAVA_8: MixinEnvironment$CompatibilityLevel;
    static JAVA_9: MixinEnvironment$CompatibilityLevel;
    static MAX_SUPPORTED: MixinEnvironment$CompatibilityLevel;
    static forClassVersion(paramarg0: number): MixinEnvironment$CompatibilityLevel;
    static getMaxEffective(): MixinEnvironment$CompatibilityLevel;
    static requiredFor(paramarg0: number): MixinEnvironment$CompatibilityLevel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MixinEnvironment$CompatibilityLevel;
    static values(): (Object | null)[];
    constructor(arg2: number, arg3: number, arg4: number, arg5: any)
    readonly languageFeatures: number;
    // private maxCompatibleLevel: MixinEnvironment$CompatibilityLevel;
    // private ver: number;
    canElevateTo(arg0: MixinEnvironment$CompatibilityLevel): boolean;
    canSupport(arg0: MixinEnvironment$CompatibilityLevel): boolean;
    classVersion(): number;
    getClassMajorVersion(): number;
    getClassVersion(): number;
    getLanguageFeatures(): number;
    isAtLeast(arg0: MixinEnvironment$CompatibilityLevel): boolean;
    isLessThan(arg0: MixinEnvironment$CompatibilityLevel): boolean;
    isSupported(): boolean;
    supports(arg0: number): boolean;
    supportsMethodsInInterfaces(): boolean;
    name(): "JAVA_6" | "JAVA_7" | "JAVA_8" | "JAVA_9" | "JAVA_10" | "JAVA_11" | "JAVA_12" | "JAVA_13" | "JAVA_14" | "JAVA_15" | "JAVA_16" | "JAVA_17" | "JAVA_18" | "JAVA_19" | "JAVA_20" | "JAVA_21" | "JAVA_22" | "JAVA_23" | "JAVA_24" | "JAVA_25";
}
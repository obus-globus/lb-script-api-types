import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FabricStatusTree$FabricTreeWarningLevel extends Enum<FabricStatusTree$FabricTreeWarningLevel> {
    static ERROR: FabricStatusTree$FabricTreeWarningLevel;
    static INFO: FabricStatusTree$FabricTreeWarningLevel;
    static NONE: FabricStatusTree$FabricTreeWarningLevel;
    static WARN: FabricStatusTree$FabricTreeWarningLevel;
    static getHighest(paramarg0: FabricStatusTree$FabricTreeWarningLevel, paramarg1: FabricStatusTree$FabricTreeWarningLevel): FabricStatusTree$FabricTreeWarningLevel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FabricStatusTree$FabricTreeWarningLevel;
    static values(): FabricStatusTree$FabricTreeWarningLevel[];
    private constructor()
    lowerCaseName: string;
    isAtLeast(arg0: FabricStatusTree$FabricTreeWarningLevel): boolean;
    isHigherThan(arg0: FabricStatusTree$FabricTreeWarningLevel): boolean;
    name(): "ERROR" | "WARN" | "INFO" | "NONE";
}
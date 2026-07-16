import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ResourceReloaderPhaseData$VanillaStatus extends Enum<ResourceReloaderPhaseData$VanillaStatus> {
    static AFTER: ResourceReloaderPhaseData$VanillaStatus;
    static BEFORE: ResourceReloaderPhaseData$VanillaStatus;
    static NONE: ResourceReloaderPhaseData$VanillaStatus;
    static VANILLA: ResourceReloaderPhaseData$VanillaStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ResourceReloaderPhaseData$VanillaStatus;
    static values(): ResourceReloaderPhaseData$VanillaStatus[];
    private constructor()
    name(): "NONE" | "AFTER" | "BEFORE" | "VANILLA";
}
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ResourceReloaderPhaseData$VanillaStatus extends Enum<ResourceReloaderPhaseData$VanillaStatus> {
    static AFTER: ResourceReloaderPhaseData$VanillaStatus;
    static BEFORE: ResourceReloaderPhaseData$VanillaStatus;
    static NONE: ResourceReloaderPhaseData$VanillaStatus;
    static VANILLA: ResourceReloaderPhaseData$VanillaStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ResourceReloaderPhaseData$VanillaStatus;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "AFTER" | "BEFORE" | "VANILLA";
}
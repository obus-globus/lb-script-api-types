import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceReloaderPhaseData } from '../../../../../net/fabricmc/fabric/impl/resource/ResourceReloaderPhaseData.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ResourceReloaderPhaseData$AfterVanilla extends ResourceReloaderPhaseData {
    static link(paramarg0: Object | null, paramarg1: Object | null): void;
    constructor(arg0: Identifier)
    markAfter(): void;
    markBefore(): void;
}
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { WorldRenderingPhase } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPhase.d.ts'
export class GbufferPrograms extends Object {
    static beginBlockEntities(): void;
    static beginEntities(): void;
    static beginOutline(): void;
    static endBlockEntities(): void;
    static endEntities(): void;
    static endOutline(): void;
    static getCurrentPhase(): WorldRenderingPhase;
    static init(): void;
    static runFallbackEntityListener(): void;
    static runPhaseChangeNotifier(): void;
    static setOverridePhase(paramarg0: WorldRenderingPhase): void;
    constructor()
}
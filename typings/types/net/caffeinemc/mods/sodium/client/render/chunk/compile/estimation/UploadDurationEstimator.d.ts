import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ExpDecayLinear2DEstimator } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/ExpDecayLinear2DEstimator.d.ts'
export class UploadDurationEstimator extends ExpDecayLinear2DEstimator<void> {
    static INITIAL_SAMPLE_TARGET: number;
    static MIN_BATCH_SIZE: number;
    static NEW_DATA_RATIO: number;
    constructor()
    createMap<T extends unknown>(): Map<void, T>;
    estimateUploadDuration(arg0: number): number;
}
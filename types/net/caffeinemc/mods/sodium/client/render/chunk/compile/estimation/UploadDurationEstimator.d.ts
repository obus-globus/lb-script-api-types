import type { ExpDecayLinear2DEstimator } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/ExpDecayLinear2DEstimator.d.ts'
export class UploadDurationEstimator extends ExpDecayLinear2DEstimator<void> {
    static INITIAL_SAMPLE_TARGET: number;
    static MIN_BATCH_SIZE: number;
    static NEW_DATA_RATIO: number;
    constructor()
    createMap(): Map<void, T>;
    estimateUploadDuration(arg0: number): number;
}
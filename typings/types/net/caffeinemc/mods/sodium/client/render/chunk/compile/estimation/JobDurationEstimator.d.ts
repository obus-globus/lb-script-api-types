import type { JavaMap } from '../../../../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ExpDecayLinear2DEstimator } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/ExpDecayLinear2DEstimator.d.ts'
export class JobDurationEstimator extends ExpDecayLinear2DEstimator<Class<Object>> {
    static INITIAL_SAMPLE_TARGET: number;
    static NEW_DATA_RATIO: number;
    constructor()
    createMap<T extends unknown>(): JavaMap<Class<Object>, T>;
    estimateJobDuration(arg0: Class<Object>, arg1: number): number;
}
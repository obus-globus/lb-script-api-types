import type { Engine } from '../../../ai/djl/engine/Engine.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface EngineProvider extends Object{
    getEngine(): Engine;
    getEngineName(): string;
    getEngineRank(): number;
}
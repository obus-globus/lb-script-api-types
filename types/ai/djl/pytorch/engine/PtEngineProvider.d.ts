import type { Engine } from '../../../../ai/djl/engine/Engine.d.ts'
import type { EngineProvider } from '../../../../ai/djl/engine/EngineProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PtEngineProvider extends Object implements EngineProvider {
    constructor()
    getEngine(): Engine;
    getEngineName(): string;
    getEngineRank(): number;
}
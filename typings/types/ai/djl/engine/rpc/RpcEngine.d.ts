import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { Model } from '../../../../ai/djl/Model.d.ts'
import type { Engine } from '../../../../ai/djl/engine/Engine.d.ts'
import type { EngineProvider } from '../../../../ai/djl/engine/EngineProvider.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
export class RpcEngine extends Engine {
    static ENGINE_NAME: string;
    static debugEnvironment(): void;
    static getAllEngines(): string[];
    static getDefaultEngineName(): string;
    static getDjlVersion(): string;
    static getEngine(paramarg0: string): Engine;
    static getInstance(): Engine;
    static hasEngine(paramarg0: string): boolean;
    static registerEngine(paramarg0: EngineProvider): void;
    constructor()
    readonly alternativeEngine: Engine;
    // private initialized: boolean;
    getAlternativeEngine(): Engine;
    getEngineName(): string;
    getRank(): number;
    getVersion(): string;
    hasCapability(arg0: string): boolean;
    newBaseManager(): NDManager;
    newBaseManager(arg0: Device): NDManager;
    newModel(arg0: string, arg1: Device): Model;
}
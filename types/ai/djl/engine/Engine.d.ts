import type { Device } from '../../../ai/djl/Device.d.ts'
import type { Model } from '../../../ai/djl/Model.d.ts'
import type { EngineProvider } from '../../../ai/djl/engine/EngineProvider.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { SymbolBlock } from '../../../ai/djl/nn/SymbolBlock.d.ts'
import type { GradientCollector } from '../../../ai/djl/training/GradientCollector.d.ts'
import type { ParameterServer } from '../../../ai/djl/training/ParameterServer.d.ts'
import type { Optimizer } from '../../../ai/djl/training/optimizer/Optimizer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Engine extends Object {
    static debugEnvironment(): void;
    static getAllEngines(): string[];
    static getDefaultEngineName(): string;
    static getDjlVersion(): string;
    static getEngine(paramarg0: string): Engine;
    static getInstance(): Engine;
    static hasEngine(paramarg0: string): boolean;
    static registerEngine(paramarg0: EngineProvider): void;
    constructor()
    // private defaultDevice: Device;
    readonly seed: number;
    defaultDevice(): Device;
    getAlternativeEngine(): Engine;
    getDevices(): Device[];
    getDevices(arg0: number): Device[];
    getEngineName(): string;
    getGpuCount(): number;
    getRank(): number;
    getSeed(): number;
    getVersion(): string;
    hasCapability(arg0: string): boolean;
    newBaseManager(): NDManager;
    newBaseManager(arg0: Device): NDManager;
    newGradientCollector(): GradientCollector;
    newModel(arg0: string, arg1: Device): Model;
    newParameterServer(arg0: Optimizer): ParameterServer;
    newSymbolBlock(arg0: NDManager): SymbolBlock;
    setRandomSeed(arg0: number): void;
    toString(): string;
}
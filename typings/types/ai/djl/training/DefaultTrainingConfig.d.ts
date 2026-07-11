import type { Device } from '../../../ai/djl/Device.d.ts'
import type { Parameter } from '../../../ai/djl/nn/Parameter.d.ts'
import type { Parameter$Type } from '../../../ai/djl/nn/Parameter$Type.d.ts'
import type { TrainingConfig } from '../../../ai/djl/training/TrainingConfig.d.ts'
import type { Evaluator } from '../../../ai/djl/training/evaluator/Evaluator.d.ts'
import type { Initializer } from '../../../ai/djl/training/initializer/Initializer.d.ts'
import type { TrainingListener } from '../../../ai/djl/training/listener/TrainingListener.d.ts'
import type { Loss } from '../../../ai/djl/training/loss/Loss.d.ts'
import type { Optimizer } from '../../../ai/djl/training/optimizer/Optimizer.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { ExecutorService } from '../../../java/util/concurrent/ExecutorService.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultTrainingConfig extends Object implements TrainingConfig {
    constructor(arg0: Loss)
    readonly devices: Device[];
    readonly evaluators: Evaluator[];
    readonly executorService: ExecutorService;
    readonly initializers: Pair<Initializer, (param0: Parameter) => boolean>[];
    // private listeners: TrainingListener[];
    // private loss: Loss;
    readonly optimizer: Optimizer;
    addEvaluator(arg0: Evaluator): DefaultTrainingConfig;
    addEvaluators<T extends Evaluator>(arg0: T[]): DefaultTrainingConfig;
    addTrainingListeners(...arg0: TrainingListener[]): DefaultTrainingConfig;
    getDevices(): Device[];
    getEvaluators(): Evaluator[];
    getExecutorService(): ExecutorService;
    getInitializers(): Pair<Initializer, (param0: Parameter) => boolean>[];
    getLossFunction(): Loss;
    getOptimizer(): Optimizer;
    getTrainingListeners(): TrainingListener[];
    optDevices(arg0: Device[]): DefaultTrainingConfig;
    optExecutorService(): DefaultTrainingConfig;
    optExecutorService(arg0: ExecutorService): DefaultTrainingConfig;
    optInitializer(arg0: Initializer, arg1: Parameter$Type): DefaultTrainingConfig;
    optInitializer(arg0: Initializer, arg1: (param0: Parameter) => boolean): DefaultTrainingConfig;
    optInitializer(arg0: Initializer, arg1: string): DefaultTrainingConfig;
    optOptimizer(arg0: Optimizer): DefaultTrainingConfig;
}
import type { Device } from '../../../ai/djl/Device.d.ts'
import type { Evaluator } from '../../../ai/djl/training/evaluator/Evaluator.d.ts'
import type { TrainingListener } from '../../../ai/djl/training/listener/TrainingListener.d.ts'
import type { Loss } from '../../../ai/djl/training/loss/Loss.d.ts'
import type { Optimizer } from '../../../ai/djl/training/optimizer/Optimizer.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { ExecutorService } from '../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TrainingConfig extends Object{
    getDevices(): Device[];
    getEvaluators(): Evaluator[];
    getExecutorService(): ExecutorService;
    getInitializers(): Pair<K, V>[];
    getLossFunction(): Loss;
    getOptimizer(): Optimizer;
    getTrainingListeners(): TrainingListener[];
}
import type { Device } from '../../../ai/djl/Device.d.ts'
import type { Model } from '../../../ai/djl/Model.d.ts'
import type { Metrics } from '../../../ai/djl/metric/Metrics.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { Shape } from '../../../ai/djl/ndarray/types/Shape.d.ts'
import type { GradientCollector } from '../../../ai/djl/training/GradientCollector.d.ts'
import type { ParameterStore } from '../../../ai/djl/training/ParameterStore.d.ts'
import type { TrainingConfig } from '../../../ai/djl/training/TrainingConfig.d.ts'
import type { TrainingResult } from '../../../ai/djl/training/TrainingResult.d.ts'
import type { Batch } from '../../../ai/djl/training/dataset/Batch.d.ts'
import type { Dataset } from '../../../ai/djl/training/dataset/Dataset.d.ts'
import type { Evaluator } from '../../../ai/djl/training/evaluator/Evaluator.d.ts'
import type { TrainingListener } from '../../../ai/djl/training/listener/TrainingListener.d.ts'
import type { Loss } from '../../../ai/djl/training/loss/Loss.d.ts'
import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { ExecutorService } from '../../../java/util/concurrent/ExecutorService.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Trainer extends Object implements AutoCloseable {
    constructor(arg0: Model, arg1: TrainingConfig)
    readonly devices: Device[];
    readonly evaluators: Evaluator[];
    readonly executorService: ExecutorService;
    // private gradientsChecked: boolean;
    // private listeners: TrainingListener[];
    readonly loss: Loss;
    readonly manager: NDManager;
    readonly metrics: Metrics;
    readonly model: Model;
    // private parameterStore: ParameterStore;
    addMetric(arg0: string, arg1: number): void;
    // private checkGradients(): void;
    close(): void;
    evaluate(arg0: (Object | null)[]): (Object | null)[];
    finalize(): void;
    forward(arg0: (Object | null)[]): (Object | null)[];
    forward(arg0: (Object | null)[], arg1: (Object | null)[]): (Object | null)[];
    getDevices(): Device[];
    getEvaluators(): Evaluator[];
    getExecutorService(): Optional<ExecutorService>;
    getLoss(): Loss;
    getManager(): NDManager;
    getMetrics(): Metrics;
    getModel(): Model;
    getTrainingResult(): TrainingResult;
    initialize(arg0: Shape[]): void;
    iterateDataset(arg0: Dataset): Batch[];
    newGradientCollector(): GradientCollector;
    notifyListeners(arg0: (param0: TrainingListener) => void): void;
    setMetrics(arg0: Metrics): void;
    step(): void;
}
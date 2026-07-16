import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProfileResults } from '../../../../../../net/minecraft/util/profiling/ProfileResults.d.ts'
import type { MetricCategory } from '../../../../../../net/minecraft/util/profiling/metrics/MetricCategory.d.ts'
import type { MetricSampler } from '../../../../../../net/minecraft/util/profiling/metrics/MetricSampler.d.ts'
import type { RecordedDeviation } from '../../../../../../net/minecraft/util/profiling/metrics/storage/RecordedDeviation.d.ts'
export class MetricsPersister extends Object {
    static DEVIATIONS_DIR_NAME: string;
    static METRICS_DIR_NAME: string;
    static PROFILING_RESULTS_DIR: Path;
    static PROFILING_RESULT_FILENAME: string;
    constructor(rootFolderName: string)
    // private rootFolderName: string;
    // private saveCategory(category: MetricCategory, samplers: MetricSampler[], dir: Path): void;
    // private saveDeviations(deviationsBySampler: Map<MetricSampler, RecordedDeviation[]>, directory: Path): void;
    // private saveMetrics(samplers: MetricSampler[], dir: Path): void;
    // private saveProfilingTaskExecutionResult(results: ProfileResults, directory: Path): void;
    saveReports(samplers: MetricSampler[], deviationsBySampler: Map<MetricSampler, RecordedDeviation[]>, profilerResults: ProfileResults): Path;
}
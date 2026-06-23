import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { NNTrainedModelBuilder } from '../../../../org/apache/tika/detect/NNTrainedModelBuilder.d.ts'
import type { TrainedModelDetector } from '../../../../org/apache/tika/detect/TrainedModelDetector.d.ts'
export class NNExampleModelDetector extends TrainedModelDetector {
    constructor()
    constructor(arg0: File)
    constructor(arg0: Path[])
    loadDefaultModels(arg0: File): void;
    loadDefaultModels(arg0: InputStream): void;
    loadDefaultModels(arg0: ClassLoader): void;
    loadDefaultModels(arg0: Path[]): void;
    // private readDescription(arg0: NNTrainedModelBuilder, arg1: string): void;
    // private readNNParams(arg0: NNTrainedModelBuilder, arg1: string): void;
}
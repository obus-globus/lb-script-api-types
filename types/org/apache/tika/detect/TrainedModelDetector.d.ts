import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { TrainedModel } from '../../../../org/apache/tika/detect/TrainedModel.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
export abstract class TrainedModelDetector extends Object implements Detector {
    constructor()
    // private MODEL_MAP: Map<MediaType, TrainedModel>;
    detect(arg0: InputStream, arg1: Metadata): MediaType;
    getMinLength(): number;
    loadDefaultModels(arg0: File): void;
    loadDefaultModels(arg0: InputStream): void;
    loadDefaultModels(arg0: ClassLoader): void;
    loadDefaultModels(arg0: Path[]): void;
    readByteFrequencies(arg0: InputStream): number[];
    registerModels(arg0: MediaType, arg1: TrainedModel): void;
    // private writeHisto(arg0: number[]): void;
}
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Detector } from '../../../../org/apache/tika/detect/Detector.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { MediaTypeRegistry } from '../../../../org/apache/tika/mime/MediaTypeRegistry.d.ts'
import type { MimeType } from '../../../../org/apache/tika/mime/MimeType.d.ts'
import type { MimeTypes } from '../../../../org/apache/tika/mime/MimeTypes.d.ts'
import type { ProbabilisticMimeDetectionSelector$Builder } from '../../../../org/apache/tika/mime/ProbabilisticMimeDetectionSelector$Builder.d.ts'
export class ProbabilisticMimeDetectionSelector extends Object implements Detector {
    constructor()
    constructor(arg0: MimeTypes)
    constructor(arg0: MimeTypes, arg1: ProbabilisticMimeDetectionSelector$Builder)
    constructor(arg0: ProbabilisticMimeDetectionSelector$Builder)
    // private changeRate: number;
    // private extension_neg: number;
    // private extension_trust: number;
    // private magic_neg: number;
    // private magic_trust: number;
    // private meta_neg: number;
    // private meta_trust: number;
    // private mimeTypes: MimeTypes;
    // private priorExtensionFileType: number;
    // private priorMagicFileType: number;
    // private priorMetaFileType: number;
    // private rootMediaType: MediaType;
    // private threshold: number;
    // private applyProbilities(arg0: MimeType[], arg1: MimeType, arg2: MimeType): MediaType;
    detect(arg0: InputStream, arg1: Metadata): MediaType;
    getMediaTypeRegistry(): MediaTypeRegistry;
    // private initializeDefaultProbabilityParameters(): void;
}
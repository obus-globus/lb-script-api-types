import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Initializable } from '../../../../org/apache/tika/config/Initializable.d.ts'
import type { InitializableProblemHandler } from '../../../../org/apache/tika/config/InitializableProblemHandler.d.ts'
import type { Param } from '../../../../org/apache/tika/config/Param.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { RenderRequest } from '../../../../org/apache/tika/renderer/RenderRequest.d.ts'
import type { RenderResults } from '../../../../org/apache/tika/renderer/RenderResults.d.ts'
import type { Renderer } from '../../../../org/apache/tika/renderer/Renderer.d.ts'
export class CompositeRenderer extends Object implements Initializable, Renderer {
    constructor(arg0: Renderer[])
    constructor(arg0: ServiceLoader)
    // private rendererMap: JavaMap<MediaType, Renderer>;
    checkInitialization(arg0: InitializableProblemHandler): void;
    getLeafRenderer(arg0: MediaType): Renderer;
    getSupportedTypes(arg0: ParseContext): MediaType[];
    initialize(arg0: JavaMap<string, Param<Object>>): void;
    render(arg0: InputStream, arg1: Metadata, arg2: ParseContext, ...arg3: RenderRequest[]): RenderResults;
}
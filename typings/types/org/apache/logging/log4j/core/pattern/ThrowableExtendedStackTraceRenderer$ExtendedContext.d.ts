import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { ClassResourceInfo } from '../../../../../../org/apache/logging/log4j/core/pattern/ClassResourceInfo.d.ts'
import type { ThrowableStackTraceRenderer$Context } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableStackTraceRenderer$Context.d.ts'
import type { ThrowableStackTraceRenderer$Context$Metadata } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableStackTraceRenderer$Context$Metadata.d.ts'
export class ThrowableExtendedStackTraceRenderer$ExtendedContext extends ThrowableStackTraceRenderer$Context {
    private constructor(ignoredStackTraceElementCount: number, metadataByThrowable: JavaMap<Throwable, ThrowableStackTraceRenderer$Context$Metadata>, classResourceInfoByName: JavaMap<string, ClassResourceInfo>)
    // private classResourceInfoByName: JavaMap<string, ClassResourceInfo>;
}
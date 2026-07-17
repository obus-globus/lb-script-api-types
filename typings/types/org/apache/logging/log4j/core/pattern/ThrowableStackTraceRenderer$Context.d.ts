import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { ThrowableStackTraceRenderer$Context$Metadata } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableStackTraceRenderer$Context$Metadata.d.ts'
export class ThrowableStackTraceRenderer$Context extends Object {
    constructor(ignoredStackTraceElementCount: number, metadataByThrowable: JavaMap<Throwable, ThrowableStackTraceRenderer$Context$Metadata>)
    // private ignoredStackTraceElementCount: number;
    // private lineCount: number;
    // private metadataByThrowable: JavaMap<Throwable, ThrowableStackTraceRenderer$Context$Metadata>;
}
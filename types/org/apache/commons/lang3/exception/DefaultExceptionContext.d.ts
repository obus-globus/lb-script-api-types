import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExceptionContext } from '../../../../../org/apache/commons/lang3/exception/ExceptionContext.d.ts'
import type { Pair } from '../../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export class DefaultExceptionContext extends Object implements Serializable, ExceptionContext {
    constructor()
    // private contextValues: Pair<string, Object>[];
    addContextValue(arg0: string, arg1: Object): DefaultExceptionContext;
    getContextEntries(): Pair<string, Object>[];
    getContextLabels(): string[];
    getContextValues(arg0: string): Object[];
    getFirstContextValue(arg0: string): Object;
    getFormattedExceptionMessage(arg0: string): string;
    setContextValue(arg0: string, arg1: Object): DefaultExceptionContext;
    // private stream(): Stream<Pair<string, Object>>;
}
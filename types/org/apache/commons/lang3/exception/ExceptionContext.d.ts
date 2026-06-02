import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export interface ExceptionContext extends Object{
    addContextValue(arg0: string, arg1: Object): ExceptionContext;
    getContextEntries(): Pair<string, Object>[];
    getContextLabels(): string[];
    getContextValues(arg0: string): Object[];
    getFirstContextValue(arg0: string): Object;
    getFormattedExceptionMessage(arg0: string): string;
    setContextValue(arg0: string, arg1: Object): ExceptionContext;
}
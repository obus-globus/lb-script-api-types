import type { Marker } from '../../../org/slf4j/Marker.d.ts'
import type { AbstractLogger } from '../../../org/slf4j/helpers/AbstractLogger.d.ts'
export abstract class LegacyAbstractLogger extends AbstractLogger {
    static ROOT_LOGGER_NAME: string;
    constructor()
    isDebugEnabled(arg0: Marker): boolean;
    isErrorEnabled(arg0: Marker): boolean;
    isInfoEnabled(arg0: Marker): boolean;
    isTraceEnabled(arg0: Marker): boolean;
    isWarnEnabled(arg0: Marker): boolean;
}
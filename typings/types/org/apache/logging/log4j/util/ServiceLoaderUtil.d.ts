import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
export class ServiceLoaderUtil extends Object {
    static safeStream(paramserviceType: Class<Object>, paramserviceLoader: (Object | null)[], paramlogger: Logger): Stream<Object>;
    private constructor()
}
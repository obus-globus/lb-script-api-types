import type { ExecutorType$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { HttpClient } from '../../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { RequestExecutor } from '../../../../../net/lenni0451/commons/httpclient/executor/RequestExecutor.d.ts'
export class ExecutorType extends Enum<ExecutorType> {
    static AUTO: ExecutorType;
    static HTTP_CLIENT: ExecutorType;
    static REACTOR_NETTY: ExecutorType;
    static URL_CONNECTION: ExecutorType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ExecutorType;
    static values(): (Object | null)[];
    private constructor()
    constructor(arg2: ExecutorType$1)
    readonly available: boolean;
    init(): void;
    initExecutor(arg0: HttpClient): RequestExecutor;
    isAvailable(): boolean;
    makeExecutor(arg0: HttpClient): RequestExecutor;
    name(): "AUTO" | "URL_CONNECTION" | "REACTOR_NETTY" | "HTTP_CLIENT";
}
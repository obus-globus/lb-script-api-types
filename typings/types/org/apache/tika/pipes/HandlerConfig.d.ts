import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HandlerConfig$PARSE_MODE } from '../../../../org/apache/tika/pipes/HandlerConfig$PARSE_MODE.d.ts'
import type { BasicContentHandlerFactory$HANDLER_TYPE } from '../../../../org/apache/tika/sax/BasicContentHandlerFactory$HANDLER_TYPE.d.ts'
export class HandlerConfig extends Object implements Serializable {
    static DEFAULT_HANDLER_CONFIG: HandlerConfig;
    constructor()
    constructor(arg0: BasicContentHandlerFactory$HANDLER_TYPE, arg1: HandlerConfig$PARSE_MODE, arg2: number, arg3: number, arg4: boolean)
    maxEmbeddedResources: number;
    parseMode: HandlerConfig$PARSE_MODE;
    throwOnWriteLimitReached: boolean;
    readonly type: BasicContentHandlerFactory$HANDLER_TYPE;
    writeLimit: number;
    equals(arg0: Object | null): boolean;
    getMaxEmbeddedResources(): number;
    getParseMode(): HandlerConfig$PARSE_MODE;
    getType(): BasicContentHandlerFactory$HANDLER_TYPE;
    getWriteLimit(): number;
    hashCode(): number;
    isThrowOnWriteLimitReached(): boolean;
    setMaxEmbeddedResources(arg0: number): void;
    setParseMode(arg0: string): void;
    setParseMode(arg0: HandlerConfig$PARSE_MODE): void;
    setThrowOnWriteLimitReached(arg0: boolean): void;
    setType(arg0: string): void;
    setType(arg0: BasicContentHandlerFactory$HANDLER_TYPE): void;
    setWriteLimit(arg0: number): void;
    toString(): string;
}
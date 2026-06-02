import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AsyncWaitStrategyFactory } from '../../../../../../org/apache/logging/log4j/core/async/AsyncWaitStrategyFactory.d.ts'
export class AsyncWaitStrategyFactoryConfig extends Object {
    static newBuilder(): Object | null;
    constructor(factoryClassName: string)
    // private factoryClassName: string;
    createWaitStrategyFactory(): AsyncWaitStrategyFactory;
}
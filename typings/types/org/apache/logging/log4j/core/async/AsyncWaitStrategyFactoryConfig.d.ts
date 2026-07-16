import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AsyncWaitStrategyFactory } from '../../../../../../org/apache/logging/log4j/core/async/AsyncWaitStrategyFactory.d.ts'
import type { AsyncWaitStrategyFactoryConfig$Builder } from '../../../../../../org/apache/logging/log4j/core/async/AsyncWaitStrategyFactoryConfig$Builder.d.ts'
export class AsyncWaitStrategyFactoryConfig extends Object {
    static newBuilder<B extends AsyncWaitStrategyFactoryConfig$Builder<B>>(): B;
    constructor(factoryClassName: string)
    // private factoryClassName: string;
    createWaitStrategyFactory(): AsyncWaitStrategyFactory;
}
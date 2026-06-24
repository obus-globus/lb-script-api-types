import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AsyncWaitStrategyFactoryConfig } from '../../../../../../org/apache/logging/log4j/core/async/AsyncWaitStrategyFactoryConfig.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class AsyncWaitStrategyFactoryConfig$Builder<B extends AsyncWaitStrategyFactoryConfig$Builder<B>> extends Object implements Builder<AsyncWaitStrategyFactoryConfig> {
    constructor()
    readonly factoryClassName: string;
    asBuilder(): B;
    build(): AsyncWaitStrategyFactoryConfig;
    getErrorPrefix(): string;
    getFactoryClassName(): string;
    isValid(): boolean;
    setFactoryClassName(className: string): B;
    withFactoryClassName(className: string): B;
}
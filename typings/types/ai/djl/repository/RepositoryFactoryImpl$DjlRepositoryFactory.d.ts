import type { RepositoryFactoryImpl$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Repository } from '../../../ai/djl/repository/Repository.d.ts'
import type { RepositoryFactory } from '../../../ai/djl/repository/RepositoryFactory.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RepositoryFactoryImpl$DjlRepositoryFactory extends Object implements RepositoryFactory {
    private constructor()
    constructor(arg0: RepositoryFactoryImpl$1)
    getSupportedScheme(): string[];
    newInstance(arg0: string, arg1: URI): Repository;
}
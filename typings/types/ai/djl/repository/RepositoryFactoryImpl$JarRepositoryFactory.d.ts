import type { Repository } from '../../../ai/djl/repository/Repository.d.ts'
import type { RepositoryFactory } from '../../../ai/djl/repository/RepositoryFactory.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RepositoryFactoryImpl$JarRepositoryFactory extends Object implements RepositoryFactory {
    constructor(arg0: any)
    getSupportedScheme(): string[];
    newInstance(arg0: string, arg1: URI): Repository;
}
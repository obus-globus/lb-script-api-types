import type { Repository } from '../../../ai/djl/repository/Repository.d.ts'
import type { RepositoryFactory } from '../../../ai/djl/repository/RepositoryFactory.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RepositoryFactoryImpl$LocalRepositoryFactory extends Object implements RepositoryFactory {
    constructor(arg0: any)
    getSupportedScheme(): string[];
    // private isLocalRepository(arg0: Path, arg1: Path): boolean;
    newInstance(arg0: string, arg1: URI): Repository;
}
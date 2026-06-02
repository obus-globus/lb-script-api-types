import type { Repository } from '../../../ai/djl/repository/Repository.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RepositoryFactory extends Object{
    getSupportedScheme(): string[];
    newInstance(arg0: string, arg1: URI): Repository;
}
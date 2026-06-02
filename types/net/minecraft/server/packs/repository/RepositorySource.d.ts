import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pack } from '../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
export interface RepositorySource extends Object{
    loadPacks(result: (param0: Pack) => void): void;
}
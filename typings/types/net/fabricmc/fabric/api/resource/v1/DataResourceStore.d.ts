import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DataResourceStore$Key } from '../../../../../../net/fabricmc/fabric/api/resource/v1/DataResourceStore$Key.d.ts'
export interface DataResourceStore extends Object{
    getOrThrow<T extends Object | number | string | boolean>(arg0: DataResourceStore$Key<T>): T;
}
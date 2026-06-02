import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DataResourceStore } from '../../../../../../net/fabricmc/fabric/api/resource/v1/DataResourceStore.d.ts'
import type { DataResourceStore$Key } from '../../../../../../net/fabricmc/fabric/api/resource/v1/DataResourceStore$Key.d.ts'
export interface DataResourceStore$Mutable extends Object, DataResourceStore{
    getOrThrow<T extends Object | number | string | boolean>(arg0: DataResourceStore$Key<T>): T;
    put<T extends Object | number | string | boolean>(arg0: DataResourceStore$Key<T>, arg1: T): void;
}
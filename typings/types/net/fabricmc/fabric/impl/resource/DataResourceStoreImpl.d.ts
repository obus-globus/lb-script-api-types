import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataResourceStore$Key } from '../../../../../net/fabricmc/fabric/api/resource/v1/DataResourceStore$Key.d.ts'
import type { DataResourceStore$Mutable } from '../../../../../net/fabricmc/fabric/api/resource/v1/DataResourceStore$Mutable.d.ts'
export class DataResourceStoreImpl extends Object implements DataResourceStore$Mutable {
    constructor()
    // private store: Map<DataResourceStore$Key<Object>, Object>;
    getOrThrow<T extends unknown>(arg0: DataResourceStore$Key<T>): T;
    put<T extends unknown>(arg0: DataResourceStore$Key<T>, arg1: T): void;
}
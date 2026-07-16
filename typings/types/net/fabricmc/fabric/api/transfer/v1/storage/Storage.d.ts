import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StorageView } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
export class Storage<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static asClass<T extends unknown>(): Class<StorageView<T>[]>;
    static empty<T extends unknown>(): StorageView<T>[];
}
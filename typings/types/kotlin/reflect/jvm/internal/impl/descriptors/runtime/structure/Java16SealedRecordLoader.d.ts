import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Java16SealedRecordLoader$Cache } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/Java16SealedRecordLoader$Cache.d.ts'
export class Java16SealedRecordLoader extends Object {
    static INSTANCE: Java16SealedRecordLoader;
    private constructor()
    // private buildCache(): Java16SealedRecordLoader$Cache;
    // private initCache(): Java16SealedRecordLoader$Cache;
    loadGetPermittedSubclasses(arg0: Class<Object>): Class<Object>[];
    loadGetRecordComponents(arg0: Class<Object>): Object[];
    loadIsRecord(arg0: Class<Object>): boolean;
    loadIsSealed(arg0: Class<Object>): boolean;
}
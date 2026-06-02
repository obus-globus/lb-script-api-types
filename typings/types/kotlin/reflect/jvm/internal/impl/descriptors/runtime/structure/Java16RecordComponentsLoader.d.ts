import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Java16RecordComponentsLoader$Cache } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/Java16RecordComponentsLoader$Cache.d.ts'
export class Java16RecordComponentsLoader extends Object {
    static INSTANCE: Java16RecordComponentsLoader;
    private constructor()
    // private buildCache(arg0: Object): Java16RecordComponentsLoader$Cache;
    // private initCache(arg0: Object): Java16RecordComponentsLoader$Cache;
    loadGetAccessor(arg0: Object): Method;
    loadGetType(arg0: Object): Class<Object>;
}
import type { Member } from '../../../../../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Java8ParameterNamesLoader$Cache } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/Java8ParameterNamesLoader$Cache.d.ts'
export class Java8ParameterNamesLoader extends Object {
    static INSTANCE: Java8ParameterNamesLoader;
    private constructor()
    // private buildCache(arg0: Member): Java8ParameterNamesLoader$Cache;
    loadParameterNames(arg0: Member): string[];
}
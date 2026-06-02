import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { KCallable } from '../../../../kotlin/reflect/KCallable.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export interface ReflectKCallable<R extends Object | number | string | boolean> extends Object, KCallable<R>{
    readonly caller: Caller<Object>;
    readonly container: KDeclarationContainerImpl;
    readonly defaultCaller: Caller<Object> | null;
    readonly rawBoundReceiver: Object | null;
    readonly receiverParameters: KParameter[];
    callDefaultMethod(args: Map<KParameter, Object | null>, continuationArgument: Continuation<Object> | null): R;
}
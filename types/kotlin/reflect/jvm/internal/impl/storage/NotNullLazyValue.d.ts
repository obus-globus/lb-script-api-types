import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../../kotlin/jvm/functions/Function0.d.ts'
export interface NotNullLazyValue<T extends Object | number | string | boolean> extends Object, Function0<T>{
    isComputed(): boolean;
}
import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface EventSerializer$IOFunction<I extends Object | number | string | boolean, O extends Object | number | string | boolean> extends Object{
    apply(arg0: SNbt<any>, arg1: I): O;
}
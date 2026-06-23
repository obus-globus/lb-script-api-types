import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface EventSerializer$IOFunction<I extends unknown, O extends unknown> extends Object{
    apply(arg0: SNbt<any>, arg1: I): O;
}
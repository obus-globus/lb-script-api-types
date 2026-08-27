import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Dns$Call } from '../../../okhttp3/Dns$Call.d.ts'
import type { Dns$Callback } from '../../../okhttp3/Dns$Callback.d.ts'
export class _StateMachineDnsCallKt extends Object {
    static onFailure(self: Dns$Callback, call: Dns$Call, exceptions: IOException[]): void;
}
import type { Object } from '../java/lang/Object.d.ts'
import type { Dns$Callback } from '../okhttp3/Dns$Callback.d.ts'
import type { Dns$Request } from '../okhttp3/Dns$Request.d.ts'
export interface Dns$Call extends Object{
    readonly request: Dns$Request;
    cancel(): void;
    enqueue(callback: Dns$Callback): void;
    isCanceled(): boolean;
}
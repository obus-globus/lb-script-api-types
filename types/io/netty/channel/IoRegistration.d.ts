import type { IoOps } from '../../../io/netty/channel/IoOps.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface IoRegistration extends Object{
    attachment<T extends Object | number | string | boolean>(): T;
    cancel(): boolean;
    isValid(): boolean;
    submit(arg0: IoOps): number;
}
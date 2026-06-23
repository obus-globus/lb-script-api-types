import type { RealmsClient } from '../../../../com/mojang/realmsclient/client/RealmsClient.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RealmsUtil$RealmsIoFunction<T extends unknown> extends Object{
    apply(client: RealmsClient): T;
}
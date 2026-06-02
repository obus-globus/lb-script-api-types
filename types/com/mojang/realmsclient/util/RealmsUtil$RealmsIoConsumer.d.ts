import type { RealmsClient } from '../../../../com/mojang/realmsclient/client/RealmsClient.d.ts'
import type { RealmsUtil$RealmsIoFunction } from '../../../../com/mojang/realmsclient/util/RealmsUtil$RealmsIoFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RealmsUtil$RealmsIoConsumer extends RealmsUtil$RealmsIoFunction<void>, Object{
    accept(client: RealmsClient): void;
    apply(client: RealmsClient): void;
}
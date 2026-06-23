import type { RealmsClient } from '../../../com/mojang/realmsclient/client/RealmsClient.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RealmsMainScreen$RealmsCall<T extends unknown> extends Object{
    request(realmsClient: RealmsClient): T;
}
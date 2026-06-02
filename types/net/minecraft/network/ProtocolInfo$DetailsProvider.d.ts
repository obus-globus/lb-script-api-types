import type { Object } from '../../../java/lang/Object.d.ts'
import type { ProtocolInfo$Details } from '../../../net/minecraft/network/ProtocolInfo$Details.d.ts'
export interface ProtocolInfo$DetailsProvider extends Object{
    details(): ProtocolInfo$Details;
}
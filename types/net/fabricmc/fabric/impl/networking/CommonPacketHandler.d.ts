import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommonRegisterPayload } from '../../../../../net/fabricmc/fabric/impl/networking/CommonRegisterPayload.d.ts'
export interface CommonPacketHandler extends Object{
    createRegisterPayload(): CommonRegisterPayload;
    getNegotiatedVersion(): number;
    onCommonRegisterPacket(arg0: CommonRegisterPayload): void;
    onCommonVersionPacket(arg0: number): void;
}
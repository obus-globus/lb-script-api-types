import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ViaChannelHandler extends Object{
    connection(): UserConnection;
}
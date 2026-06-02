import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Connection } from '../../../../../../../net/minecraft/network/Connection.d.ts'
export interface MinecraftAccessor extends Object{
    getPendingConnection(): Connection;
}
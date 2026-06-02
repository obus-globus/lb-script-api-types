import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConfigurationTask } from '../../../../../../net/minecraft/server/network/ConfigurationTask.d.ts'
import type { ConfigurationTask$Type } from '../../../../../../net/minecraft/server/network/ConfigurationTask$Type.d.ts'
export interface FabricServerConfigurationPacketListenerImpl extends Object{
    addTask(arg0: ConfigurationTask): void;
    completeTask(arg0: ConfigurationTask$Type): void;
}
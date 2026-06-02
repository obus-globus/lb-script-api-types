import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface FabricRegistryFriendlyByteBuf extends Object{
    fabric_getSendableConfigurationChannels(): Identifier[];
    fabric_setSendableConfigurationChannels(arg0: Identifier[]): void;
}
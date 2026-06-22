import type { Object } from '../../../java/lang/Object.d.ts'
import type { ClientAsset } from '../../../net/minecraft/core/ClientAsset.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export interface ClientAsset$Texture extends Object, ClientAsset{
    id(): Identifier;
    texturePath(): Identifier;
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModInitializer } from '../../../../../../net/fabricmc/api/ModInitializer.d.ts'
import type { PacketContext$Key } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext$Key.d.ts'
import type { ServerboundCustomIngredientPayload } from '../../../../../../net/fabricmc/fabric/impl/recipe/ingredient/ServerboundCustomIngredientPayload.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class CustomIngredientSync extends Object implements ModInitializer {
    static PACKET_ID: Identifier;
    static PROTOCOL_VERSION_1: number;
    static SUPPORTED_CUSTOM_INGREDIENTS: PacketContext$Key<Object>;
    static createResponsePayload(paramarg0: number): ServerboundCustomIngredientPayload;
    static decodeResponsePayload(paramarg0: ServerboundCustomIngredientPayload): Identifier[];
    constructor()
    onInitialize(): void;
}
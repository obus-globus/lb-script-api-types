import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModInitializer } from '../../../../../net/fabricmc/api/ModInitializer.d.ts'
import type { ExtendedMenuProvider } from '../../../../../net/fabricmc/fabric/api/menu/v1/ExtendedMenuProvider.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { AbstractContainerMenu } from '../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
export class Networking extends Object implements ModInitializer {
    static CODEC_BY_ID: Map<Identifier, StreamCodec<Object, Object>>;
    static OPEN_ID: Identifier;
    static sendOpenPacket(paramarg0: ServerPlayer, paramarg1: ExtendedMenuProvider<Object>, paramarg2: AbstractContainerMenu, paramarg3: number): void;
    constructor()
    onInitialize(): void;
}
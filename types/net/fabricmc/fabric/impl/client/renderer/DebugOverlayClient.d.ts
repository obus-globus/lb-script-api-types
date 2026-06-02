import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientModInitializer } from '../../../../../../net/fabricmc/api/ClientModInitializer.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class DebugOverlayClient extends Object implements ClientModInitializer {
    static ACTIVE_RENDERER: Identifier;
    constructor()
    onInitializeClient(): void;
}
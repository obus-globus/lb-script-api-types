import type { ViaCommandSender } from '../../../../../../com/viaversion/viaversion/api/command/ViaCommandSender.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SharedSuggestionProvider } from '../../../../../../net/minecraft/commands/SharedSuggestionProvider.d.ts'
export class ViaFabricPlusCommandSender extends Object implements ViaCommandSender {
    constructor(arg0: SharedSuggestionProvider)
    // private source: SharedSuggestionProvider;
    getName(): string;
    getUUID(): UUID;
    hasPermission(arg0: string): boolean;
    sendMessage(arg0: string): void;
}
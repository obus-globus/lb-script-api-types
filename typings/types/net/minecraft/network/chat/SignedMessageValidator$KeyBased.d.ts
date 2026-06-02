import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PlayerChatMessage } from '../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
import type { SignedMessageValidator } from '../../../../net/minecraft/network/chat/SignedMessageValidator.d.ts'
import type { SignatureValidator } from '../../../../net/minecraft/util/SignatureValidator.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class SignedMessageValidator$KeyBased extends Object implements SignedMessageValidator {
    static ACCEPT_UNSIGNED: (param0: PlayerChatMessage) => net.minecraft.network.chat.PlayerChatMessage;
    static LOGGER: Logger;
    static REJECT_ALL: (param0: PlayerChatMessage) => net.minecraft.network.chat.PlayerChatMessage;
    constructor(validator: SignatureValidator, expired: () => kotlin.Boolean)
    // private expired: () => kotlin.Boolean;
    // private isChainValid: boolean;
    // private lastMessage: PlayerChatMessage;
    // private validator: SignatureValidator;
    updateAndValidate(message: PlayerChatMessage): PlayerChatMessage;
    // private validate(message: PlayerChatMessage): boolean;
    // private validateChain(message: PlayerChatMessage): boolean;
}
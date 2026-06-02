import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CommandSigningContext } from '../../../net/minecraft/commands/CommandSigningContext.d.ts'
import type { PlayerChatMessage } from '../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
export class CommandSigningContext$SignedArguments extends Record implements CommandSigningContext {
    static ANONYMOUS: CommandSigningContext;
    constructor(arguments: { [key: string]: PlayerChatMessage })
    // private arguments: { [key: string]: PlayerChatMessage };
    arguments(): { [key: string]: PlayerChatMessage };
    equals(o: Object | null): boolean;
    getArgument(name: string): PlayerChatMessage;
    hashCode(): number;
    toString(): string;
}
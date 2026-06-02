import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ArgumentSignatures$Entry } from '../../../../net/minecraft/commands/arguments/ArgumentSignatures$Entry.d.ts'
import type { ArgumentSignatures$Signer } from '../../../../net/minecraft/commands/arguments/ArgumentSignatures$Signer.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { SignableCommand } from '../../../../net/minecraft/network/chat/SignableCommand.d.ts'
export class ArgumentSignatures extends Record {
    static EMPTY: ArgumentSignatures;
    static signCommand(paramcommand: SignableCommand<Object>, paramsigner: (param0: string) => net.minecraft.network.chat.MessageSignature): ArgumentSignatures;
    constructor(entries: ArgumentSignatures$Entry[])
    constructor(input: FriendlyByteBuf)
    // private entries: ArgumentSignatures$Entry[];
    entries(): ArgumentSignatures$Entry[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    write(output: FriendlyByteBuf): void;
}
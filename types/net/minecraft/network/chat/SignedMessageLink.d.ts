import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SignatureUpdater$Output } from '../../../../net/minecraft/util/SignatureUpdater$Output.d.ts'
export class SignedMessageLink extends Record {
    static CODEC: Codec<SignedMessageLink>;
    static root(paramsender: UUID, paramsessionId: UUID): SignedMessageLink;
    static unsigned(paramsender: UUID): SignedMessageLink;
    // private index: number;
    // private sender: UUID;
    // private sessionId: UUID;
    advance(): SignedMessageLink;
    equals(o: Object | null): boolean;
    hashCode(): number;
    index(): number;
    isDescendantOf(link: SignedMessageLink): boolean;
    sender(): UUID;
    sessionId(): UUID;
    toString(): string;
    updateSignature(output: (param0: number[]) => void): void;
}
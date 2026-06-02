import type { Instant } from '../../../java/time/Instant.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class CriterionProgress extends Object {
    static fromNetwork(paraminput: FriendlyByteBuf): CriterionProgress;
    constructor()
    constructor(obtained: Instant)
    readonly obtained: Instant;
    getObtained(): Instant;
    grant(): void;
    isDone(): boolean;
    revoke(): void;
    serializeToNetwork(output: FriendlyByteBuf): void;
    toString(): string;
}
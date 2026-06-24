import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ClientboundCommandsPacket$NodeStub } from '../../../../../net/minecraft/network/protocol/game/ClientboundCommandsPacket$NodeStub.d.ts'
export class ClientboundCommandsPacket$Entry extends Record {
    private constructor(stub: ClientboundCommandsPacket$NodeStub, flags: number, redirect: number, children: number[])
    // private children: number[];
    // private flags: number;
    // private redirect: number;
    // private stub: ClientboundCommandsPacket$NodeStub;
    canBuild(unbuiltNodes: (Object | null)[]): boolean;
    canResolve(unresolvedNodes: (Object | null)[]): boolean;
    children(): number[];
    equals(o: Object | null): boolean;
    flags(): number;
    hashCode(): number;
    redirect(): number;
    stub(): ClientboundCommandsPacket$NodeStub;
    toString(): string;
    write(output: FriendlyByteBuf): void;
}
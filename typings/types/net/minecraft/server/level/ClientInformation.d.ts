import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ParticleStatus } from '../../../../net/minecraft/server/level/ParticleStatus.d.ts'
import type { HumanoidArm } from '../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { ChatVisiblity } from '../../../../net/minecraft/world/entity/player/ChatVisiblity.d.ts'
export class ClientInformation extends Record {
    static MAX_LANGUAGE_LENGTH: number;
    static createDefault(): ClientInformation;
    // private allowsListing: boolean;
    // private chatColors: boolean;
    // private chatVisibility: ChatVisiblity;
    // private language: string;
    // private mainHand: HumanoidArm;
    // private modelCustomisation: number;
    // private particleStatus: ParticleStatus;
    // private textFilteringEnabled: boolean;
    // private viewDistance: number;
    allowsListing(): boolean;
    chatColors(): boolean;
    chatVisibility(): ChatVisiblity;
    equals(o: Object | null): boolean;
    hashCode(): number;
    language(): string;
    mainHand(): HumanoidArm;
    modelCustomisation(): number;
    particleStatus(): ParticleStatus;
    textFilteringEnabled(): boolean;
    toString(): string;
    viewDistance(): number;
    write(output: FriendlyByteBuf): void;
}
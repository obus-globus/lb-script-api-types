import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SoundEvent } from '../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundType } from '../../../../../../../net/minecraft/world/level/block/SoundType.d.ts'
import type { BlockSetType$PressurePlateSensitivity } from '../../../../../../../net/minecraft/world/level/block/state/properties/BlockSetType$PressurePlateSensitivity.d.ts'
export class BlockSetType extends Record {
    static ACACIA: BlockSetType;
    static BAMBOO: BlockSetType;
    static BIRCH: BlockSetType;
    static CHERRY: BlockSetType;
    static CODEC: Codec<BlockSetType>;
    static COPPER: BlockSetType;
    static CRIMSON: BlockSetType;
    static DARK_OAK: BlockSetType;
    static GOLD: BlockSetType;
    static IRON: BlockSetType;
    static JUNGLE: BlockSetType;
    static MANGROVE: BlockSetType;
    static OAK: BlockSetType;
    static PALE_OAK: BlockSetType;
    static POLISHED_BLACKSTONE: BlockSetType;
    static SPRUCE: BlockSetType;
    static STONE: BlockSetType;
    static WARPED: BlockSetType;
    static register(paramtype: BlockSetType): BlockSetType;
    static values(): Stream<BlockSetType>;
    // private buttonClickOff: SoundEvent;
    // private buttonClickOn: SoundEvent;
    // private canButtonBeActivatedByArrows: boolean;
    // private canOpenByHand: boolean;
    // private canOpenByWindCharge: boolean;
    // private doorClose: SoundEvent;
    // private doorOpen: SoundEvent;
    // private name: string;
    // private pressurePlateClickOff: SoundEvent;
    // private pressurePlateClickOn: SoundEvent;
    // private pressurePlateSensitivity: BlockSetType$PressurePlateSensitivity;
    // private soundType: SoundType;
    // private trapdoorClose: SoundEvent;
    // private trapdoorOpen: SoundEvent;
    buttonClickOff(): SoundEvent;
    buttonClickOn(): SoundEvent;
    canButtonBeActivatedByArrows(): boolean;
    canOpenByHand(): boolean;
    canOpenByWindCharge(): boolean;
    doorClose(): SoundEvent;
    doorOpen(): SoundEvent;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    pressurePlateClickOff(): SoundEvent;
    pressurePlateClickOn(): SoundEvent;
    pressurePlateSensitivity(): BlockSetType$PressurePlateSensitivity;
    soundType(): SoundType;
    toString(): string;
    trapdoorClose(): SoundEvent;
    trapdoorOpen(): SoundEvent;
}
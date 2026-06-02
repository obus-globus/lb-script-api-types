import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SoundEvent } from '../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundType } from '../../../../../../../net/minecraft/world/level/block/SoundType.d.ts'
import type { BlockSetType } from '../../../../../../../net/minecraft/world/level/block/state/properties/BlockSetType.d.ts'
export class WoodType extends Record {
    static ACACIA: WoodType;
    static BAMBOO: WoodType;
    static BIRCH: WoodType;
    static CHERRY: WoodType;
    static CODEC: Codec<WoodType>;
    static CRIMSON: WoodType;
    static DARK_OAK: WoodType;
    static JUNGLE: WoodType;
    static MANGROVE: WoodType;
    static OAK: WoodType;
    static PALE_OAK: WoodType;
    static SPRUCE: WoodType;
    static WARPED: WoodType;
    static register(paramtype: WoodType): WoodType;
    static values(): Stream<WoodType>;
    constructor(name: string, setType: BlockSetType)
    constructor(name: string, setType: BlockSetType, soundType: SoundType, hangingSignSoundType: SoundType, fenceGateClose: SoundEvent, fenceGateOpen: SoundEvent)
    // private fenceGateClose: SoundEvent;
    // private fenceGateOpen: SoundEvent;
    // private hangingSignSoundType: SoundType;
    // private name: string;
    // private setType: BlockSetType;
    // private soundType: SoundType;
    equals(o: Object | null): boolean;
    fenceGateClose(): SoundEvent;
    fenceGateOpen(): SoundEvent;
    hangingSignSoundType(): SoundType;
    hashCode(): number;
    name(): string;
    setType(): BlockSetType;
    soundType(): SoundType;
    toString(): string;
}
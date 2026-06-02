import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundType } from '../../../../../../../../../net/minecraft/world/level/block/SoundType.d.ts'
import type { BlockSetType } from '../../../../../../../../../net/minecraft/world/level/block/state/properties/BlockSetType.d.ts'
import type { WoodType } from '../../../../../../../../../net/minecraft/world/level/block/state/properties/WoodType.d.ts'
export class WoodTypeBuilder extends Object {
    static copyOf(paramarg0: WoodTypeBuilder): WoodTypeBuilder;
    static copyOf(paramarg0: WoodType): WoodTypeBuilder;
    constructor()
    // private fenceGateCloseSound: SoundEvent;
    // private fenceGateOpenSound: SoundEvent;
    // private hangingSignSoundType: SoundType;
    // private soundType: SoundType;
    build(arg0: Identifier, arg1: BlockSetType): WoodType;
    fenceGateCloseSound(arg0: SoundEvent): WoodTypeBuilder;
    fenceGateOpenSound(arg0: SoundEvent): WoodTypeBuilder;
    hangingSignSoundType(arg0: SoundType): WoodTypeBuilder;
    register(arg0: Identifier, arg1: BlockSetType): WoodType;
    soundType(arg0: SoundType): WoodTypeBuilder;
}
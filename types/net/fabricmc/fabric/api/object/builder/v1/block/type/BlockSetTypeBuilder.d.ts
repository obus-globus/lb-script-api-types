import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundType } from '../../../../../../../../../net/minecraft/world/level/block/SoundType.d.ts'
import type { BlockSetType } from '../../../../../../../../../net/minecraft/world/level/block/state/properties/BlockSetType.d.ts'
import type { BlockSetType$PressurePlateSensitivity } from '../../../../../../../../../net/minecraft/world/level/block/state/properties/BlockSetType$PressurePlateSensitivity.d.ts'
export class BlockSetTypeBuilder extends Object {
    static copyOf(paramarg0: BlockSetTypeBuilder): BlockSetTypeBuilder;
    static copyOf(paramarg0: BlockSetType): BlockSetTypeBuilder;
    constructor()
    // private buttonActivatedByArrows: boolean;
    // private buttonClickOffSound: SoundEvent;
    // private buttonClickOnSound: SoundEvent;
    // private doorCloseSound: SoundEvent;
    // private doorOpenSound: SoundEvent;
    // private openableByHand: boolean;
    // private openableByWindCharge: boolean;
    // private pressurePlateActivationRule: BlockSetType$PressurePlateSensitivity;
    // private pressurePlateClickOffSound: SoundEvent;
    // private pressurePlateClickOnSound: SoundEvent;
    // private soundType: SoundType;
    // private trapdoorCloseSound: SoundEvent;
    // private trapdoorOpenSound: SoundEvent;
    build(arg0: Identifier): BlockSetType;
    buttonActivatedByArrows(arg0: boolean): BlockSetTypeBuilder;
    buttonClickOffSound(arg0: SoundEvent): BlockSetTypeBuilder;
    buttonClickOnSound(arg0: SoundEvent): BlockSetTypeBuilder;
    doorCloseSound(arg0: SoundEvent): BlockSetTypeBuilder;
    doorOpenSound(arg0: SoundEvent): BlockSetTypeBuilder;
    openableByHand(arg0: boolean): BlockSetTypeBuilder;
    openableByWindCharge(arg0: boolean): BlockSetTypeBuilder;
    pressurePlateActivationRule(arg0: BlockSetType$PressurePlateSensitivity): BlockSetTypeBuilder;
    pressurePlateClickOffSound(arg0: SoundEvent): BlockSetTypeBuilder;
    pressurePlateClickOnSound(arg0: SoundEvent): BlockSetTypeBuilder;
    register(arg0: Identifier): BlockSetType;
    soundType(arg0: SoundType): BlockSetTypeBuilder;
    trapdoorCloseSound(arg0: SoundEvent): BlockSetTypeBuilder;
    trapdoorOpenSound(arg0: SoundEvent): BlockSetTypeBuilder;
}
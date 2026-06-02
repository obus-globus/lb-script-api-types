import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SoundTypeBuilder$RegistrationBuilder } from '../../../../../../net/fabricmc/fabric/api/client/datagen/v1/builder/SoundTypeBuilder$RegistrationBuilder.d.ts'
import type { SoundTypeBuilder$RegistrationType } from '../../../../../../net/fabricmc/fabric/api/client/datagen/v1/builder/SoundTypeBuilder$RegistrationType.d.ts'
import type { SoundTypeBuilderImpl$Entry } from '../../../../../../net/fabricmc/fabric/impl/datagen/client/SoundTypeBuilderImpl$Entry.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class SoundTypeBuilderImpl$RegistrationBuilderImpl extends Object implements SoundTypeBuilder$RegistrationBuilder {
    static DEFAULT_ATTENUATION_DISTANCE: number;
    static DEFAULT_PITCH: number;
    static DEFAULT_VOLUME: number;
    static DEFAULT_WEIGHT: number;
    static create(paramarg0: SoundTypeBuilder$RegistrationType, paramarg1: Identifier): SoundTypeBuilder$RegistrationBuilder;
    static create(paramarg0: SoundTypeBuilder$RegistrationType, paramarg1: Identifier): SoundTypeBuilder$RegistrationBuilder;
    static ofEvent(paramarg0: Holder<SoundEvent>): SoundTypeBuilder$RegistrationBuilder;
    static ofEvent(paramarg0: SoundEvent): SoundTypeBuilder$RegistrationBuilder;
    static ofEvent(paramarg0: Holder<SoundEvent>): SoundTypeBuilder$RegistrationBuilder;
    static ofEvent(paramarg0: SoundEvent): SoundTypeBuilder$RegistrationBuilder;
    static ofFile(paramarg0: Identifier): SoundTypeBuilder$RegistrationBuilder;
    static ofFile(paramarg0: Identifier): SoundTypeBuilder$RegistrationBuilder;
    private constructor(arg0: SoundTypeBuilder$RegistrationType, arg1: Identifier)
    // private attenuationDistance: number;
    // private id: Identifier;
    // private pitch: number;
    // private preload: boolean;
    // private stream: boolean;
    // private type: SoundTypeBuilder$RegistrationType;
    // private volume: number;
    // private weight: number;
    attenuationDistance(arg0: number): SoundTypeBuilder$RegistrationBuilder;
    build(arg0: string): SoundTypeBuilderImpl$Entry;
    pitch(arg0: number): SoundTypeBuilder$RegistrationBuilder;
    preload(arg0: boolean): SoundTypeBuilder$RegistrationBuilder;
    stream(arg0: boolean): SoundTypeBuilder$RegistrationBuilder;
    volume(arg0: number): SoundTypeBuilder$RegistrationBuilder;
    weight(arg0: number): SoundTypeBuilder$RegistrationBuilder;
}
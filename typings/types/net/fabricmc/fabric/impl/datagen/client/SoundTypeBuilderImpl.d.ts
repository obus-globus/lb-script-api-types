import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SoundTypeBuilder } from '../../../../../../net/fabricmc/fabric/api/client/datagen/v1/builder/SoundTypeBuilder.d.ts'
import type { SoundTypeBuilder$RegistrationBuilder } from '../../../../../../net/fabricmc/fabric/api/client/datagen/v1/builder/SoundTypeBuilder$RegistrationBuilder.d.ts'
import type { SoundTypeBuilderImpl$Entry } from '../../../../../../net/fabricmc/fabric/impl/datagen/client/SoundTypeBuilderImpl$Entry.d.ts'
import type { SoundTypeBuilderImpl$SoundType } from '../../../../../../net/fabricmc/fabric/impl/datagen/client/SoundTypeBuilderImpl$SoundType.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../../../net/minecraft/sounds/SoundSource.d.ts'
export class SoundTypeBuilderImpl extends Object implements SoundTypeBuilder {
    static of(): SoundTypeBuilder;
    static of(paramarg0: SoundEvent): SoundTypeBuilder;
    constructor()
    // private replace: boolean;
    // private sounds: SoundTypeBuilderImpl$Entry[];
    // private subtitle: string;
    build(): SoundTypeBuilderImpl$SoundType;
    replace(arg0: boolean): SoundTypeBuilder;
    sound(arg0: SoundTypeBuilder$RegistrationBuilder): SoundTypeBuilder;
    sound(arg0: SoundTypeBuilder$RegistrationBuilder, arg1: number): SoundTypeBuilder;
    source(arg0: SoundSource): SoundTypeBuilder;
    subtitle(arg0: string): SoundTypeBuilder;
}
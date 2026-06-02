import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { SoundTypeBuilder$RegistrationBuilder } from '../../../../../../../../net/fabricmc/fabric/api/client/datagen/v1/builder/SoundTypeBuilder$RegistrationBuilder.d.ts'
import type { SoundSource } from '../../../../../../../../net/minecraft/sounds/SoundSource.d.ts'
export interface SoundTypeBuilder extends Object{
    replace(arg0: boolean): SoundTypeBuilder;
    sound(arg0: SoundTypeBuilder$RegistrationBuilder): SoundTypeBuilder;
    sound(arg0: SoundTypeBuilder$RegistrationBuilder, arg1: number): SoundTypeBuilder;
    source(arg0: SoundSource): SoundTypeBuilder;
    subtitle(arg0: string): SoundTypeBuilder;
}
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { SoundTypeBuilder } from '../../../../../../../../net/fabricmc/fabric/api/client/datagen/v1/builder/SoundTypeBuilder.d.ts'
import type { Holder } from '../../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export interface FabricSoundsProvider$SoundExporter extends Object{
    add(arg0: Holder<SoundEvent>, arg1: SoundTypeBuilder): void;
    add(arg0: Identifier, arg1: SoundTypeBuilder): void;
    add(arg0: SoundEvent, arg1: SoundTypeBuilder): void;
}
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FluidVariant } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidVariant.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { SoundEvent } from '../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
export interface FluidVariantAttributeHandler extends Object{
    getEmptySound(arg0: FluidVariant): Optional<SoundEvent>;
    getFillSound(arg0: FluidVariant): Optional<SoundEvent>;
    getLightEmission(arg0: FluidVariant): number;
    getName(arg0: FluidVariant): Component;
    getTemperature(arg0: FluidVariant): number;
    getViscosity(arg0: FluidVariant, arg1: Level): number;
    isLighterThanAir(arg0: FluidVariant): boolean;
}
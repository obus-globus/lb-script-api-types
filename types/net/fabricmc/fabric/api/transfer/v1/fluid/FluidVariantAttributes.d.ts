import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FluidVariant } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidVariant.d.ts'
import type { FluidVariantAttributeHandler } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidVariantAttributeHandler.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { SoundEvent } from '../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Fluid } from '../../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class FluidVariantAttributes extends Object {
    static enableColoredVanillaFluidNames(): void;
    static getEmptySound(paramarg0: FluidVariant): SoundEvent;
    static getFillSound(paramarg0: FluidVariant): SoundEvent;
    static getHandler(paramarg0: Fluid): FluidVariantAttributeHandler;
    static getHandlerOrDefault(paramarg0: Fluid): FluidVariantAttributeHandler;
    static getLuminance(paramarg0: FluidVariant): number;
    static getName(paramarg0: FluidVariant): Component;
    static getTemperature(paramarg0: FluidVariant): number;
    static getViscosity(paramarg0: FluidVariant, paramarg1: Level): number;
    static isLighterThanAir(paramarg0: FluidVariant): boolean;
    static register(paramarg0: Fluid, paramarg1: FluidVariantAttributeHandler): void;
    private constructor()
}
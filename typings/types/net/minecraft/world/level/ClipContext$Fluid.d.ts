import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class ClipContext$Fluid extends Enum<ClipContext$Fluid> {
    static ANY: ClipContext$Fluid;
    static NONE: ClipContext$Fluid;
    static SOURCE_ONLY: ClipContext$Fluid;
    static WATER: ClipContext$Fluid;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ClipContext$Fluid;
    static values(): ClipContext$Fluid[];
    private constructor(canPick: (param0: FluidState) => boolean)
    // private canPick: (param0: FluidState) => boolean;
    canPick(fluidState: FluidState): boolean;
    name(): "NONE" | "SOURCE_ONLY" | "ANY" | "WATER";
}
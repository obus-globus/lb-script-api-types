import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class ClipContext$Fluid extends Enum<ClipContext$Fluid> {
    static ANY: ClipContext$Fluid;
    static NONE: ClipContext$Fluid;
    static SOURCE_ONLY: ClipContext$Fluid;
    static WATER: ClipContext$Fluid;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ClipContext$Fluid;
    static values(): (Object | null)[];
    private constructor(canPick: (param0: FluidState) => kotlin.Boolean)
    // private canPick: (param0: FluidState) => kotlin.Boolean;
    canPick(fluidState: FluidState): boolean;
    name(): "NONE" | "SOURCE_ONLY" | "ANY" | "WATER";
}
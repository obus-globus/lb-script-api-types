import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NewMinecartBehavior$MinecartStep } from '../../../../../../net/minecraft/world/entity/vehicle/minecart/NewMinecartBehavior$MinecartStep.d.ts'
export class NewMinecartBehavior$StepPartialTicks extends Record {
    // private currentStep: NewMinecartBehavior$MinecartStep;
    // private partialTicksInStep: number;
    // private previousStep: NewMinecartBehavior$MinecartStep;
    currentStep(): NewMinecartBehavior$MinecartStep;
    equals(o: Object | null): boolean;
    hashCode(): number;
    partialTicksInStep(): number;
    previousStep(): NewMinecartBehavior$MinecartStep;
    toString(): string;
}
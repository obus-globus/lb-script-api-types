import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Tutorial } from '../../../../net/minecraft/client/tutorial/Tutorial.d.ts'
import type { TutorialStepInstance } from '../../../../net/minecraft/client/tutorial/TutorialStepInstance.d.ts'
export class TutorialSteps extends Enum<TutorialSteps> {
    static CRAFT_PLANKS: TutorialSteps;
    static FIND_TREE: TutorialSteps;
    static MOVEMENT: TutorialSteps;
    static NONE: TutorialSteps;
    static OPEN_INVENTORY: TutorialSteps;
    static PUNCH_TREE: TutorialSteps;
    static getByName(paramname: string): TutorialSteps;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TutorialSteps;
    static values(): TutorialSteps[];
    private constructor(name: string, constructor: (param0: Tutorial) => TutorialStepInstance)
    // private constructor: (param0: Tutorial) => TutorialStepInstance;
    create(tutorial: Tutorial): TutorialStepInstance;
    getName(): string;
    name(): "MOVEMENT" | "FIND_TREE" | "PUNCH_TREE" | "OPEN_INVENTORY" | "CRAFT_PLANKS" | "NONE";
}
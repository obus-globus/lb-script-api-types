import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class FollowPlayerRiddenEntityGoal$FollowEntityGoal extends Enum<FollowPlayerRiddenEntityGoal$FollowEntityGoal> {
    static GO_IN_ENTITY_DIRECTION: FollowPlayerRiddenEntityGoal$FollowEntityGoal;
    static GO_TO_ENTITY: FollowPlayerRiddenEntityGoal$FollowEntityGoal;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FollowPlayerRiddenEntityGoal$FollowEntityGoal;
    static values(): FollowPlayerRiddenEntityGoal$FollowEntityGoal[];
    private constructor()
    name(): "GO_TO_ENTITY" | "GO_IN_ENTITY_DIRECTION";
}
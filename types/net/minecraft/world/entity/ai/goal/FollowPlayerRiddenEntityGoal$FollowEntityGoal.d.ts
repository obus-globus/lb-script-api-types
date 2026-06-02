import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class FollowPlayerRiddenEntityGoal$FollowEntityGoal extends Enum<FollowPlayerRiddenEntityGoal$FollowEntityGoal> {
    static GO_IN_ENTITY_DIRECTION: FollowPlayerRiddenEntityGoal$FollowEntityGoal;
    static GO_TO_ENTITY: FollowPlayerRiddenEntityGoal$FollowEntityGoal;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FollowPlayerRiddenEntityGoal$FollowEntityGoal;
    static values(): (Object | null)[];
    private constructor()
    name(): "GO_TO_ENTITY" | "GO_IN_ENTITY_DIRECTION";
}
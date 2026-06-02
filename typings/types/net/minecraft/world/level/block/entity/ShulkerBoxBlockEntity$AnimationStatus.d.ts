import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ShulkerBoxBlockEntity$AnimationStatus extends Enum<ShulkerBoxBlockEntity$AnimationStatus> {
    static CLOSED: ShulkerBoxBlockEntity$AnimationStatus;
    static CLOSING: ShulkerBoxBlockEntity$AnimationStatus;
    static OPENED: ShulkerBoxBlockEntity$AnimationStatus;
    static OPENING: ShulkerBoxBlockEntity$AnimationStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ShulkerBoxBlockEntity$AnimationStatus;
    static values(): (Object | null)[];
    private constructor()
    name(): "CLOSED" | "OPENING" | "OPENED" | "CLOSING";
}
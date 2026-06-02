import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class VelocityReduce$Debug extends ToggleableValueGroup {
    static INSTANCE: VelocityReduce$Debug;
    readonly chatMessage: boolean;
    readonly notification: boolean;
    notify(message: string): void;
}
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IActivityContext$IActivity } from '../../../../../org/spongepowered/asm/mixin/extensibility/IActivityContext$IActivity.d.ts'
export class ActivityStack$Activity extends Object implements IActivityContext$IActivity {
    constructor(null_: ActivityStack$Activity, arg1: ActivityStack$Activity, arg2: string)
    description: string;
    // private last: ActivityStack$Activity;
    // private next: ActivityStack$Activity;
    append(arg0: string): void;
    append(arg0: string, arg1: Object[]): void;
    end(): void;
    next(arg0: string): void;
    next(arg0: string, arg1: Object[]): void;
}
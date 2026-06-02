import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IActivityContext } from '../../../../../org/spongepowered/asm/mixin/extensibility/IActivityContext.d.ts'
import type { IActivityContext$IActivity } from '../../../../../org/spongepowered/asm/mixin/extensibility/IActivityContext$IActivity.d.ts'
import type { ActivityStack$Activity } from '../../../../../org/spongepowered/asm/mixin/transformer/ActivityStack$Activity.d.ts'
export class ActivityStack extends Object implements IActivityContext {
    static GLUE_STRING: string;
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    // private glue: string;
    // private head: ActivityStack$Activity;
    // private tail: ActivityStack$Activity;
    begin(arg0: string): IActivityContext$IActivity;
    begin(arg0: string, arg1: Object[]): IActivityContext$IActivity;
    clear(): void;
    end(arg0: ActivityStack$Activity): void;
    toString(): string;
    toString(arg0: string): string;
}
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IActivityContext$IActivity } from '../../../../../org/spongepowered/asm/mixin/extensibility/IActivityContext$IActivity.d.ts'
export interface IActivityContext extends Object{
    begin(arg0: string): IActivityContext$IActivity;
    begin(arg0: string, arg1: Object[]): IActivityContext$IActivity;
    clear(): void;
    toString(arg0: string): string;
}
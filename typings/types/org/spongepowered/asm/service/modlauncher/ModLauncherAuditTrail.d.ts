import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IMixinAuditTrail } from '../../../../../org/spongepowered/asm/service/IMixinAuditTrail.d.ts'
export class ModLauncherAuditTrail extends Object implements IMixinAuditTrail {
    constructor()
    // private consumer: (param0: string[]) => void;
    // private currentClass: string;
    onApply(arg0: string, arg1: string): void;
    onGenerate(arg0: string, arg1: string): void;
    onPostProcess(arg0: string): void;
    setConsumer(arg0: string, arg1: (param0: string[]) => void): void;
    // private writeActivity(arg0: string, ...arg1: string[]): void;
}
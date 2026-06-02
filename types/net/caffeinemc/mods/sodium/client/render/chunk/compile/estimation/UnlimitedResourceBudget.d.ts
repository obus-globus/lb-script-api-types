import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { UploadResourceBudget } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/UploadResourceBudget.d.ts'
export class UnlimitedResourceBudget extends Object implements UploadResourceBudget {
    static INSTANCE: UnlimitedResourceBudget;
    constructor()
    consume(arg0: number, arg1: number): void;
    isAvailable(): boolean;
}
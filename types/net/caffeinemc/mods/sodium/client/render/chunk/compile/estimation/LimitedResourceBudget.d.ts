import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { UploadResourceBudget } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/UploadResourceBudget.d.ts'
export class LimitedResourceBudget extends Object implements UploadResourceBudget {
    constructor(arg0: number, arg1: number)
    // private duration: number;
    // private size: number;
    consume(arg0: number, arg1: number): void;
    isAvailable(): boolean;
}
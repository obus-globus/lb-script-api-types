import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class GlResource extends Object {
    constructor(arg0: number)
    // private id: number;
    // private isValid: boolean;
    assertValid(): void;
    destroy(): void;
    destroyInternal(): void;
    getGlId(): number;
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GlObject extends Object {
    constructor()
    // private handle: number;
    checkHandle(): void;
    handle(): number;
    invalidateHandle(): void;
    isHandleValid(): boolean;
    setHandle(arg0: number): void;
}
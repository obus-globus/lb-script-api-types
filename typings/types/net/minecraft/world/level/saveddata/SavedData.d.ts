import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class SavedData extends Object {
    constructor()
    readonly dirty: boolean;
    isDirty(): boolean;
    setDirty(): void;
    setDirty(dirty: boolean): void;
}
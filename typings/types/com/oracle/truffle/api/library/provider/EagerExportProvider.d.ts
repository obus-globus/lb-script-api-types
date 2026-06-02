import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface EagerExportProvider extends Object{
    ensureRegistered(): void;
    getLibraryClassName(): string;
}
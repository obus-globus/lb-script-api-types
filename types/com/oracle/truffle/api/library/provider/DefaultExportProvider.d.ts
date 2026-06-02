import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DefaultExportProvider extends Object{
    getDefaultExport(): Class<Object>;
    getLibraryClassName(): string;
    getPriority(): number;
    getReceiverClass(): Class<Object>;
}
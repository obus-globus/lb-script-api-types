import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface AppenderAdminMBean extends Object{
    getErrorHandler(): string;
    getFilter(): string;
    getLayout(): string;
    getName(): string;
    isIgnoreExceptions(): boolean;
}
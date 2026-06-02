import type { Object } from '../../../java/lang/Object.d.ts'
export interface ResourceLeak extends Object{
    close(): boolean;
    record(): void;
    record(arg0: Object): void;
}
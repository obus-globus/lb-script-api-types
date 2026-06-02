import type { Object } from '../../../../java/lang/Object.d.ts'
export interface VMRuntimeSupport extends Object{
    initialize(): void;
    shutdown(): void;
}
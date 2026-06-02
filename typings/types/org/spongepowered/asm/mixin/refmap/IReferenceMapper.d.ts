import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IReferenceMapper extends Object{
    getContext(): string;
    getResourceName(): string;
    getStatus(): string;
    isDefault(): boolean;
    remap(arg0: string, arg1: string): string;
    remapWithContext(arg0: string, arg1: string, arg2: string): string;
    setContext(arg0: string): void;
}
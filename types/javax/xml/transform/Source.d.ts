import type { Object } from '../../../java/lang/Object.d.ts'
export interface Source extends Object{
    getSystemId(): string;
    isEmpty(): boolean;
    setSystemId(arg0: string): void;
}
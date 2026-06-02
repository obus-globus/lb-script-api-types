import type { Object } from '../../java/lang/Object.d.ts'
export interface AutoCloseable extends Object{
    close(): void;
}
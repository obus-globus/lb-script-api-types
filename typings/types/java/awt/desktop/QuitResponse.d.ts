import type { Object } from '../../../java/lang/Object.d.ts'
export interface QuitResponse extends Object{
    cancelQuit(): void;
    performQuit(): void;
}
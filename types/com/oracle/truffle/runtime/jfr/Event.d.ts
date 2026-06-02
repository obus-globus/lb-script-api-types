import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Event extends Object{
    isEnabled(): boolean;
    publish(): void;
}
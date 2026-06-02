import type { Object } from '../../java/lang/Object.d.ts'
export interface AudioClip extends Object{
    loop(): void;
    play(): void;
    stop(): void;
}
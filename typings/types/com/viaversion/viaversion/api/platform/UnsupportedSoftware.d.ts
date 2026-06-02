import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface UnsupportedSoftware extends Object{
    findMatch(): boolean;
    getName(): string;
    getReason(): string;
    match(): string;
}
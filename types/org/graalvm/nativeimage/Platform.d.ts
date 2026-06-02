import type { Object } from '../../../java/lang/Object.d.ts'
export interface Platform extends Object{
    getArchitecture(): string;
    getOS(): string;
}
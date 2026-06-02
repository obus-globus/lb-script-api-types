import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ITokenCache extends Object{
    deserialize(arg0: string): void;
    serialize(): string;
}